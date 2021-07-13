import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
	selector: '[numbersOnly]'
})
export class NumberDirective {
	@Input() numbersOnly: any;

	constructor(private _el: ElementRef) { }

	@HostListener('input', ['$event']) onInputChange(event:any) {
		if(this.numbersOnly) {
			const initalValue = this._el.nativeElement.value;
			this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
			if (initalValue !== this._el.nativeElement.value) {
				event.stopPropagation();
			}
		}
		else {
			//DO NOTHING
		}
	}

}