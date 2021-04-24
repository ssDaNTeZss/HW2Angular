import { Component, Input, OnInit } from "@angular/core";
import { StudentList } from "../student-list";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {

  @Input() needRed?: boolean;
  @Input() students?: any;
  @Input() filtrationAZ?: boolean;

  SL = new StudentList();
  activePopup = false;
  deletionStudent;

  constructor() {
  }

  ngOnInit(): void {
  }

  onDeletion(entry: any) {
    this.deletionStudent = entry;
    console.log(this.deletionStudent);
    // this.students = this.SL.removingStudent(entry, this.students);
    this.activePopup = !this.activePopup;
  }

  closePopup() {
    this.activePopup = !this.activePopup;
  }
}
