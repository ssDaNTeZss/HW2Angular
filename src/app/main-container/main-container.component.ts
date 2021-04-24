import { Component, OnInit } from "@angular/core";
import { StudentList } from "../student-list";

@Component({
  selector: "app-main-container",
  templateUrl: "./main-container.component.html",
  styleUrls: ["./main-container.component.css"]
})

export class MainContainerComponent implements OnInit {

  needRed = true;
  spanFilter: string = "filter_3";
  filtrationAZ = true;
  students = [];
  SL = new StudentList();
  filtrationByLastname = false;
  filtrationByLastnameAZ = true;
  filtrationByDOB = false;
  filtrationByDOBAZ = true;
  filtrationByGPA = false;
  filtrationByGPAAZ = true;

  constructor() {
  }

  ngOnInit() {
    const SL = new StudentList();
    this.students = SL.returnNormalSL();
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

  sortByLastname(): void {
    this.filtrationByLastname = true;

    this.filtrationByDOB = false;
    this.filtrationByGPA = false;

    if (this.filtrationByLastnameAZ) {
      this.students = this.SL.sorting("lastName", "AtoZ");
      this.filtrationByLastnameAZ = !this.filtrationByLastnameAZ;
    } else {
      this.students = this.SL.sorting("lastName", "ZtoA");
      this.filtrationByLastnameAZ = !this.filtrationByLastnameAZ;
    }
  }

  sortByDOB(): void {
    this.filtrationByDOB = true;

    this.filtrationByLastname = false;
    this.filtrationByGPA = false;

    if (this.filtrationByDOBAZ) {
      this.students = this.SL.sorting("DOB", "AtoZ");
      this.filtrationByDOBAZ = !this.filtrationByDOBAZ;
    } else {
      this.students = this.SL.sorting("DOB", "ZtoA");
      this.filtrationByDOBAZ = !this.filtrationByDOBAZ;
    }
  }

  sortByGPA(): void {
    this.filtrationByGPA = true;

    this.filtrationByLastname = false;
    this.filtrationByDOB = false;

    if (this.filtrationByGPAAZ) {
      this.students = this.SL.sorting("GPA", "AtoZ");
      this.filtrationByGPAAZ = !this.filtrationByGPAAZ;
    } else {
      this.students = this.SL.sorting("GPA", "ZtoA");
      this.filtrationByGPAAZ = !this.filtrationByGPAAZ;
    }
  }

  fullList(): void {
    const SL = new StudentList();
    this.students = SL.returnNormalSL();

    this.filtrationByLastname = false;
    this.filtrationByLastnameAZ = true;
    this.filtrationByDOB = false;
    this.filtrationByDOBAZ = true;
    this.filtrationByGPA = false;
    this.filtrationByGPAAZ = true;
  }
}
