import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { SimpleService } from "../simple.service";

@Component({
  selector: "app-aside-left",
  templateUrl: "./aside-left.component.html",
  styleUrls: ["./aside-left.component.css"]
})

export class AsideLeftComponent implements OnInit, OnDestroy {
  private subs: Subscription;

  constructor(
    private readonly simpleService: SimpleService,
  ) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  addFilterOption(Form: NgForm): void {

    if (Form.value.search) {
      this.simpleService.changeSearch(Form.value.search.split(" "));
    }

    const dateArr: string[] = [];
    const GPAArr: number[] = [];

    if (Form.value.dateFrom && Form.value.dateTo) {
      dateArr.push(Form.value.dateFrom);
      dateArr.push(Form.value.dateTo);

      this.simpleService.changeDataType("dateDouble");
      this.simpleService.changeData(dateArr);
    } else {
      if (Form.value.dateFrom) {
        dateArr.push(Form.value.dateFrom);

        this.simpleService.changeDataType("dateFrom");
        this.simpleService.changeData(dateArr);
      } else {
        if (Form.value.dateTo) {
          dateArr.push(Form.value.dateTo);

          this.simpleService.changeDataType("dateTo");
          this.simpleService.changeData(dateArr);

        }
      }
    }

    if (Form.value.GPAFrom && Form.value.GPATo) {
      GPAArr.push(Form.value.GPAFrom);
      GPAArr.push(Form.value.GPATo);


      this.simpleService.changeGPAType("GPADouble");
      this.simpleService.changeGPA(GPAArr);
    } else {
      if (Form.value.GPAFrom) {
        GPAArr.push(Form.value.GPAFrom);

        this.simpleService.changeGPAType("GPAFrom");
        this.simpleService.changeGPA(GPAArr);
      } else {
        if (Form.value.GPATo) {
          GPAArr.push(Form.value.GPATo);

          this.simpleService.changeGPAType("GPATo");
          this.simpleService.changeGPA(GPAArr);
        }
      }
    }
  }

  resetTable(): void {
    this.simpleService.resetTable(true);
  }
}
