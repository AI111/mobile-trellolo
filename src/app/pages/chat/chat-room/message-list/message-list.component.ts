import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IMessageModel} from '../../../../common/models/IMessageModel';
import {AuthService} from '../../../../common/auth.service/auth.service';
import {IUser} from '../../../../common/models/IUser';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageListComponent implements AfterViewInit {
  @Input()
  messages: Observable<IMessageModel[]>;
  private user: IUser;

  constructor(private authService: AuthService) {
    this.user = authService.user;
  }
  ngAfterViewInit(): void {
  }
}
