/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/greensock/greensock.d.ts" />
import {bootstrap}    from 'angular2/platform/browser'
import {Component, Input, Output, Inject, ElementRef, EventEmitter} from 'angular2/core'
import {ProductSlide} from './product.selector.slide'
import {ProductModel} from './models/products.model'
//import {SelectorModel} from './models/selector.model'
import {TimelineController} from './landing.timeline-controller'

declare var $: JQueryStatic;

@Component({
    selector: 'product-slides',
    templateUrl: 'app/views/product.selector.slides.view.html',
    directives: [ProductSlide]
    
})
export class ProductSlides extends TimelineController {
    @Input() products;
    @Input() selectedProduct;
    @Output() isAnimating = new EventEmitter();
    
    private rootElement;
    private elementRef: ElementRef;
    private _animating: boolean;

    set animating(a:boolean) {
        if (this._animating != a) {
            this._animating = a
            this.isAnimating.emit(a)
        }
    }

    public constructor(@Inject(ElementRef) elementRef: ElementRef) {
        super()
        this.elementRef = elementRef
        this.animating = false
    }

     private ngAfterViewInit() {
            this.rootElement = $(this.elementRef.nativeElement)
            // var target = $(this.rootElement).find('#five-door');
            var target = this.selectedProduct.prodId

            this.playIn(this,true,target)
        }

      private ngOnChanges(changes) {
          var self = this
          if ("selectedProduct" in changes && !this.animating) {
              console.log('product.selector.slides current:',changes.selectedProduct.currentValue)
              console.log('product.selector.slides previous:',changes.selectedProduct.previousValue)
              this.playOut(changes.selectedProduct.previousValue.prodId, function() {
                  self.playIn(self, false, changes.selectedProduct.currentValue.prodId)
              })
          }
      }

      public playOut(target, cb) {
          console.log('playOut')
          var self = this
          console.log('#' + target)
          target = $(this.rootElement).find('#'+target)
          
          var image = ($(target).find('.rl-ka-lndng-fridge'))
          var title = ($(target).find('.rl-ka-lndng-fridge-title'))
          var desc = ($(target).find('.rl-ka-lndng-fridge-desc'))
          var learn = ($(target).find('learn-more-button'))

          this.animating = true;

          TweenMax.to(image, .3, { delay: 0, opacity: 0, ease: Power3.easeOut });
          TweenMax.to(title, .3, { delay: 0.1, opacity: 0, ease: Power3.easeOut });
          TweenMax.to(desc, .3, { delay: 0.2, opacity: 0, ease: Power3.easeOut });
          TweenMax.to(learn, .3, { delay: 0.3, opacity: 0, ease: Power3.easeOut, onComplete: function() {
              TweenMax.to(target, 0, { delay: 0, opacity: 0 });
              console.log('playOut done')
              cb()
          }});
      }

      public playIn(self, delay=true, target) {
          console.log('playIn')
          if (!self) self = this
          console.log('#' + target)
          target = $(self.rootElement).find('#'+target)
      
          var image = ($(target).find('.rl-ka-lndng-fridge'))
          var title = ($(target).find('.rl-ka-lndng-fridge-title'))
          var desc = ($(target).find('.rl-ka-lndng-fridge-desc'))
          var learn = ($(target).find('learn-more-button'))

          TweenMax.to(image, 0, { delay: 0, top: 130 });
          TweenMax.to(title, 0, { delay: 0, top: 130 });
          TweenMax.to(desc, 0, { delay: 0, top: 165 });
          
          if($(window).innerWidth() < 686){
                TweenMax.to(learn, 0, { delay: 0, top: 450 });
              } else {
                  TweenMax.to(learn, 0, { delay: 0, top: 410 }); 
              }
          TweenMax.to(target, 0, { delay: 0.1, opacity: 1 });
          //
          if (delay) {
              TweenMax.to(image, 1.5, { delay: 2.5, top: 155, opacity: 1, ease: Power1.easeOut });
              TweenMax.to(title, 1.5, { delay: 2.7, top: 170, opacity: 1, ease: Power1.easeOut });
              TweenMax.to(desc, 1.5, { delay: 2.9, top: 215, opacity: 1, ease: Power1.easeOut });
              if($(window).innerWidth() < 686){
                TweenMax.to(learn, 1.5, { delay: 2.9, top: 500, opacity: 1, ease: Power1.easeOut, onComplete: function() {
                    console.log('playIn done')
                    self.animating = false;
                } }); 
              } else {
                  TweenMax.to(learn, 1.5, { delay: 2.9, top: 445, opacity: 1, ease: Power1.easeOut, onComplete: function() {
                    console.log('playIn done')
                    self.animating = false;
                } }); 
              }
              
          } else {
              TweenMax.to(image, 1.5, { delay: .5, top: 155, opacity: 1, ease: Power1.easeOut });
              TweenMax.to(title, 1.5, { delay: 0.7, top: 170, opacity: 1, ease: Power1.easeOut });
              TweenMax.to(desc, 1.5, { delay: 0.9, top: 215, opacity: 1, ease: Power1.easeOut });
              if($(window).innerWidth() < 686){
                TweenMax.to(learn, 1.5, { delay: 0.9, top: 500, opacity: 1, ease: Power1.easeOut, onComplete: function() {
                    console.log('playIn done')
                    self.animating = false;
                } }); 
              } else {
                  TweenMax.to(learn, 1.5, { delay: 0.9, top: 445, opacity: 1, ease: Power1.easeOut, onComplete: function() {
                    console.log('playIn done')
                    self.animating = false;
                } }); 
              }
          }
      }
}