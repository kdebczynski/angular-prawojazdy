import { InMemoryDbService }    from 'angular-in-memory-web-api'
import { Test }                 from '../test/shared/test.model'
import { 
    TestQuestionType, 
    TestQuestionTime, 
    TestQuestionImportance,
    TestQuestionAnswers
}                               from '../app-config'

export class InMemoryTestService implements InMemoryDbService {
    createDb() {
        let tests: Test[] = [
            {
                id : 1, 
                name: 'Zestaw 1',
                questions: [
                    // Simple; Low
                    {
                        id: 1,
                        title: 'Pytanie 1',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.Low,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'q 1',
                        answers: TestQuestionAnswers.SIMPLE,
                        correctAnswers: [1]
                    },
                    {
                        id: 2,
                        title: 'Pytanie 2',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.Low,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'q 1',
                        answers: TestQuestionAnswers.SIMPLE,
                        correctAnswers: [1]
                    },
                    {
                        id: 3,
                        title: 'Pytanie 3',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.Low,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'q 1',
                        answers: TestQuestionAnswers.SIMPLE,
                        correctAnswers: [1]
                    },
                    {
                        id: 4,
                        title: 'Pytanie 4',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.Low,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'q 1',
                        answers: TestQuestionAnswers.SIMPLE,
                        correctAnswers: [1]
                    },

                    // Simple; Medium
                    {
                        id: 5,
                        title: 'Pytanie 5',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.Medium,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'q 1',
                        answers: TestQuestionAnswers.SIMPLE,
                        correctAnswers: [1]
                    },
                    {
                        id: 6,
                        title: 'Pytanie 6',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.Medium,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'q 1',
                        answers: TestQuestionAnswers.SIMPLE,
                        correctAnswers: [1]
                    },
                    {
                        id: 7,
                        title: 'Pytanie 7',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.Medium,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'q 1',
                        answers: TestQuestionAnswers.SIMPLE,
                        correctAnswers: [1]
                    },
                    {
                        id: 8,
                        title: 'Pytanie 8',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.Medium,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'q 1',
                        answers: TestQuestionAnswers.SIMPLE,
                        correctAnswers: [1]
                    },
                    {
                        id: 9,
                        title: 'Pytanie 9',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.Medium,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'q 1',
                        answers: TestQuestionAnswers.SIMPLE,
                        correctAnswers: [1]
                    },
                    {
                        id: 10,
                        title: 'Pytanie 10',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.Medium,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'q 1',
                        answers: TestQuestionAnswers.SIMPLE,
                        correctAnswers: [1]
                    },

                    // Simple; High
                    {
                        id: 11,
                        title: 'Pytanie 11',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.High,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'q 1',
                        answers: TestQuestionAnswers.SIMPLE,
                        correctAnswers: [1]
                    },

                    // Advance; Low
                    {
                        id: 12,
                        title: 'Pytanie 12',
                        type: TestQuestionType.Advanced,
                        importance: TestQuestionImportance.Low,
                        readTime: TestQuestionTime.AdvancedRead,
                        answerTime: TestQuestionTime.AdvancedAnswer,
                        question: 'q 1',
                        answers: TestQuestionAnswers.ADVANCED,
                        correctAnswers: [1]
                    },
                ]
            },
            {
                id : 2, 
                name: 'Zestaw 2',
                questions: [
                    {
                        id: 1,
                        title: 'Pytanie 1',
                        type: TestQuestionType.Simple,
                        readTime: TestQuestionTime.SimpleRead,
                        importance: TestQuestionImportance.Low,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'q',
                        answers: ['A', 'B', 'C'],
                        correctAnswers: [1]
                    }
                ]
            }
        ]

         return {tests};
    }
}