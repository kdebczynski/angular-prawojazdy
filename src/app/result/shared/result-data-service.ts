import { Injectable }       from '@angular/core';
import * as _               from 'underscore';

import { Result }               from './result.model';
import { Test }                 from '../../test/shared/test.model';
import { TestAnswer }           from '../../test/shared/test-answer.model';
import { TestDataService }      from '../../test/shared/test-data.service';
import { TestQuestionAnswers, MinTestPassPoints }  from '../../app-config'

@Injectable()
export class ResultDataService {

    constructor(
        private testDataService: TestDataService
    ) {}

    getResults(answers: Array<TestAnswer>, test: Test): Array<Result> {
        let results = []

        answers.forEach((answer) => {
            let question = this.testDataService.getQuestionById(test.questions, answer.testQuestionId)

            results.push({
                questionTitle: question.title,
                question: question.question,
                media: question.media,
                type: question.type,
                importance: question.importance,
                userAnswers: answer.answersIndexes,
                correctAnswers: question.correctAnswers,
                isCorrect: this.isResultCorrect(question.correctAnswers, answer.answersIndexes)
            })
        });

        return results
    }

    filterResultsByCorrect(results: Array<Result>, correct: Boolean): Array<Result> {
        return results.filter((result) => {
            return result.isCorrect === correct
        })
    }

    isResultCorrect(correctAnswers: Array<Number>, userAnswers: Array<Number>): Boolean {
        return _.difference(correctAnswers, userAnswers).length === 0
    }

    getAnswerName(answers: Array<number>, type: number): string {
        let answersStrings = []
        let availableAnswers = []

        if (type === 0) {
            availableAnswers = TestQuestionAnswers['SIMPLE']
        } else if (type === 1) {
            availableAnswers = TestQuestionAnswers['ADVANCED']
        }

        answers.forEach((answer, i) => {
            answersStrings.push(availableAnswers[answer])
        })

        return answersStrings.join(', ')
    }

    countPoints(results: Array<Result>): Number {
        let points = 0

        results.forEach((result) => {
            if (result.isCorrect) {
                points += result.importance
            }
        })

        return points
    }

    isPassed(points): Boolean {
        return points >= MinTestPassPoints
    }
}