import { Component, OnInit } from "@angular/core";
import { STUDENTS } from "../random-students";


@Component({
  selector: "app-main-container",
  templateUrl: "./main-container.component.html",
  styleUrls: ["./main-container.component.css"]
})
export class MainContainerComponent implements OnInit {

  needRed = true;
  spanFilter: string = "filter_3";
  filtrationAZ = true;
  students = STUDENTS;

  constructor() {
  }

  ngOnInit(): void {
  }

  illuminationOfCgrade(): void {
    if (this.spanFilter === "filter_3") {
      this.spanFilter = "filter_none";
      this.needRed = false;
    } else {
      this.spanFilter = "filter_3";
      this.needRed = true;
    }
  }

  public filteringInOrder(): void {
    if (this.filtrationAZ) {
      let studentsZtoA = [];
      for (let i: number = this.students.length - 1; i >= 0; i--) {
        studentsZtoA.push(this.students[i]);
      }
      this.students = studentsZtoA;
      console.log(this.students);
      this.filtrationAZ = false;
    } else {
      this.filtrationAZ = true;
      console.log(this.students);
    }
  }
}
