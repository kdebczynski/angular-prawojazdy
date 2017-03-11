import { Component, OnInit, EventEmitter, Input, Output }   from '@angular/core';
import { TestQuestion }                                     from './shared/test-question.model'
import { TestDataService }                                  from '../shared/test-data.service';

@Component({
    moduleId: module.id,
    selector: 'test-question',
    templateUrl: './test-question.component.html',
    styleUrls: [ './test-question.component.css' ]
})
export class TestQuestionComponent implements OnInit {
    @Input() testQuestion: TestQuestion
    @Input() actualReadTime: number
    @Input() actualAnswerTime: number
    @Input() actualQuestionPhase: string
    @Output() onRead = new EventEmitter<boolean>()
    @Output() onAnswer = new EventEmitter<number>()

    constructor(
        private testDataService: TestDataService
    ) {}

    ngOnInit() {}

    read(agreed: boolean) {
        this.onRead.emit(agreed)
    }

    answer(agreed: string, index: number) {
        this.onAnswer.emit(index)
    }

    millisecondsToTime(time: number) {
        return this.testDataService.millisecondsToTime(time)
    }

}