import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostBinding, OnInit, ViewChild} from '@angular/core';
import {IMessageModel} from '../../../common/models/IMessageModel';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {MessageService} from '../services/message.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatRoomComponent implements  AfterViewInit {
  public messages: Observable<IMessageModel[]>;
  public messageForm = new FormGroup({
    message: new FormControl('', [
      Validators.required,
      Validators.maxLength(200),
    ])
  });
  constructor(private route: ActivatedRoute,
              private chat: MessageService,
              private el: ElementRef) {
    this.messages = chat.messages;
  }
  ngAfterViewInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.chat.getMessages(+params.get('id')))
      .subscribe(() => setTimeout(() => this.scrollToBottom()));
  }
  public onScrollUp = (): Observable<any> => {
    return  this.chat.getMessages(+this.route.snapshot.paramMap.get('id')).first();
  }
  scrollToBottom(): void {
    const scrollPane: any = this.el
      .nativeElement.querySelector('.messages-list');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }
  public sendMessage() {
    this.chat.sendMessage(+this.route.snapshot.paramMap.get('id'), this.messageForm.value)
      .subscribe();
    this.messageForm.reset();
    return false;
  }
}
