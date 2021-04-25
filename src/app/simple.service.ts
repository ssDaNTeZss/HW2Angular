import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SimpleService {
  public activePopup$ = new Subject<boolean>();
  public student$ = new Subject<any>();
  public studentsList$ = new Subject<any>();
  public search$ = new Subject<any>();
  public dateArr$ = new Subject<any>();
  public dateType$ = new Subject<string>();
  public GPAArr$ = new Subject<any>();
  public GPAType$ = new Subject<string>();
  public resetTable$ = new Subject<boolean>();
  // public dateFrom$ = new Subject<string>();
  // public dateTo$ = new Subject<string>();

  public changeActivePopup(activePopup: boolean) {
    this.activePopup$.next(activePopup);
  }

  public changeStudent(student: any) {
    this.student$.next(student);
  }

  public changeStudentsList(studentsList: any) {
    this.studentsList$.next(studentsList);
  }

  public changeSearch(search: any) {
    this.search$.next(search);
  }

  public changeData(dateArr: any) {
    this.dateArr$.next(dateArr);
  }

  public changeDataType(dateType: string) {
    this.dateType$.next(dateType);
  }

  public changeGPA(GPAArr: any) {
    this.GPAArr$.next(GPAArr);
  }

  public changeGPAType(GPAType: string) {
    this.GPAType$.next(GPAType);
  }

  public resetTable(resetTable: boolean) {
    this.resetTable$.next(resetTable);
  }
}


