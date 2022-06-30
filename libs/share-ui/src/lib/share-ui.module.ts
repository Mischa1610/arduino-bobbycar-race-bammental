import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BbcrLogoModule } from './bbcr-logo/bbcr-logo.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, BbcrLogoModule],
  exports: [BbcrLogoModule],
})
export class ShareUiModule {}
