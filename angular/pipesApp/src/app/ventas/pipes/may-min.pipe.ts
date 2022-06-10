import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'upperlower'
})
export class UpperLowerPipe implements PipeTransform {
    transform(value: string, isUpperCase: boolean = true) {
        return isUpperCase ? value.toUpperCase() : value.toLowerCase();
    }
}