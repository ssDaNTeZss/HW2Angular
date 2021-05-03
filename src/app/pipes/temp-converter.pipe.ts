import { visitValue } from "@angular/compiler/src/util";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "tempConverter"
})
export class TempConverterPipe implements PipeTransform {

  transform(value: number, to: "C" | "F" = "C",
            decimalPlaces?: number): string {

    if (!value) {
      return;
    }

    let temp: number;

    switch (to) {
      case "C":
        temp = (value - 32) / 1.8;
        break;
      case "F":
        temp = (value * 1.8) + 32;
        break;
    }

    if (decimalPlaces) {
      return `${temp.toFixed(decimalPlaces)} °${to}`;
    }
    return `${temp} °${to}`;
  }
}
