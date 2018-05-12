import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
    selector: 'dynamic-router-component',
    templateUrl: 'dynamic-router.component.html',
})

export class DynamicRouterComponent implements OnInit, OnChanges {

    @Input() public component: any;
    private componentData: any;

    constructor() { }

    ngOnInit() { }

    public ngOnChanges(changes: SimpleChanges) {
        this.setDynamicComponent();
    }

    private setDynamicComponent() {
        this.componentData = {
            component: this.component,
            inputs: {
                nothing: null
            }
        }
    }

}