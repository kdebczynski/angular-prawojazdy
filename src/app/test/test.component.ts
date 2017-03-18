import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Test }                     from './shared/test.model';
import { TestService }              from './shared/test.service';
import { TestDataService }          from './shared/test-data.service';
import { TestAnswerStoreService }   from './shared/test-answer-store.service';

@Component({
    moduleId: module.id,
    selector: 'test',
    templateUrl: './test.component.html',
    styleUrls: [ './test.component.css' ],
    providers: [ TestService, TestDataService ]
})
export class TestComponent implements OnInit {
    param: Params;
    testItem: Test;

    constructor(
        private route: ActivatedRoute,
        private testService: TestService,
        private testDataService: TestDataService,
        private testAnswerStoreService: TestAnswerStoreService
    ) {}

    ngOnInit(): void {
        this.testAnswerStoreService.clear()

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