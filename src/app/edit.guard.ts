import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { SimpleService } from "./simple.service";
import { Student, StudentList } from "./student-list";

@Injectable({
  providedIn: "root"
})
export class EditGuard implements CanActivate {
  SL = new StudentList();
  studentsList: Student[];
  id: number;

  constructor(
    private router: Router,
    private readonly simpleService: SimpleService,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    this.id = route.params["id"];
    this.studentsList = this.SL.returnNormalSL();

    for (const value of this.studentsList) {
      if (value.id == this.id && value.GPA < 5) {
        return true;
      }
    }
    this.simpleService.selectEditAccess(false);
    return false;
  }
}
