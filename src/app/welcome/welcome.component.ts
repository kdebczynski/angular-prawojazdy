import { Component, OnInit }        from '@angular/core';

import { Test }                     from '../test/shared/test.model';
import { TestService }              from '../test/shared/test.service';
import { TestAnswerStoreService }   from '../test/shared/test-answer-store.service'

@Component({
    moduleId: module.id,
    selector: 'welcome',
    templateUrl: './welcome.component.html',
    styleUrls: [ './welcome.component.css' ],
    providers: [ TestService, TestAnswerStoreService ]
})
export class WelcomeComponent implements OnInit {
    tests: Test[];

    constructor(
        private testService: TestService,
        private testAnswerStoreService: TestAnswerStoreService
    ) {}

    ngOnInit(): void {
        this.testAnswerStoreService.clear()
        
        this.testService.getTests().then((tests) => {
            this.tests = tests
        })
    }
}