import { Injectable } from '@angular/core';

import { Test } from './test.model'
import { TESTS } from '../../data/mock-test-questions'

@Injectable()
export class TestService {
    getTests(): Promise<Test[]> {
        return Promise.resolve(TESTS)
    }

    getTestById(id: number): Promise<Test> {
        let test: Test;

        for (let i = 0; i < TESTS.length; i++) {
            if (TESTS[i].id === id) {
                test = TESTS[i]
                break;
            }
        }

        return Promise.resolve(test)
    }
}