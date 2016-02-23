
/// <reference path="../typings/jquery/jquery.d.ts" />
import {bootstrap}    from 'angular2/platform/browser';
import {Component, Input, Inject, ElementRef, AfterViewInit} from 'angular2/core';

declare var jQuery:JQueryStatic;

@Component({
    selector: 'feature-button',
    templateUrl:'app/views/landing.feature.button.view.html',
})
export class FeatureButton implements AfterViewInit  { 
    @Input() btnIcon;
    @Input() btnTitle;
    @Input() btnRollOverCopy;
    

    
    public rootElement;
    elementRef: ElementRef;

    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        this.elementRef = elementRef;
        this.rootElement = this.elementRef.nativeElement;
        
    }
    ngAfterViewInit() {
        console.log(jQuery(this.rootElement).find('rl-ka-lnding-feature-icon'));  
    }
    
    
}