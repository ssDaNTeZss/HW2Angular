import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  titleHeader = "Таблица студентов";

  ngOnInit(): void {
  }

}
