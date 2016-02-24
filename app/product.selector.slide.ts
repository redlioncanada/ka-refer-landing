/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/greensock/greensock.d.ts" />
import {bootstrap}    from 'angular2/platform/browser'
import {Component, Input, Inject, ElementRef} from 'angular2/core'

declare var $: JQueryStatic;

@Component({
    selector: 'product-slide',
    templateUrl: 'app/views/product.selector.singleSlide.view.html',
    
})
export class ProductSlide {
    // This is where the animation code goes for each slide
    @Input() fridge
    @Input() fridgeTitle
    @Input() fridgeDescription
    @Input() fridgeUrl
    
    private rootElement;
    private elementRef: ElementRef;
    private target;
    private targetWidth;
    private targetHeight;

    public constructor(@Inject(ElementRef) elementRef: ElementRef) {
        this.elementRef = elementRef
        this.rootElement = $(this.elementRef.nativeElement)

    }
    
}