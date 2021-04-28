import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { SimpleService } from "../simple.service";
import { Student, StudentList } from "../student-list";

@Component({
  selector: "app-main-container",
  templateUrl: "./main-container.component.html",
  styleUrls: ["./main-container.component.css"]
})

export class MainContainerComponent implements OnInit, OnDestroy {
  private subs: Subscription;

  needRed = true;
  spanFilter: string = "filter_3";
  filtrationAZ = true;
  students: any;
  SL = new StudentList();
  filtrationByLastname = false;
  filtrationByLastnameAZ = true;
  filtrationByDOB = false;
  filtrationByDOBAZ = true;
  filtrationByGPA = false;
  filtrationByGPAAZ = true;
  activateOfAdd = false;

  constructor(
    private readonly simpleService: SimpleService,
  ) {
  }

  ngOnInit(): void {
    this.students = this.SL.returnNormalSL();
    this.subs = this.simpleService.STUDENTS$.subscribe((student) => {
      this.students = student;
    });

    this.subs = this.simpleService.resetTable$.subscribe((resetTable) => this.fullList());
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
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
      this.students = this.SL.sorting("lastName", "AtoZ", this.students);
      this.filtrationByLastnameAZ = !this.filtrationByLastnameAZ;
    } else {
      this.students = this.SL.sorting("lastName", "ZtoA", this.students);
      this.filtrationByLastnameAZ = !this.filtrationByLastnameAZ;
    }
  }

  sortByDOB(): void {
    this.filtrationByDOB = true;

    this.filtrationByLastname = false;
    this.filtrationByGPA = false;

    if (this.filtrationByDOBAZ) {
      this.students = this.SL.sorting("DOB", "AtoZ", this.students);
      this.filtrationByDOBAZ = !this.filtrationByDOBAZ;
    } else {
      this.students = this.SL.sorting("DOB", "ZtoA", this.students);
      this.filtrationByDOBAZ = !this.filtrationByDOBAZ;
    }
  }

  sortByGPA(): void {
    this.filtrationByGPA = true;

    this.filtrationByLastname = false;
    this.filtrationByDOB = false;

    if (this.filtrationByGPAAZ) {
      this.students = this.SL.sorting("GPA", "AtoZ", this.students);
      this.filtrationByGPAAZ = !this.filtrationByGPAAZ;
    } else {
      this.students = this.SL.sorting("GPA", "ZtoA", this.students);
      this.filtrationByGPAAZ = !this.filtrationByGPAAZ;
    }
  }

  fullList(): void {
    const SL = new StudentList();
    this.students = SL.returnNormalSL();
    this.simpleService.changeActivateEditing(false);

    this.filtrationByLastname = false;
    this.filtrationByLastnameAZ = true;
    this.filtrationByDOB = false;
    this.filtrationByDOBAZ = true;
    this.filtrationByGPA = false;
    this.filtrationByGPAAZ = true;
  }

  addingStudent(): void {
    this.activateOfAdd = !this.activateOfAdd;
    this.simpleService.changeStudentsList(this.students);
    this.simpleService.changeActivateOfAdd(this.activateOfAdd);

  }
}
