import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HeaderMenuLeftComponent } from './components/header-menu-left/header-menu-left.component';
import { HeaderMenuRightComponent } from './components/header-menu-right/header-menu-right.component';
import { MenuContentLeftComponent } from './components/menu-content-left/menu-content-left.component';
import { MenuContentRightComponent } from './components/menu-content-right/menu-content-right.component';
import { HomeComponent } from './screens/home/home.component';
import { HeaderMenuCenterComponent } from './components/header-menu-center/header-menu-center.component';

//primeNg
import {InputTextModule} from 'primeng/inputtext';


// AoT requires an exported function for factories
const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader =>  new TranslateHttpLoader(http, './assets/i18n/', '.json');

@NgModule({
  declarations: [
    AppComponent,
    //menu
    HeaderMenuLeftComponent,
    HeaderMenuRightComponent,
    MenuContentLeftComponent,
    MenuContentRightComponent,
    //screens
    HomeComponent,
    HeaderMenuCenterComponent
  ],
  imports: [
    //primeNg
    InputTextModule,
    //Angular
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
