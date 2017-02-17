export const enum TestQuestionType {
    Simple,
    Advanced
}

export const enum TestQuestionTime {
    SimpleRead = 1000 * 20,
    SimpleAnswer = 1000 * 15,
    AdvancedRead = 0,
    AdvancedAnswer = 1000 * 50,
}

export const enum TestQuestionImportance {
    Low = 1,
    Medium = 2,
    High = 3
}

export const TestQuestionAnswers = {
    'SIMPLE': ['Tak', 'Nie'],
    'ADVANCED': ['A', 'B', 'C']
}

export const Endpoints = {
    'TESTS': 'api/tests'
}