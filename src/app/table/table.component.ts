import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { SimpleService } from "../simple.service";
import { Student, StudentList } from "../student-list";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit, OnDestroy, DoCheck {
  private subs: Subscription;

  @Input() needRed?: boolean;
  @Input() students?: Student[];
  @Input() filtrationAZ?: boolean;

  SL = new StudentList();
  activePopup = false;
  activateEditing = false;
  deletionStudent;
  search = [];
  dateType: "dateFrom" | "dateTo" | "dateDouble";
  GPAType: "GPAFrom" | "GPATo" | "GPADouble";
  dateArr: string[];
  warningLog = false;
  lengthYd = 20;
  DegreeCelsius = 25;

  constructor(
    private readonly simpleService: SimpleService,
    private cd: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    this.subs = this.simpleService.resetTable$.subscribe(() => {
        this.warningLog = false;
        this.students = this.SL.returnNormalSL();
        this.cd.detectChanges();
    });

    this.subs = this.simpleService.activePopup$.subscribe((activePopup) => this.activePopup = activePopup);
    this.subs = this.simpleService.search$.subscribe((search) => {
        this.search = search;
    });

    this.subs = this.simpleService.dateType$.subscribe((dateType) => {
      this.dateType = dateType;
    });
    this.subs = this.simpleService.GPAType$.subscribe((GPAType) => {
      this.GPAType = GPAType;
    });

    this.subs = this.simpleService.dateArr$.subscribe((dateArr) => {
      this.dateArr = dateArr;
      this.students = this.SL.filterByDate(this.dateType, dateArr);
      this.simpleService.transferStudents(this.students);
      this.showError();
    });
    this.subs = this.simpleService.GPAArr$.subscribe((GPAArr) => {
      if (this.dateType) {
        this.students = this.SL.filterByDateAndGPA(this.dateType, this.dateArr, this.GPAType, GPAArr);
        this.simpleService.transferStudents(this.students);
        this.showError();
      } else {
        this.students = this.SL.filterByGPA(this.GPAType, GPAArr);
        this.simpleService.transferStudents(this.students);
        this.showError();
      }
    });
  }

  ngDoCheck(): void {
    this.cd.detectChanges();
  }

  showError(): void {
    if (!this.students.length) {
      this.warningLog = true;
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onDeletion(entry: Student): void {
    this.deletionStudent = entry;
    this.activePopup = !this.activePopup;

    this.simpleService.changeActivePopup(this.activePopup);
    this.simpleService.changeStudent(entry);
    this.simpleService.changeStudentsList(this.students);
  }

  onEditing(student: Student): void {
    this.activateEditing = true;

    this.simpleService.changeActivateOfAdd(false);

    this.simpleService.changeActivateEditing(this.activateEditing);
    this.simpleService.changeStudent(student);
    this.simpleService.changeStudentsList(this.students);
  }
}
