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
            new ProductModel("./public/images/products/5-door.png", 
                            "5-door", 
                            "The revolutionary, first-ever 5-Door freestanding refrigerator is designed for optimal organization and food freshness. Learn more about our versatile soft-close drawers, designed to help keep your favourite foods visible and easy to reach.", 
                            "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048+105000817/", 
                            "five-door"),
            new ProductModel("./public/images/products/built-in.png", 
                            "Built-in", 
                            "When you picture your dream kitchen, you can bet our Built-in Refrigerator goes with it. Designed to fit your kitchen seamlessly, our panel ready options sold separately provide a sleek, premium look to complement your cabinets.", 
                            "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048+105000377/", 
                            "built-in"),
            new ProductModel("./public/images/products/french-door.png", 
                            "French Door", 
                            "Need to get organized? Our French Door Refrigerators provide excellent space and organizing options for your culinary needs. With features like the humidity-controlled crispers, pantry drawer, and tiered drawer freezers, French Door Refrigerators are a contemporary fit for any kitchen.", 
                            "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048+105000258/", 
                            "french-door"),
            new ProductModel("./public/images/products/side-by-side.png", 
                            "Side-By-Side", 
                            "The clean, timeless design of our Side-by-Side Refrigerators gives you eye-level access to both refrigerator and freezer, while keeping the ingredients you use most often fresh and at your fingertips.", 
                            "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048+105000379/", 
                            "side-by-side"),
            new ProductModel("./public/images/products/bottom-freezer.png", 
                            "Bottom Freezer", 
                            "Beautifully designed, inside and out. Our Bottom Freezer Refrigerators are made to give you easy access to your favourite foods. They also feature humidity-controlled crispers that create the perfect environment for keeping ingredients fresh.", 
                            "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048+105000376/", 
                            "bottom-freezer"),
            new ProductModel("./public/images/products/under-counter.png", 
                            "Under Counter", 
                            "Looking for a great addition to your kitchen? Our wide selection of Undercounter Refrigerators, Wine Cellars, and Ice Makers are a must have for entertaining, or providing another way to keep your beverages at the perfect temperature at all times.", 
                            "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-2/undercounter-refrigerators-3/102310356/", 
                            "under-counter")
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