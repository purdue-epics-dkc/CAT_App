import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConfirmPage } from '../pages/confirm/confirm';
import { AvatarPage } from '../pages/avatar/avatar';
import { TranscriptPage } from '../pages/transcript/transcript';
import { LibraryPage } from '../pages/library/library';
import { AboutPage } from '../pages/about/about';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { BLE } from '@ionic-native/ble';
import { GlovesPage } from '../pages/gloves/gloves';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConfirmPage,
    AvatarPage,
    TranscriptPage,
    LibraryPage,
    AboutPage,
    GlovesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ConfirmPage,
    AvatarPage,
    TranscriptPage,
    LibraryPage,
    AboutPage,
    GlovesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpeechRecognition, 
    BLE
  ]
})
export class AppModule {}
