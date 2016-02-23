import {Component, Input, Inject, ElementRef} from 'angular2/core';
import {DomRenderer, DomRootRenderer} from 'angular2/src/platform/dom/dom_renderer';
import {ChangeDetectorGenConfig} from 'angular2/src/core/change_detection/interfaces';

@Component({
    selector: 'feature-button',
    templateUrl:'app/views/landing.feature.button.view.html',
})
export class FeatureButton { 
    @Input() btnIcon;
    @Input() btnTitle;
    @Input() btnRollOverCopy;
    
    public rootElement;
    elementRef: ElementRef;

    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        this.rootElement = elementRef.nativeElement;
        console.log(elementRef.nativeElement.children);
    }
    
    
}