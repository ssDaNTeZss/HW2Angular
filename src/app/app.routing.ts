import { RouterModule, Routes } from "@angular/router";
import { EditGuard } from "./edit.guard";
import { AddAndEditFormComponent } from "./modules/add-and-edit-students/add-and-edit-form/add-and-edit-form.component";
import { AddAndEditStudentsModule } from "./modules/add-and-edit-students/add-and-edit-students.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

export const routes: Routes = [
  {path: "student/create", component: AddAndEditFormComponent},
  {path: "student/edit/:id", component: AddAndEditFormComponent, canActivate: [EditGuard]},
  {path: "", component: AddAndEditFormComponent},
  {path: "**", component: PageNotFoundComponent},
];
