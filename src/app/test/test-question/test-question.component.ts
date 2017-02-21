import { Component, OnInit, EventEmitter, Input, Output }   from '@angular/core';
import { TestQuestion }                                     from './shared/test-question.model'

@Component({
    moduleId: module.id,
    selector: 'test-question',
    templateUrl: './test-question.component.html',
    styleUrls: [ './test-question.component.css' ]
})
export class TestQuestionComponent implements OnInit {
    @Input() testQuestion: TestQuestion
    @Output() onRead = new EventEmitter<Number>()
    @Output() onReadTimeout = new EventEmitter<Number>()
    @Output() onAnswer = new EventEmitter<Number>()
    @Output() onAnswerTimeout = new EventEmitter<Number>()

    ngOnInit() {
        this.start()
    }

    private start() {

    }

}