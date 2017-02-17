import { TestQuestion } from '../test-question/shared/test-question.model'

export class Test {
    id: number
    name: string
    questions: Array<TestQuestion>
}