import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Test }                     from './shared/test.model'
import { TestService }              from './shared/test.service'

@Component({
    moduleId: module.id,
    selector: 'test',
    templateUrl: './test.component.html',
    styleUrls: [ './test.component.css' ],
    providers: [ TestService ]
})
export class TestComponent implements OnInit {
    param: Params;
    testItem: Test;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private testService: TestService
    ) {}

    ngOnInit(): void {
        console.log('test init');

        this.route.params.subscribe((value) => {
            this.param = value
            this.getTest(+this.param['id'])
        })
    }

    getTest(id: number): void {
        this.testService.getTestById(id).then((test) => {
            this.testItem = test
        })
    }
}