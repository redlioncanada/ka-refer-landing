import {Component} from 'angular2/core'
import {ProductSlides} from './product.selector.slides'
import {ProductSelectorNav} from './product.selector.nav'
import {ProductModel} from './models/products.model'

@Component({
    selector: 'product-selector',
    templateUrl: 'app/views/product.selector.view.html',
    directives: [ProductSlides, ProductSelectorNav],
})
export class ProductSelector {
    public products: [ProductModel];
    public selectedProduct: ProductModel;
    public animating: Boolean;

    constructor() {
		this.products = [
			new ProductModel("./public/images/products/5-door.png", "5-door", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "five-door"),
			new ProductModel("./public/images/products/built-in.png", "Built-in", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "built-in"),
			new ProductModel("./public/images/products/french-door.png", "French Door", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "french-door"),
			new ProductModel("./public/images/products/side-by-side.png", "Side-By-Side", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "side-by-side"),
			new ProductModel("./public/images/products/bottom-freezer.png", "Bottom Freezer", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "bottom-freezer"),
			new ProductModel("./public/images/products/under-counter.png", "Under Counter", "A design so uniquely versatile, this 5-door style delivers optimal organization.", "http://kitchenAid.ca", "under-counter")
		];
		this.selectedProduct = this.products[0];
		this.animating = false;
    }

    ngOnChanges(changes) {
    	if ("selectedProduct" in changes) {
    		console.log('product selector changed product: ',changes.selectedProduct.currentValue)
    	}
    }

    //@Output on product.selector.nav
    productSelected(product) {
		if (!this.animating) {
			this.selectedProduct = product;
			console.log('product.selector got new product: ' + product.prodId)
		}
    }

    //@Output on product.selector.slides
    isAnimating(animating) {
		this.animating = animating;
    }
}