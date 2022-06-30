import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Subscription } from 'rxjs';

import { Links } from '../main-navigation/main-navigation.component';

@Component({
  selector: 'alekseew-arduino-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private translocoService: TranslocoService) {}

  protected navLinks: Links[] = [];
  private _transNavSub!: Subscription;

  /**
   * Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   */
  ngOnInit(): void {
    this._transNavSub = this.translocoService
      .selectTranslateObject('navigation')
      .subscribe(
        (transNav) =>
          (this.navLinks = [
            { link: '#', title: transNav.home },
            { link: '/times', title: transNav.times, disabled: true },
            { link: '/rankings', title: transNav.rankings, disabled: true },
          ])
      );
  }

  /**
   * Called once, before the instance is destroyed.
   */
  ngOnDestroy(): void {
    this._transNavSub.unsubscribe();
  }
}
