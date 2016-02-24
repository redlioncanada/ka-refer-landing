import {Component} from 'angular2/core'
import {ProductSlide} from './product.selector.slide'
import {ProductModel} from './models/products.model'

@Component({
    selector: 'product-slides',
    templateUrl: 'app/views/product.selector.slides.view.html',
    directives: [ProductSlide] 
    
})
export class ProductSlides {
    
    public products:[ProductModel] = [
        new ProductModel("./public/images/products/5-door.png", "5 door", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca"),
        new ProductModel("./public/images/products/built-in.png", "Built-in", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca"),
        new ProductModel("./public/images/products/french-door.png", "French Door", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca"),
        new ProductModel("./public/images/products/side-by-side.png", "Side-By-Side", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca"),
        new ProductModel("./public/images/products/bottom-freezer.png", "Bottom Freezer", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca"),
        new ProductModel("./public/images/products/under-counter.png", "Under Counter", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca"),
    ];
}