import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "lengthConverter"
})
export class LengthConverterPipe implements PipeTransform {

  transform(value: number, from: "ft" | "m" | "in" | "cm" | "yd" | "km" | "mi" = "cm",
            to: "ft" | "m" | "in" | "cm" | "yd" | "km" | "mi" = "cm",
            decimalPlaces?: number): string {

    if (!value) {
      return;
    }

    let x: number;
    switch (from) {
      case "ft":
        switch (to) {
          case "ft":
            x = value;
            break;
          case "m":
            x = value / 3.2808;
            break;
          case "in":
            x = value * 12;
            break;
          case "cm":
            x = value / 0.032808;
            break;
          case "yd":
            x = value * 0.33333;
            break;
          case "km":
            x = value / 3280.8;
            break;
          case "mi":
            x = value * 0.00018939;
            break;
        }
        break;
      case "m":
        switch (to) {
          case "ft":
            x = value * 3.2808;
            break;
          case "m":
            x = value;
            break;
          case "in":
            x = value * 39.370;
            break;
          case "cm":
            x = value / 0.01;
            break;
          case "yd":
            x = value * 1.0936;
            break;
          case "km":
            x = value / 1000;
            break;
          case "mi":
            x = value * 0.00062137;
            break;
        }
        break;
      case "in":
        switch (to) {
          case "ft":
            x = value * 0.083333;
            break;
          case "m":
            x = value / 39.370;
            break;
          case "in":
            x = value;
            break;
          case "cm":
            x = value / 0.39370;
            break;
          case "yd":
            x = value * 0.027778;
            break;
          case "km":
            x = value / 39370;
            break;
          case "mi":
            x = value * 0.000015783;
            break;
        }
        break;
      case "cm":
        switch (to) {
          case "ft":
            x = value * 0.032808;
            break;
          case "m":
            x = value / 100;
            break;
          case "in":
            x = value * 0.39370;
            break;
          case "cm":
            x = value;
            break;
          case "yd":
            x = value * 0.010936;
            break;
          case "km":
            x = value / 100000;
            break;
          case "mi":
            x = value * 0.0000062137;
            break;
        }
        break;
      case "yd":
        switch (to) {
          case "ft":
            x = value * 3;
            break;
          case "m":
            x = value / 1.0936;
            break;
          case "in":
            x = value * 36;
            break;
          case "cm":
            x = value / 0.010936;
            break;
          case "yd":
            x = value;
            break;
          case "km":
            x = value / 1093.6;
            break;
          case "mi":
            x = value * 0.00056818;
            break;
        }
        break;
      case "km":
        switch (to) {
          case "ft":
            x = value * 3280.8;
            break;
          case "m":
            x = value * 1000;
            break;
          case "in":
            x = value * 39370;
            break;
          case "cm":
            x = value * 100000;
            break;
          case "yd":
            x = value * 1093.6;
            break;
          case "km":
            x = value;
            break;
          case "mi":
            x = value * 0.62137;
            break;
        }
        break;
      case "mi":
        switch (to) {
          case "ft":
            x = value * 5280;
            break;
          case "m":
            x = value / 0.00062137;
            break;
          case "in":
            x = value * 63360;
            break;
          case "cm":
            x = value / 0.0000062137;
            break;
          case "yd":
            x = value * 1760;
            break;
          case "km":
            x = value / 0.62137;
            break;
          case "mi":
            x = value;
            break;
        }
        break;
    }

    if (decimalPlaces) {
      return `${x.toFixed(decimalPlaces)} ${to}`;
    }
    return `${x} ${to}`;
  }

}
