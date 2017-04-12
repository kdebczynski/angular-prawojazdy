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
        //Get hours from milliseconds
        var hours = milli / (1000*60*60);
        var absoluteHours = Math.floor(hours);
        var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

        //Get remainder from hours and convert to minutes
        var minutes = (hours - absoluteHours) * 60;
        var absoluteMinutes = Math.floor(minutes);
        var m = absoluteMinutes > 9 ? absoluteMinutes : '0' +  absoluteMinutes;

        //Get remainder from minutes and convert to seconds
        var seconds = (minutes - absoluteMinutes) * 60;
        var absoluteSeconds = Math.floor(seconds);
        var s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

        return m + ':' + s;

    }

}