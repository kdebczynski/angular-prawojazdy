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
                type: question.type,
                importance: question.importance,
                userAnswers: answer.answersIndexes,
                correctAnswers: question.correctAnswers,
                isCorrect: this.isResultCorrect(question.correctAnswers, answer.answersIndexes)
            })
        });

        return results
    }

    isResultCorrect(correctAnswers: Array<Number>, userAnswers: Array<Number>): Boolean {
        return _.difference(correctAnswers, userAnswers).length === 0
    }

    getAnswersNames(answersIndexed: Array<Number>): String {
        return 'Tak'
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