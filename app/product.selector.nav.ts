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

	constructor() {
		this.ctaText = 'See All'
	}

	select(product) {
		console.log('selected' +product.prodId)
		this.productSelected.emit(product)
	}
}