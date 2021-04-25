import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BannerComponent } from './banner/banner.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { AsideLeftComponent } from './aside-left/aside-left.component';
import { TableComponent } from './table/table.component';
import { PopupComponent } from './popup/popup.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BannerComponent,
    MainContainerComponent,
    AsideLeftComponent,
    TableComponent,
    PopupComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
