import {HttpClient} from '@angular/common/http';
import {IAppConfig} from './IAppConfig';
import {Observable} from 'rxjs/Observable';
import {IDBEntity} from './models/IDBEntity';
import {ElementRef} from '@angular/core';
export interface IPaginationService<T extends  IDBEntity> {
  container: Element;
  loadData(id: number, offset: number, limit: number): Observable<T>;
}
export abstract class IBaseCRUDServicr<T extends  IDBEntity> {
  scrollEvent: Observable<{}>;
  private loading: boolean;
  protected scrollPercents;
  public data: Observable<T[]>;
  protected element: ElementRef;
  public get isLoading(): boolean {
    return this.loading;
  }
  constructor(protected service: IPaginationService<T>) {
  }
  protected initScroll(element: ElementRef): void {
    this.element = this.element;
    this.scrollEvent = Observable.fromEvent(element.nativeElement, 'scroll');
  }

}
