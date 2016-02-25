import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'product-selector-nav',
    templateUrl: 'app/views/product.selector.nav.view.html'
})

export class ProductSelectorNav {
	@Input() products
	@Input() selectedProduct
	@Output() productSelected = new EventEmitter()
	private ctaText: string
	private ctaLink: string

	constructor() {
		this.ctaText = 'See All'
		this.ctaLink = 'http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048/'
	}

	select(product) {
		this.productSelected.emit(product)
	}
}