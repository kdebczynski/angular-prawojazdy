import { 
    TestQuestionType, 
    TestQuestionTime,
    TestQuestionImportance 
} from '../../../app-config'

export class TestQuestion {
    id: number
    title: string
    question: string
    type: TestQuestionType
    importance: TestQuestionImportance
    readTime: TestQuestionTime
    answerTime: TestQuestionTime
    answers: Array<string>
    correctAnswers: Array<number>
}