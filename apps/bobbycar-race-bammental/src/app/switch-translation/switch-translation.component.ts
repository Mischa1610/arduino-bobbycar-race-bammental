import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'alekseew-arduino-switch-translation',
  templateUrl: './switch-translation.component.html',
  styleUrls: ['./switch-translation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchTranslationComponent {
  constructor(private translocoService: TranslocoService) {}

  changeLocale(locale: string) {
    if (locale) {
      this.translocoService.setActiveLang(locale);
    }
  }
}
