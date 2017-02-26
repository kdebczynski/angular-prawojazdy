import { Component, OnInit, Input }     from '@angular/core';

import { Test }                         from '../shared/test.model';
import { TestDataService }              from '../shared/test-data.service';
import { TestQuestion }                 from '../test-question/shared/test-question.model'

@Component({
    moduleId: module.id,
    selector: 'test-question-switcher',
    templateUrl: './test-question-switcher.component.html',
    styleUrls: [ './test-question-switcher.component.css' ],
    providers: [ TestDataService ]
})
export class TestQuestionSwitcherComponent implements OnInit  {
    @Input()
    test: Test

    actualQuestionIterator: number
    totalTimeMinutes: string

    private totalTime: number
    private actualQuestion: TestQuestion
    private actualQuestionTime: number
    private interval

    constructor(
        private testDataService: TestDataService
    ) {}

    ngOnInit() {
        this.actualQuestionIterator = 0
        this.start()
    }

    start() {
        this.totalTime = this.testDataService.getTotalTime(this.test.questions)

        this.totalTimeMinutes = this.testDataService.millisecondsToTime(this.totalTime)
        this.interval = setInterval(() => {
            this.totalTime -= 1000
            this.totalTimeMinutes = this.testDataService.millisecondsToTime(this.totalTime)
            this.checkQuestionTime(this.test.questions[this.actualQuestionIterator])

            if (this.totalTime <= 0) {
                clearInterval(this.interval)
            }
        }, 1000)
    }

    checkQuestionTime(question: TestQuestion) {
        //console.log(question)
    }

    onQuestionRead(agreed: boolean) {
        console.log('onQuestionRead', agreed, this.test.questions[this.actualQuestionIterator])
    }

    onQuestionAnsweared(agreed: string) {
        console.log('onQuestionAnsweared', agreed, this.test.questions[this.actualQuestionIterator])
    }

    nextQuestion() {
        if (this.actualQuestionIterator < this.test.questions.length -1) {
            this.actualQuestionIterator++
        }
    }

    prevQuestion() {
        if (this.actualQuestionIterator > 0) {
            this.actualQuestionIterator--
        }
    }
}