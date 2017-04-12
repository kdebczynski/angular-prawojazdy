import { 
    TestQuestionType, 
    TestQuestionImportance
} from '../../app-config'

export class Result {
    questionTitle: string
    question: string
    media: string
    type: TestQuestionType
    importance: TestQuestionImportance
    answers: Array<string>
    answersStr: Array<string>
    userAnswers: Array<number>
    correctAnswers: Array<number>
    isCorrect: Boolean
}