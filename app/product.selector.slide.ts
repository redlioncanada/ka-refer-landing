import {bootstrap}    from 'angular2/platform/browser'
import {Component, Input, Inject, ElementRef} from 'angular2/core'


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
    @Input() fridgeId

    
}