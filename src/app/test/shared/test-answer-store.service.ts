import { Injectable }   from '@angular/core';
import { TestAnswer }   from './test-answer.model';
import { Test }         from './test.model';
import { Result }       from '../../result/shared/result.model';

@Injectable()
export class TestAnswerStoreService {

    private answersSource: Array<TestAnswer> = []

    get answers() {
        return this.answersSource
    }

    addAnswer(testId: number, testQuestionId: number, answers: Array<number>) {
        this.answersSource.push({
            testId: testId,
            testQuestionId: testQuestionId,
            answersIndexes: answers
        })
    }

    getResults(test: Test) {
        return [new Result()];
    }

}