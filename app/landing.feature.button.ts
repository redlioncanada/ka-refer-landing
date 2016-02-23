/// <reference path="../typings/jquery/jquery.d.ts" />
import {bootstrap}    from 'angular2/platform/browser'
import {Component, Input, Inject, ElementRef} from 'angular2/core'
import {TimelineController} from './landing.timeline-controller'

declare var $: JQueryStatic;

@Component({
    selector: 'feature-button',
    templateUrl: 'app/views/landing.feature.button.view.html',
})

export class FeatureButton extends TimelineController {
    @Input() btnIcon
    @Input() btnTitle
    @Input() btnRollOverCopy
    @Input() btnRollOverCTA
    @Input() btnLink
    @Input() btnType

    private rootElement;
    private elementRef: ElementRef;

    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        this.elementRef = elementRef
        this.rootElement = $(this.elementRef.nativeElement)

        super()
    }

    ngAfterViewInit() {

        //this is ugly, but the syntax of gsap restricts me from decoupling animations from their target element
        //I could probably adjust timeline-controller to instantiate timelines without specifying a target element
        //but just want to get it working for now
        var target = $(this.rootElement).find('img')
        var width = $(this.rootElement).find('img').parent().width()
        var height = $(this.rootElement).find('img').parent().width()

        switch(this.btnType) {
            case "cart":
                this.timeline.to(target, 0, { x: "-="+width })
                    .to(target, 1, { ease: Power3.easeIn, x: "+="+width })
                    .to(target, 0.2, { ease: Power1.easeOut, css: {transform:"rotate(5deg)"} }).add('stop')
                    .to(target, 0.1, { x: "+=" + 1 }, 'stop').add('backDown')
                    .to(target, 0.1, { x: "-=" + 1 }, 'backDown')
                    .to(target, 0.1, { ease: Power1.easeOut, css: {transform:"rotate(0deg)"} })
                break;
            case "star":
                this.timeline.add('start').set({}, {}, 'start+=0.5')
                    .to(target, 0, { y: "-="+height })
                    .to(target, 1, { ease: Bounce.easeOut, y: "+="+height })
                break;
            case "magnifier":
                this.timeline.add('start').set({}, {}, 'start+=0.8')
                    .to(target, 0, { opacity: 0, css: { transform: "scale(0.2)" } })
                    .to(target, 0.15, { ease: Power1.easeIn, opacity: 1, css: {transform:"scale(1)"} })
                break;
        }

        setInterval(() => {
            this.restart()
        }, 2000)
    }
}