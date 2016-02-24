/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/greensock/greensock.d.ts" />
import {bootstrap}    from 'angular2/platform/browser'
import {Component, Input, Inject, ElementRef} from 'angular2/core'
import {ProductSlide} from './product.selector.slide'
import {ProductModel} from './models/products.model'
import {SelectorModel} from './models/selector.model'
import {TimelineController} from './landing.timeline-controller'

declare var $: JQueryStatic;

@Component({
    selector: 'product-slides',
    templateUrl: 'app/views/product.selector.slides.view.html',
    directives: [ProductSlide] 
    
})
export class ProductSlides  extends TimelineController {
    
    public products:[ProductModel] = [
        new ProductModel("./public/images/products/5-door.png", "5 door", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "five-door"),
        new ProductModel("./public/images/products/built-in.png", "Built-in", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "built-in"),
        new ProductModel("./public/images/products/french-door.png", "French Door", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "french-door"),
        new ProductModel("./public/images/products/side-by-side.png", "Side-By-Side", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "side-by-side"),
        new ProductModel("./public/images/products/bottom-freezer.png", "Bottom Freezer", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "bottom-freezer"),
        new ProductModel("./public/images/products/under-counter.png", "Under Counter", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "under-counter"),
    ];
    
    public slides:[SelectorModel];
    
    private rootElement;
    private elementRef: ElementRef;
    //
    private fiveDoor;
    private fiveDoorTitle;
    private fiveDoorDesc;
    private fiveDoorImg;
    private fiveDoorLearn;
    //
    private builtIn;
    private builtInTitle;
    private builtInDesc;
    private builtInImg;
    private fbuiltInLearn;
    //
    private frenchDoor;
    private frenchDoorTitle;
    private frenchDoorDesc;
    private frenchDoorImg;
    private frenchDoorLearn;
    //
    private sideBy;
    private sideByTitle;
    private sideByDesc;
    private sideByImg;
    private sideByLearn;
    //
    private bottomFreezer;
    private bottomFreezerTitle;
    private bottomFreezerDesc;
    private bottomFreezerImg;
    private bottomFreezerLearn;
    //
    private underCounterDoor;
    private underCounterTitle;
    private underCounterDesc;
    private underCounterImg;
    private underCounterLearn;
    //
    
    public constructor(@Inject(ElementRef) elementRef: ElementRef) {
        super()
        this.elementRef = elementRef
       
    }
    public playIn(){
        TweenMax.to(this.fiveDoorImg, 0, {delay:0, opacity:0, top:130, ease:Power3.easeOut});
            TweenMax.to(this.fiveDoorTitle, 0, {delay:0, opacity:0, top:130, ease:Power3.easeOut});
            TweenMax.to(this.fiveDoorDesc, 0, {delay:0, opacity:0, top:165, ease:Power3.easeOut});
            //
            TweenMax.to(this.fiveDoorImg, 2, {delay:2.5, opacity:1, top:155, ease:Power3.easeOut});
            TweenMax.to(this.fiveDoorTitle, 2, {delay:3, opacity:1, top:170, ease:Power3.easeOut});
            TweenMax.to(this.fiveDoorDesc, 2, {delay:3.5, opacity:1, top:215, ease:Power3.easeOut});
    }
    
     private ngAfterViewInit() {
            
            this.rootElement = $(this.elementRef.nativeElement)
            
            this.fiveDoor = ($(this.rootElement).find('#five-door'));
            this.fiveDoorImg = ($(this.fiveDoor).find('.rl-ka-lndng-fridge'));
            this.fiveDoorTitle = ($(this.fiveDoor).find('.rl-ka-lndng-fridge-title'));
            this.fiveDoorDesc = ($(this.fiveDoor).find('.rl-ka-lndng-fridge-desc'));
            this.fiveDoorLearn = ($(this.fiveDoor).find('learn-more-button'));
            //this.fiveDoor = ($(this.rootElement).find('#five-door').children('.rl-ka-lndng-fridge'));
            //this.fiveDoorTitle = ($(this.rootElement).find('#five-door').children('.rl-ka-lndng-fridge-title'));
            //this.fiveDoorDesc = ($(this.rootElement).find('#five-door').children('rl-ka-lndng-fridge-desc'));
            
            
        }
}