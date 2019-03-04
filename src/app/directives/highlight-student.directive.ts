/**
 * Created By : Laxman Kanhere (http://laxmank.in)
 */

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightStudent]'
})
export class HighlightStudentDirective {

	constructor(private el: ElementRef) {
	}

	@HostListener('mouseenter') onMouseEnter() {
		this.highlight('gray');
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.highlight(null);
	}

	private highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color;
	}
}

/**
 * Created By : Laxman Kanhere (http://laxmank.in)
 */
