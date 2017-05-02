import { Component, OnInit, Input, OnDestroy, Output, EventEmitter }    from '@angular/core';
import { Router }                                                       from '@angular/router';

import { TestQuestionType }             from '../../app-config';
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
    isQuestionAnsweared: boolean

    private totalTime: number
    private actualQuestion: TestQuestion
    private testInterval
    private intervalValue: number = 1000

    readonly questionPhases: Array<string> = ['READ', 'ANSWER']

    constructor(
        private testDataService: TestDataService,
        private testAnswerStoreService: TestAnswerStoreService,
        private router: Router
    ) {}

    ngOnInit() {
        clearInterval(this.testInterval)
        this.actualQuestionIterator = -1
        this.totalTime = 0
        this.totalTimeMinutes = undefined
        this.actualQuestionReadTime = 0
        this.actualQuestionAnswerTime = 0
        this.actualQuestionPhase = undefined
        this.actualQuestion = undefined
        this.isQuestionAnsweared = false

        this.randomize()
        this.start()
    }

    ngOnDestroy() {
        clearInterval(this.testInterval)
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
        this.startTestInterval()
        this.totalTime = this.testDataService.getTotalTime(this.randomizedQuestions)
        this.setTotalTimeMinutes(this.totalTime)
    }

    private nextQuestion() {
        this.isQuestionAnsweared = false
        
        if (this.actualQuestionIterator < this.randomizedQuestions.length -1) {
            this.actualQuestionPhase = this.questionPhases[0]
            this.actualQuestionIterator++
            this.actualQuestion = this.randomizedQuestions[this.actualQuestionIterator]
            this.setQuestionTime(this.actualQuestion)

            if (this.actualQuestionReadTime === 0) {
                this.actualQuestionPhase = this.questionPhases[1]
            }
        } else {
            clearInterval(this.testInterval)
            this.router.navigate(['/result', this.test.id])
        }
    }

    private startTestInterval() {
        this.testInterval = setInterval(() => {
            this.totalTime -= this.intervalValue
            this.setTotalTimeMinutes(this.totalTime)
            this.checkQuestionTime(this.actualQuestion)

            // out of time
            if (this.totalTime <= 0) {
                clearInterval(this.testInterval)
                this.nextQuestion()
            }
        }, this.intervalValue)
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
        // read phase
        if (this.actualQuestionPhase === this.questionPhases[0]) {
            if (this.actualQuestionReadTime > 0) {
                this.actualQuestionReadTime -= this.intervalValue
            } else {
                this.actualQuestionPhase = this.questionPhases[1]
            }
        } 
        
        // answear pahse
        if (this.actualQuestionPhase === this.questionPhases[1]) {
            if (this.actualQuestionAnswerTime > 0) {
                this.actualQuestionAnswerTime -= this.intervalValue
            } else {
                // no answear
                if (!this.isQuestionAnsweared) {
                    this.answaerToQuestion([])
                }
                
                this.nextQuestion()
            }
        }
    }

    private onQuestionRead(agreed: boolean) {
        this.actualQuestionPhase = this.questionPhases[1]
    }

    private onQuestionAnsweared(index: number) {
        this.answaerToQuestion([index])
    }

    private onNextQuestion() {
        this.nextQuestion()
    }

    private answaerToQuestion(answear: Array<number>) {
        this.testAnswerStoreService.addAnswer(this.test.id, this.actualQuestion.id, answear)
        this.isQuestionAnsweared = true

        if (this.actualQuestionIterator === this.randomizedQuestions.length -1) {
            this.router.navigate(['/result', this.test.id])
        }
    }
}