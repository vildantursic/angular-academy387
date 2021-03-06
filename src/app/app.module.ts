import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// views
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { AboutModule } from './components/about/about.module';

// shared
import { HeaderComponent } from './shared/header/header.component';
import { SearchPipe } from './filters/search.pipe';
import { ItemDetailsComponent } from './shared/item-details/item-details.component';
import { EntityComponent } from './components/entity/entity.component';

// services
import { MainService } from './services/main.service';
import { AboutService } from './services/about/about.service';
import { HomeService } from './services/home/home.service';

import { DataShareService } from './services/data-share/data-share.service';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'entity', component: EntityComponent },
  { path: 'about', component: AboutComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    // shared
    HeaderComponent,
    SearchPipe,
    ItemDetailsComponent,
    EntityComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AboutModule,
  ],
  providers: [
    // services
    MainService,
    AboutService,
    HomeService,
    // shared
    DataShareService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
