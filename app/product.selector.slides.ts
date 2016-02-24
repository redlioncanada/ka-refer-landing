/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/greensock/greensock.d.ts" />
import {Component, Input, Inject, ElementRef} from 'angular2/core'
import {ProductSlide} from './product.selector.slide'
import {ProductModel} from './models/products.model'

declare var $: JQueryStatic;

@Component({
    selector: 'product-slides',
    templateUrl: 'app/views/product.selector.slides.view.html',
    directives: [ProductSlide] 
    
})
export class ProductSlides {
    
    public products:[ProductModel] = [
        new ProductModel("./public/images/products/5-door.png", "5 door", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "five-door"),
        new ProductModel("./public/images/products/built-in.png", "Built-in", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "built-in"),
        new ProductModel("./public/images/products/french-door.png", "French Door", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "french-door"),
        new ProductModel("./public/images/products/side-by-side.png", "Side-By-Side", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "side-by-side"),
        new ProductModel("./public/images/products/bottom-freezer.png", "Bottom Freezer", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "bottom-freezer"),
        new ProductModel("./public/images/products/under-counter.png", "Under Counter", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "under-counter"),
    ];
    
    private rootElement;
    private elementRef: ElementRef;
    //
    private fiveDoor;
    private fiveDoorTitle;
    private fiveDoorDesc;
    //
    private builtIn;
    private builtInTitle;
    private builtInDesc;
    //
    private frenchDoor;
    private frenchDoorTitle;
    private frenchDoorDesc;
    //
    private sideBy;
    private sideByTitle;
    private sideByDesc;
    //
    private bottomFreezer;
    private bottomFreezerTitle;
    private bottomFreezerDesc;
    //
    private underCounterDoor;
    private underCounterTitle;
    private underCounterDesc;
    //
    
    public constructor(@Inject(ElementRef) elementRef: ElementRef) {
        this.elementRef = elementRef
        this.rootElement = $(this.elementRef.nativeElement)
        this.fiveDoor = ($(this.rootElement).find('#five-door > .rl-ka-lndng-fridge'));
        this.fiveDoorTitle = ($(this.rootElement).find('#five-door > rl-ka-lndng-fridge-title'));
        this.fiveDoorDesc = ($(this.rootElement).find('#five-door > rl-ka-lndng-fridge-desc'));
    }
}