import { Injectable }           from '@angular/core';
import { TestAnswer }           from './test-answer.model';
import { Test }                 from './test.model';


@Injectable()
export class TestAnswerStoreService {

    private answersSource: Array<TestAnswer> = []

    get answers(): Array<TestAnswer> {
        return this.answersSource
    }

    addAnswer(testId: number, testQuestionId: number, answers: Array<number>): void {
        this.answersSource.push({
            testId: testId,
            testQuestionId: testQuestionId,
            answersIndexes: answers
        })
    }

    clear(): void {
        this.answersSource = []
    }

}