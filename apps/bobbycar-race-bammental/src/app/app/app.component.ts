import { Message } from '@alekseew-arduino/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Links } from '../main-navigation/main-navigation.component';

@Component({
  selector: 'alekseew-arduino-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly APP_TITLE = 'Bammentaler Bobbycar-Rennen';
  protected readonly MENU_TITLE = 'Menu';

  protected readonly LINKS: Links[] = [
    { link: '#', title: 'Home' },
    { link: '/times', title: 'Rennzeiten', disabled: true },
    { link: '/rankings', title: 'Ranglisten', disabled: true },
  ];

  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
