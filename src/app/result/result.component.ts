import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import {  } from 'underscore';

import { TestService }              from '../test/shared/test.service';
import { Test }                     from '../test/shared/test.model';
import { TestAnswerStoreService }   from '../test/shared/test-answer-store.service'
import { Result }                   from './shared/result.model';
import { ResultDataService }        from './shared/result-data-service'

@Component({
    moduleId: module.id,
    selector: 'result',
    templateUrl: './result.component.html',
    styleUrls: [ './result.component.css' ],
    providers: [ TestService, ResultDataService ]
})
export class ResultComponent implements OnInit {
    param: Params
    test: Test
    results: Array<Result>
    points: Number
    isPassed: Boolean

    constructor(
        private route: ActivatedRoute,
        private testService: TestService,
        private testAnswerStoreService: TestAnswerStoreService,
        private resultDataService: ResultDataService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((value) => {
            this.param = value
            this.getResults(+this.param['id'])
        })
    }

    private getResults(id: number): void {
        this.testService.getTestById(id).then((test) => {
            this.test = test
            this.results = this.resultDataService.getResults(this.testAnswerStoreService.answers, this.test)
            this.points = this.getPointsForResults(this.results)
            this.isPassed = this.checkIfPassed(this.points)
        });
    }

    private getPointsForResults(results: Array<Result>): Number {
        return this.resultDataService.countPoints(results)
    }

    private checkIfPassed(points): Boolean {
        return this.resultDataService.isPassed(points)
    }
}