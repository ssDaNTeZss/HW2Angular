import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Student } from "./student-list";

@Injectable({
  providedIn: "root"
})
export class SimpleService {
  public activePopup$ = new Subject<boolean>();
  public activateEditing$ = new Subject<boolean>();
  public activateOfAdd$ = new Subject<boolean>();

  public student$ = new Subject<Student>();
  public studentsList$ = new Subject<Student[]>();

  public search$ = new Subject<string[]>();

  public dateArr$ = new Subject<string[]>();
  public dateType$ = new Subject<"dateFrom" | "dateTo" | "dateDouble">();
  public GPAArr$ = new Subject<number[]>();
  public GPAType$ = new Subject<"GPAFrom" | "GPATo" | "GPADouble">();

  public resetTable$ = new Subject<boolean>();

  public STUDENTS$ = new Subject<Student[]>();


  public changeActivePopup(activePopup: boolean) {
    this.activePopup$.next(activePopup);
  }

  public changeActivateEditing(activateEditing: boolean) {
    this.activateEditing$.next(activateEditing);
  }

  public changeActivateOfAdd(activateOfAdd: boolean) {
    this.activateOfAdd$.next(activateOfAdd);
  }

  public changeStudent(student: Student) {
    this.student$.next(student);
  }

  public changeStudentsList(studentsList: Student[]) {
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

  public transferStudents(students: Student[]) {
    this.STUDENTS$.next(students);
  }
}


