import { Component, OnInit, Input }        from '@angular/core';
import { Test } from '../shared/test.model'

@Component({
    moduleId: module.id,
    selector: 'test-question-switcher',
    templateUrl: './test-question-switcher.component.html',
    styleUrls: [ './test-question-switcher.component.css' ]
})
export class TestQuestionSwitcherComponent implements OnInit {
    @Input()
    test: Test

    ngOnInit() {

    }

}