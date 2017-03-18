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

    getQuestionById(testQuestions: Array<TestQuestion>, id: Number): TestQuestion {
        return testQuestions.find((el) => {
            return el.id === id 
        })
    }

    getRandomizedQuestions(questions: TestQuestion[]): TestQuestion[] {
        return Helpers.suffleArray(questions)
    }

    getTotalTime(questions: TestQuestion[]): number {
        let totalTime: number = 0
        
        for (let i = 0; i < questions.length; i++) {
            totalTime += questions[i].readTime
            totalTime += questions[i].answerTime
        }

        return totalTime 
    }

    millisecondsToTime(milli: number): string {
        let milliseconds = milli % 1000
        let seconds = Math.floor((milli / 1000) % 60)
        let minutes = Math.floor((milli / (60 * 1000)) % 60)

        return minutes + ":" + seconds
    }

}