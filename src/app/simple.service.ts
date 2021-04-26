import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SimpleService {
  public activePopup$ = new Subject<boolean>();

  public student$ = new Subject<[]>();
  public studentsList$ = new Subject<[]>();

  public search$ = new Subject<string[]>();

  public dateArr$ = new Subject<string[]>();
  public dateType$ = new Subject<"dateFrom" | "dateTo" | "dateDouble">();
  public GPAArr$ = new Subject<number[]>();
  public GPAType$ = new Subject<"GPAFrom" | "GPATo" | "GPADouble">();

  public resetTable$ = new Subject<boolean>();

  public STUDENTS$ = new Subject<[]>();


  public changeActivePopup(activePopup: boolean) {
    this.activePopup$.next(activePopup);
  }

  public changeStudent(student: []) {
    this.student$.next(student);
  }

  public changeStudentsList(studentsList: []) {
    this.studentsList$.next(studentsList);
  }

  public changeSearch(search: string[]) {
    this.search$.next(search);
  }

  public changeData(dateArr: string[]) {
    this.dateArr$.next(dateArr);
  }

  public changeDataType(dateType: "dateFrom" | "dateTo" | "dateDouble") {
    this.dateType$.next(dateType);
  }

  public changeGPA(GPAArr: number[]) {
    this.GPAArr$.next(GPAArr);
  }

  public changeGPAType(GPAType: "GPAFrom" | "GPATo" | "GPADouble") {
    this.GPAType$.next(GPAType);
  }

  public resetTable(resetTable: boolean) {
    this.resetTable$.next(resetTable);
  }

  public transferStudents(students: []) {
    this.STUDENTS$.next(students);
  }
}


