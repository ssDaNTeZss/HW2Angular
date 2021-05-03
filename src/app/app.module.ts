import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AddAndEditComponent } from "./add-and-edit/add-and-edit.component";
import { AppComponent } from "./app.component";
import { AsideLeftComponent } from "./aside-left/aside-left.component";
import { BannerComponent } from "./banner/banner.component";
import { Custom1Directive } from "./directives/custom-1.directive";
import { Custom2Directive } from "./directives/custom-2.directive";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MainContainerComponent } from "./main-container/main-container.component";
import { MainComponent } from "./main/main.component";
import { AddAndEditStudentsModule } from "./modules/add-and-edit-students/add-and-edit-students.module";
import { LengthConverterPipe } from "./pipes/length-converter.pipe";
import { PopupComponent } from "./popup/popup.component";
import { TableComponent } from "./table/table.component";
import { TempConverterPipe } from './pipes/temp-converter.pipe';

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
    FooterComponent,
    AddAndEditComponent,
    Custom1Directive,
    Custom2Directive,
    LengthConverterPipe,
    TempConverterPipe,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AddAndEditStudentsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
