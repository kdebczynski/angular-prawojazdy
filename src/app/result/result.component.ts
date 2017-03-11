import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { TestService }              from '../test/shared/test.service';
import { Test }                     from '../test/shared/test.model';
import { TestAnswerStoreService }   from '../test/shared/test-answer-store.service'
import { Result }                   from './shared/result.model';

@Component({
    moduleId: module.id,
    selector: 'result',
    templateUrl: './result.component.html',
    styleUrls: [ './result.component.css' ],
    providers: [ TestService ]
})
export class ResultComponent implements OnInit {
    param: Params;
    test: Test;
    answers: Array<Result>;

    constructor(
        private route: ActivatedRoute,
        private testService: TestService,
        private testAnswerStoreService: TestAnswerStoreService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((value) => {
            this.param = value
            this.checkAnswers(+this.param['id'])
        })
    }

    checkAnswers(id: number) {
        this.testService.getTestById(id).then((test) => {
            this.test = test
            this.answers = this.testAnswerStoreService.getResults(this.test)
            console.log(this.answers, this.testAnswerStoreService.answers)
        });
    }
}