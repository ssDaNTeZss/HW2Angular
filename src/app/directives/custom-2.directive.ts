import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[CDir2]"
})
export class Custom2Directive implements AfterViewInit  {
  @Input("GPA") GPA: number;

  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {
    if (this.GPA >= 4) {
      this.element.nativeElement.style.color = "#2c7f1e";
    }
    if (this.GPA >= 3 && this.GPA < 4) {
      this.element.nativeElement.style.color = "#FFA500";
    }
    if (this.GPA < 3) {
      this.element.nativeElement.style.color = "#ff5c1d";
    }
  }
}
