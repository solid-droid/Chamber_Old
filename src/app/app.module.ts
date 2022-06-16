import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//primeNg
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';

//components
import { AppComponent } from './app.component';
import { HeaderMenuLeftComponent } from './components/header-menu-left/header-menu-left.component';
import { HeaderMenuRightComponent } from './components/header-menu-right/header-menu-right.component';
import { MenuContentLeftComponent } from './components/menu-content-left/menu-content-left.component';
import { MenuContentRightComponent } from './components/menu-content-right/menu-content-right.component';
import { HomeComponent } from './screens/home/home.component';
import { HeaderMenuCenterComponent } from './components/header-menu-center/header-menu-center.component';
import { MenuWorkspaceComponent } from './screens/menu-workspace/menu-workspace.component';
import { MenuBuildComponent } from './screens/menu-build/menu-build.component';
import { MenuGraphComponent } from './screens/menu-graph/menu-graph.component';
import { MenuConnectComponent } from './screens/menu-connect/menu-connect.component';
import { MenuExtensionsComponent } from './screens/menu-extensions/menu-extensions.component';
import { MenuStatsComponent } from './screens/menu-stats/menu-stats.component';
import { ViewDashboardComponent } from './screens/view-dashboard/view-dashboard.component';


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
    HeaderMenuCenterComponent,
    MenuWorkspaceComponent,
    MenuBuildComponent,
    MenuGraphComponent,
    MenuConnectComponent,
    MenuExtensionsComponent,
    MenuStatsComponent,
    ViewDashboardComponent
  ],
  imports: [
    //primeNg
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    //Angular
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
