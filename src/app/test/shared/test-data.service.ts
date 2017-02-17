import { Injectable }       from '@angular/core';

import { Test }             from './test.model';
import { TestQuestion }     from '../test-question/shared/test-question.model';
import { TestQuestionType } from '../../app-config';
import { Helpers }          from '../../shared/helpers';

@Injectable()
export class TestDataService {

    getQuestionsByType(test: Test, type: TestQuestionType): TestQuestion[] {
        let questions : TestQuestion[] = []

        test.questions.forEach((testQuestion) => {
            if (testQuestion.type === type) {
                questions.push(testQuestion)
            }
        })

        return questions
    }

    getRandomizedQuestions(questions: TestQuestion[]): TestQuestion[] {
        return Helpers.suffleArray(questions)
    }

}