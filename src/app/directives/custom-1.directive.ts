import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[CDir1]"
})
export class Custom1Directive implements AfterViewInit {
  @Input("FontSize") fontSize: string;
  @Input("FontWeight") fontWeight: string;
  @Input("Color") color: string;

  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {
    this.fontSize = this.fontSize || "16pt";
    this.fontWeight = this.fontWeight || "normal";
    this.color = this.color || "000000";

    this.element.nativeElement.style.fontSize = this.fontSize;
    this.element.nativeElement.style.fontWeight = this.fontWeight;
    this.element.nativeElement.style.color = `#${this.color}`;
  }
}
