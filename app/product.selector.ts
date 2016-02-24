import {Component} from 'angular2/core'
import {ProductSlides} from './product.selector.slides'

@Component({
    selector: 'product-selector',
    templateUrl: 'app/views/product.selector.view.html',
    directives: [ProductSlides],
})
export class ProductSelector {
    
}