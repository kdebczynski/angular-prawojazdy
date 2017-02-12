import { Test } from '../test/shared/test.model'

export const TESTS: Test[] = [
    {
        id : 1, 
        questions: [
            {
                id: 1,
                title: 'Pytanie 1',
                question: 'q 1',
                answers: ['A', 'B', 'C'],
                correctAnswers: [1]
            },
            {
                id: 2,
                title: 'Pytanie 2',
                question: 'q 2',
                answers: ['A', 'B', 'C'],
                correctAnswers: [1]
            }
        ]
    },
    {
        id : 2, 
        questions: [
            {
                id: 1,
                title: 'Pytanie 1',
                question: 'q',
                answers: ['A', 'B', 'C'],
                correctAnswers: [1]
            }
        ]
    }
]