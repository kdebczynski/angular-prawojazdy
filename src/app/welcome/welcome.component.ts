import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';

import { Test }                 from '../test/shared/test.model';
import { TestService }          from '../test/shared/test.service';

@Component({
    moduleId: module.id,
    selector: 'welcome',
    templateUrl: './welcome.component.html',
    styleUrls: [ './welcome.component.css' ],
    providers: [ TestService ]
})
export class WelcomeComponent implements OnInit {
    tests: Test[];

    constructor(
        private router: Router,
        private testService: TestService
    ) {}

    ngOnInit(): void {
        this.testService.getTests().then((tests) => {
            this.tests = tests
        })
    }
}