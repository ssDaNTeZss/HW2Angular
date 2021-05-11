import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AddAndEditComponent } from "./add-and-edit/add-and-edit.component";
import { AppComponent } from "./app.component";
import { routes } from "./app.routing";
import { AsideLeftComponent } from "./aside-left/aside-left.component";
import { BannerComponent } from "./banner/banner.component";
import { Custom1Directive } from "./directives/custom-1.directive";
import { Custom2Directive } from "./directives/custom-2.directive";
import { EditGuard } from "./edit.guard";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MainContainerComponent } from "./main-container/main-container.component";
import { MainComponent } from "./main/main.component";
import { AddAndEditStudentsModule } from "./modules/add-and-edit-students/add-and-edit-students.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LengthConverterPipe } from "./pipes/length-converter.pipe";
import { TempConverterPipe } from "./pipes/temp-converter.pipe";
import { PopupComponent } from "./popup/popup.component";
import { TableComponent } from "./table/table.component";
import { TestComponent } from "./test/test.component";

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
    TestComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AddAndEditStudentsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [
    EditGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
