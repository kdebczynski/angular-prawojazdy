import { Component, OnInit, Input, OnDestroy, Output, EventEmitter }    from '@angular/core';
import { Router }                                                       from '@angular/router';

import { TestQuestionType }              from '../../app-config';
import { Test }                         from '../shared/test.model';
import { TestDataService }              from '../shared/test-data.service';
import { TestQuestion }                 from '../test-question/shared/test-question.model';
import { TestAnswerStoreService }       from '../shared/test-answer-store.service';

@Component({
    moduleId: module.id,
    selector: 'test-question-switcher',
    templateUrl: './test-question-switcher.component.html',
    styleUrls: [ '../test.component.css' ],
    providers: [ TestDataService ]
})
export class TestQuestionSwitcherComponent implements OnInit, OnDestroy  {
    @Input() test: Test
    @Output() onTotalTimeChanged = new EventEmitter<string>()

    randomizedQuestions: TestQuestion[]
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
        private testDataService: TestDataService,
        private testAnswerStoreService: TestAnswerStoreService,
        private router: Router
    ) {}

    ngOnInit() {
        clearInterval(this.interval)
        this.actualQuestionIterator = -1
        this.totalTime = 0
        this.totalTimeMinutes = undefined
        this.actualQuestionReadTime = 0
        this.actualQuestionAnswerTime = 0
        this.actualQuestionPhase = undefined
        this.actualQuestion = undefined

        this.randomize()
        this.start()
    }

    ngOnDestroy() {
        clearInterval(this.interval)
    }

    private randomize() {
        let simpleQuestionsRand: TestQuestion[]
        let advancedQuestonsRand: TestQuestion[]

        simpleQuestionsRand = this.testDataService.getRandomizedQuestions(
            this.testDataService.getQuestionsByType(this.test, TestQuestionType.Simple)
        )

        advancedQuestonsRand = this.testDataService.getRandomizedQuestions(
            this.testDataService.getQuestionsByType(this.test, TestQuestionType.Advanced)
        )

        this.randomizedQuestions = simpleQuestionsRand.concat(advancedQuestonsRand)
    }

    private start() {
        this.nextQuestion()
        this.totalTime = this.testDataService.getTotalTime(this.test.questions)
        this.setTotalTimeMinutes(this.totalTime)
        this.startInterval()
    }

    private nextQuestion() {
        if (this.actualQuestionIterator < this.test.questions.length -1) {
            this.actualQuestionPhase = this.questionPhases[0]
            this.actualQuestionIterator++
            this.actualQuestion = this.test.questions[this.actualQuestionIterator]
            this.setQuestionTime(this.actualQuestion)

            if (this.actualQuestionReadTime === 0) {
                this.actualQuestionPhase = this.questionPhases[1]
            }
        } else {
            clearInterval(this.interval)
            this.router.navigate(['/result', this.test.id]);
        }
    }

    private startInterval() {
        this.interval = setInterval(() => {
            this.totalTime -= 1000
            this.setTotalTimeMinutes(this.totalTime)
            this.checkQuestionTime(this.actualQuestion)

            if (this.totalTime <= 0) {
                clearInterval(this.interval)
            }
        }, 1000)
    }

    private setTotalTimeMinutes(totalTime: number) {
        this.totalTimeMinutes = this.testDataService.millisecondsToTime(totalTime)
        this.onTotalTimeChanged.emit(this.totalTimeMinutes)
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
                this.testAnswerStoreService.addAnswer(this.test.id, this.actualQuestion.id, [])
                this.nextQuestion()
            }
        }
    }

    private onQuestionRead(agreed: boolean) {
        this.actualQuestionPhase = this.questionPhases[1]
        clearInterval(this.interval)
        this.startInterval()
    }

    private onQuestionAnsweared(index: number) {
        this.testAnswerStoreService.addAnswer(this.test.id, this.actualQuestion.id, [index])

        this.nextQuestion()
        clearInterval(this.interval)
        this.startInterval()
    }
}