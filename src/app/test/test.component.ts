import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'test',
    templateUrl: './test.component.html',
    styleUrls: [ './test.component.css' ]
})
export class TestComponent implements OnInit {
    param: Params;

    constructor(
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(
            value => this.param = value
        )

        console.log('test init');
    }

    goBack(): void {
        this.location.back();
    }
}