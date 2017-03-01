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
    actualQuestionReadTime: number
    actualQuestionAnswerTime: number
    actualQuestionPhase: string

    private totalTime: number
    private actualQuestion: TestQuestion
    private interval

    readonly questionPhases: Array<string> = ['READ', 'ANSWER']

    constructor(
        private testDataService: TestDataService
    ) {}

    ngOnInit() {
        this.actualQuestionIterator = -1
        this.start()
    }

    start() {
        this.nextQuestion()
        this.totalTime = this.testDataService.getTotalTime(this.test.questions)
        this.totalTimeMinutes = this.testDataService.millisecondsToTime(this.totalTime)
        this.startInterval()
    }

    nextQuestion() {
        if (this.actualQuestionIterator < this.test.questions.length -1) {
            this.actualQuestionPhase = this.questionPhases[0]
            this.actualQuestionIterator++
            this.setQuestionTime(this.test.questions[this.actualQuestionIterator])

            if (this.actualQuestionReadTime === 0) {
                this.actualQuestionPhase = this.questionPhases[1]
            }
        } else {
            // test end
        }
    }

    private startInterval() {
        this.interval = setInterval(() => {
            this.totalTime -= 1000
            this.totalTimeMinutes = this.testDataService.millisecondsToTime(this.totalTime)
            this.checkQuestionTime(this.test.questions[this.actualQuestionIterator])

            if (this.totalTime <= 0) {
                clearInterval(this.interval)
            }
        }, 1000)
    }

    private setQuestionTime(question: TestQuestion) {
        this.actualQuestionReadTime = question.readTime
        this.actualQuestionAnswerTime = question.answerTime
    }

    private checkQuestionTime(question: TestQuestion) {
        if (this.actualQuestionPhase === this.questionPhases[0]) {
            if (this.actualQuestionReadTime > 0) {
                this.actualQuestionReadTime -= 1000
            } else {
                this.actualQuestionPhase = this.questionPhases[1]
            }
        } 
        
        if (this.actualQuestionPhase === this.questionPhases[1]) {
            if (this.actualQuestionAnswerTime > 0) {
                this.actualQuestionAnswerTime -= 1000
            } else {
                this.nextQuestion()
            }
        }
    }

    private onQuestionRead(agreed: boolean) {
        this.actualQuestionPhase = this.questionPhases[1]
        clearInterval(this.interval)
        this.startInterval()

        console.log('onQuestionRead', agreed, this.test.questions[this.actualQuestionIterator])
    }

    private onQuestionAnsweared(agreed: string) {
        this.nextQuestion()
        clearInterval(this.interval)
        this.startInterval()

        console.log('onQuestionAnsweared', agreed, this.test.questions[this.actualQuestionIterator])
    }
}