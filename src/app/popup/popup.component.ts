import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { SimpleService } from "../simple.service";
import { Student } from "../student";
import { StudentList } from "../student-list";

@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.css"]
})
export class PopupComponent implements OnInit, OnDestroy  {
  private subs: Subscription;

  SL = new StudentList();
  activePopup: boolean;
  student: Student;
  studentsList: Student[];
  activePopupDone: boolean;

  constructor(
    private readonly simpleService: SimpleService,
  ) {}

  ngOnInit(): void {
    this.subs = this.simpleService.activePopup$.subscribe((activePopup) => this.activePopup = activePopup);
    this.subs = this.simpleService.student$.subscribe((student) => this.student = student);
    this.subs = this.simpleService.studentsList$.subscribe((studentsList) => this.studentsList = studentsList);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  closePopup(): void {
    this.activePopup = !this.activePopup;
    this.simpleService.changeActivePopup(this.activePopup);
  }

  onDeletion(): void {
    this.SL.removingStudent(this.student, this.studentsList);
    this.closePopup();
    this.activePopupDone = true;
    setTimeout(() => this.activePopupDone = false, 1000);
  }
}
