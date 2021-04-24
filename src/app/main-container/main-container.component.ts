import { Component, OnInit } from "@angular/core";
import { STUDENTS } from "../random-students";
// import { StudentList } from "../student-list";

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
  students2 = [];
  filtrationByLastname = false;
  filtrationByLastnameAZ = true;
  filtrationByDOB = false;
  filtrationByDOBAZ = true;
  filtrationByGPA = false;
  filtrationByGPAAZ = true;

  constructor() {
  }

  ngOnInit() {
    // const SL = new StudentList();
    //
    // for (let i = 0; i < this.students.length; i++) {
    //   this.students2.push(SL.insert(this.students[i].lastName, this.students[i].firstName, new Date(this.students[i].DOB), this.students[i].GPA, this.students[i].patronymic));
    //   // SL.insert(this.students[i].lastName, this.students[i].firstName, new Date(this.students[i].DOB), this.students[i].GPA, this.students[i].patronymic);
    // }
    //
    // console.log(this.students2);
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
    let studentsZtoA = [];
    for (let i: number = this.students.length - 1; i >= 0; i--) {
      studentsZtoA.push(this.students[i]);
    }
    this.students = studentsZtoA;
    this.filtrationAZ = !this.filtrationAZ;
  }

  sortByLastname(): void {
    this.filtrationByLastname = true;
    this.filtrationByDOB = false;
    if (this.filtrationByLastnameAZ) {
      this.students.sort(function(a, b) {
        if (a.lastName > b.lastName) {
          return 1;
        }
        if (a.lastName < b.lastName) {
          return -1;
        }
        return 0;
      });
      this.filtrationByLastnameAZ = !this.filtrationByLastnameAZ;
    } else {
      this.students.sort(function(a, b) {
        if (a.lastName < b.lastName) {
          return 1;
        }
        if (a.lastName > b.lastName) {
          return -1;
        }
        return 0;
      });
      this.filtrationByLastnameAZ = !this.filtrationByLastnameAZ;
    }
  }

  sortByDOB(): void {
    this.filtrationByDOB = true;

    this.filtrationByLastname = false;

    if (this.filtrationByDOBAZ) {
      this.students.sort(function(a, b) {
        if (a.DOB > b.DOB) {
          return 1;
        }
        if (a.DOB < b.DOB) {
          return -1;
        }
        return 0;
      });
      this.filtrationByDOBAZ = !this.filtrationByDOBAZ;
    } else {
      this.students.sort(function(a, b) {
        if (a.DOB < b.DOB) {
          return 1;
        }
        if (a.DOB > b.DOB) {
          return -1;
        }
        return 0;
      });
      this.filtrationByDOBAZ = !this.filtrationByDOBAZ;
    }
  }

  sortByGPA(): void {
    this.filtrationByGPA = true;

    this.filtrationByLastname = false;
    this.filtrationByDOB = false;

    if (this.filtrationByGPAAZ) {
      this.students.sort(function(a, b) {
        if (a.GPA > b.GPA) {
          return 1;
        }
        if (a.GPA < b.GPA) {
          return -1;
        }
        return 0;
      });
      this.filtrationByGPAAZ = !this.filtrationByGPAAZ;
    } else {
      this.students.sort(function(a, b) {
        if (a.GPA < b.GPA) {
          return 1;
        }
        if (a.GPA > b.GPA) {
          return -1;
        }
        return 0;
      });
      this.filtrationByGPAAZ = !this.filtrationByGPAAZ;
    }

    console.log(this.students2);
  }

  fullList(): void {
    // console.log(this.students2);
    // this.students = this.students2;

    this.filtrationByLastname = false;
    this.filtrationByLastnameAZ = true;
    this.filtrationByDOB = false;
    this.filtrationByDOBAZ = true;
    this.filtrationByGPA = false;
    this.filtrationByGPAAZ = true;
  }
}
