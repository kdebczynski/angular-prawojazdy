import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Test }                     from './shared/test.model';
import { TestQuestion }             from './test-question/shared/test-question.model';
import { TestService }              from './shared/test.service';
import { TestDataService }          from './shared/test-data.service';
import { TestQuestionType }         from '../app-config';

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
    simpleQuestionsRand: TestQuestion[];
    advancedQuestonsRand: TestQuestion[];

    constructor(
        private route: ActivatedRoute,
        private testService: TestService,
        private testDataService: TestDataService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((value) => {
            this.param = value
            this.getTest(+this.param['id'])
        })
    }

    getTest(id: number): void {
        this.testService.getTestById(id).then((test) => {
            this.testItem = test

            this.simpleQuestionsRand = this.testDataService.getRandomizedQuestions(
                this.testDataService.getQuestionsByType(test, TestQuestionType.Simple)
            )

            this.advancedQuestonsRand = this.testDataService.getRandomizedQuestions(
                this.testDataService.getQuestionsByType(test, TestQuestionType.Advanced)
            )
        })
    }
}