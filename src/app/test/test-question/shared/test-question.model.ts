import { 
    TestQuestionType, 
    TestQuestionTime,
    TestQuestionImportance 
} from '../../../app-config'

export class TestQuestion {
    id: number
    title: string
    question: string
    media: string
    type: TestQuestionType
    importance: TestQuestionImportance
    readTime: number
    answerTime: number
    answers: Array<string>
    answersStr: Array<string>
    correctAnswers: Array<number>
}