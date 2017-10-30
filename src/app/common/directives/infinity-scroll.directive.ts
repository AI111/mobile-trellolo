import {AfterViewInit, Directive, ElementRef, Input, OnDestroy} from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/startWith';
import {debounceTime} from 'rxjs/operator/debounceTime';
import 'rxjs/add/operator/timestamp';
interface ScrollPosition {
  scrollHeight: number;
  scrollTop: number;
  clientHeight: number;
};

const DEFAULT_SCROLL_POSITION: ScrollPosition = {
  scrollHeight: 0,
  scrollTop: 0,
  clientHeight: 0
};

@Directive({
  selector: '[appInfinityScroll]'
})
export class InfiniteScrollDirective implements AfterViewInit, OnDestroy {
  private scrollEvent$;

  private userScrolledDown$;
  private userScrolledUp$;

  private requestStream$;

  private requestOnScroll$;

  @Input()
  scrollDownCallback?: (ev: ScrollPosition) => Observable<any>;

  @Input()
  scrollUpCallback?: (ev: ScrollPosition) => Observable<any>;

  @Input()
  immediateCallback;
  @Input()
  immediateCallbackTop?: boolean;
  @Input()
  scrollPercent = 70;

  constructor(private elm: ElementRef) {
  }

  ngAfterViewInit() {

    this.registerScrollEvent();

    this.streamScrollEvents();

    this.requestCallbackOnScroll();

  }

  private registerScrollEvent() {
    this.scrollEvent$ = Observable.fromEvent(this.elm.nativeElement, 'scroll');
  }

  private streamScrollEvents() {
    this.userScrolledDown$ = this.scrollEvent$
      .map(this.getScrollEvent)
      .pairwise()
      .debounceTime(400)
      .filter(positions => this.isUserScrollingDown(positions) && this.isScrollExpectedPercent(positions[1]));

    this.userScrolledUp$ = this.scrollEvent$
      .map(this.getScrollEvent)
      .pairwise()
      .debounceTime(400)
      .filter(positions => this.isUserScrollingUp(positions) && this.isScrollExpectedPercentTop(positions[1]));

  }

  private requestCallbackOnScroll() {


    if (this.immediateCallback) {
     if (!this.immediateCallbackTop) this.userScrolledDown$ = this.userScrolledDown$
        .startWith([DEFAULT_SCROLL_POSITION, DEFAULT_SCROLL_POSITION]);
     if (this.immediateCallbackTop) this.userScrolledUp$ = this.userScrolledUp$
        .startWith([DEFAULT_SCROLL_POSITION, DEFAULT_SCROLL_POSITION]);
    }

    if(this.scrollDownCallback) this.userScrolledDown$
      .exhaustMap((ev) =>  this.scrollDownCallback(ev))
      .subscribe();
    if(this.scrollUpCallback)this.userScrolledUp$
      .exhaustMap((ev) =>  this.scrollUpCallback(ev))
      .subscribe();

  }
  private getScrollEvent(e: any): ScrollPosition {
    return {
      scrollHeight: e.target.scrollHeight,
      scrollTop: e.target.scrollTop,
      clientHeight: e.target.clientHeight
    };
  }
  private isUserScrollingDown = (positions) => {
    return positions[0].scrollTop < positions[1].scrollTop;
  }
  private isUserScrollingUp = (positions) => {
    return positions[0].scrollTop > positions[1].scrollTop;
  }

  private isScrollExpectedPercent = (position) => {
    return ((position.scrollTop + position.clientHeight) / position.scrollHeight) > (this.scrollPercent / 100);
  }
  private isScrollExpectedPercentTop = (position) => {
    return ((position.scrollTop / position.scrollHeight) < ((100 - this.scrollPercent) / 100));
  }
  ngOnDestroy(): void {
    this.userScrolledDown$.unsubscribe();
    this.userScrolledUp$.unsubscribe();
  }

}
