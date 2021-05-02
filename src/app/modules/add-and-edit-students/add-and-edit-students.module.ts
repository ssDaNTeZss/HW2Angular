import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddAndEditFormComponent } from "./add-and-edit-form/add-and-edit-form.component";


@NgModule({
  declarations: [
    AddAndEditFormComponent,
  ],
  exports: [
    AddAndEditFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AddAndEditStudentsModule {
}
