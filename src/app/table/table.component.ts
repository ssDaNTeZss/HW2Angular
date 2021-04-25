import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { SimpleService } from "../simple.service";
import { StudentList } from "../student-list";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit, OnDestroy {
  private subs: Subscription;

  @Input() needRed?: boolean;
  @Input() students?: any;
  @Input() filtrationAZ?: boolean;

  SL = new StudentList();
  activePopup = false;
  deletionStudent;
  search = [];
  dateType: any;
  GPAType: any;
  dateArr: [];

  constructor(
    private readonly simpleService: SimpleService,
  ) {
  }

  ngOnInit(): void {
    this.subs = this.simpleService.resetTable$.subscribe((resetTable) => this.students = this.SL.returnNormalSL());

    this.subs = this.simpleService.activePopup$.subscribe((activePopup) => this.activePopup = activePopup);
    this.subs = this.simpleService.search$.subscribe((search) => this.search = search);

    this.subs = this.simpleService.dateType$.subscribe((dateType) => this.dateType = dateType);
    this.subs = this.simpleService.GPAType$.subscribe((GPAType) => {
      this.GPAType = GPAType;
    });

    this.subs = this.simpleService.dateArr$.subscribe((dateArr) => {
        this.dateArr = dateArr;
        this.students = this.SL.filterByDate(this.dateType, dateArr);
        this.simpleService.transferStudents(this.students);
    });
    this.subs = this.simpleService.GPAArr$.subscribe((GPAArr) => {
      if (this.dateType) {
        this.students = this.SL.filterByDateAndGPA(this.dateType, this.dateArr, this.GPAType, GPAArr);
        this.simpleService.transferStudents(this.students);
      } else {
        this.students = this.SL.filterByGPA(this.GPAType, GPAArr);
        this.simpleService.transferStudents(this.students);
      }
    });
}

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onDeletion(entry: any) {
    this.deletionStudent = entry;
    this.activePopup = !this.activePopup;

    this.simpleService.changeActivePopup(this.activePopup);
    this.simpleService.changeStudent(entry);
    this.simpleService.changeStudentsList(this.students);
  }
}
