import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// views
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

import { AboutModule } from './components/about/about.module';

// shared
import { HeaderComponent } from './shared/header/header.component';
import { SearchPipe } from './filters/search.pipe';
import { ItemDetailsComponent } from './shared/item-details/item-details.component';
import { EntityComponent } from './components/entity/entity.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'entity', component: EntityComponent },
  { path: 'about', component: AboutComponent },
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
    EntityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
