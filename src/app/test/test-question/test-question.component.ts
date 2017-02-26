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
    @Output() onRead = new EventEmitter<boolean>()
    @Output() onAnswer = new EventEmitter<string>()

    isRead: boolean = false
    answered: string

    ngOnInit() {}

    read(agreed: boolean) {
        this.onRead.emit(agreed)
        this.isRead = agreed
    }

    answer(agreed: string) {
        this.onAnswer.emit(agreed)
        this.answered = agreed
    }

}