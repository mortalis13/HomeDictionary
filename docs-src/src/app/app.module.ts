import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LinksPageComponent } from './links-page/links-page.component';
import * as TUTORIALS from './tutorials-page/tutorials-page.component';
import * as MISC from './misc-pages/misc-pages.component';

import { TestComponent } from './tests/test.component';

import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LinksPageComponent,
    TUTORIALS.TutorialsPageComponent,
    TUTORIALS.TutorialAboutDslFormat,
    TUTORIALS.TutorialCompressDsl,
    TUTORIALS.TutorialConvertToDsl,
    MISC.PrivacyPolicyPageComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true, anchorScrolling: 'enabled'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
