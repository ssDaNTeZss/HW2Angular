import { Component, Input, OnInit } from "@angular/core";
import { STUDENTS } from "../random-students";
import { Student } from "../student";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {

  @Input() needRed?: boolean;
  @Input() students?: any;
  @Input() filtrationAZ?: boolean;

  // students = STUDENTS;

  constructor() {
  }

  ngOnInit(): void {
  }
}
