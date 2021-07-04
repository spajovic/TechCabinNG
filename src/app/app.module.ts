import { HttpClientModule } from '@angular/common/http';
import { TopComponent } from './header/top/top.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeadNavigationComponent } from './header/head-navigation/head-navigation.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { BestSellerComponent } from './home/best-seller/best-seller.component';
import { DealsComponent } from './deals/deals.component';
import { FirstUpperPipe } from './first-upper.pipe';
import { HelpComponent } from './help/help.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopComponent,
    HeadNavigationComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    BestSellerComponent,
    DealsComponent,
    FirstUpperPipe,
    HelpComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
