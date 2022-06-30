import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppComponent } from './app/app.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { SwitchTranslationComponent } from './switch-translation/switch-translation.component';
import { TranslocoRootModule } from './transloco-root.module';

const ANGULAR_MODULES = [
  BrowserModule,
  HttpClientModule,
  BrowserAnimationsModule,
];

const FIREBASE_MODULES = [
  provideFirebaseApp(() => initializeApp(environment.firebase)),
  //provideAnalytics(() => getAnalytics()),
  //provideAuth(() => getAuth()),
  provideDatabase(() => getDatabase()),
  //provideFirestore(() => getFirestore()),
  //provideMessaging(() => getMessaging()),
  //providePerformance(() => getPerformance()),
  //provideRemoteConfig(() => getRemoteConfig()),
  //provideStorage(() => getStorage()),
];

const ANGULAR_MATERIAL_MODULES = [
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    AppFooterComponent,
    SwitchTranslationComponent,
  ],
  imports: [
    ...ANGULAR_MODULES,
    ...FIREBASE_MODULES,
    ...ANGULAR_MATERIAL_MODULES,
    TranslocoRootModule,
  ],
  providers: [
    /*ScreenTrackingService, UserTrackingService*/
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
