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
                        question: 'Czy wyprzedzając masz prawo użyć sygnału dźwiękowego, jeżeli widoczny pojazd rozpocznie zmianę pasa ruchu?',
                        media: 'assets/test1/s18.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [0]
                    },
                    {
                        id: 2,
                        title: 'Pytanie 2',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.Low,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'Czy umieszczony na tablicy znak ostrzega Cię o miejscu na drodze, w którym występuje lub może występować niebezpieczeństwo?',
                        media: 'assets/test1/s17.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [0]
                    },
                    {
                        id: 3,
                        title: 'Pytanie 3',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.Low,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'Czy w tej sytuacji, jadąc na wrost, jesteś włączającym się do ruchu?',
                        media: 'assets/test1/s22.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [0]
                    },
                    {
                        id: 4,
                        title: 'Pytanie 4',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.Low,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'Czy ze względów bezpieczeństwa wskazane jest, aby używając gaśnicy samochodowej, unikać pełnego otwarcia pokrywy komory silnika?',
                        media: 'assets/test1/s29.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [0]
                    },

                    // Simple; Medium
                    {
                        id: 5,
                        title: 'Pytanie 5',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.Medium,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'Czy widoczny znak poziomy oznacza linię przystankową?',
                        media: 'assets/test1/s13.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [0]
                    },
                    {
                        id: 6,
                        title: 'Pytanie 6',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.Medium,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'Czy na odcinku drogi za widocznym znakiem będziesz ostrzegany o każdym występującym na niej zakręcie?',
                        media: 'assets/test1/s15.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [1]
                    },
                    {
                        id: 7,
                        title: 'Pytanie 7',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.Medium,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'Czy cofanie pojazdem na drodze ekspresowej jest zabronione?',
                        media: 'assets/test1/s25.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [0]
                    },
                    {
                        id: 8,
                        title: 'Pytanie 8',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.Medium,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'Czy przejeżdżając obok tak zlokalizowanego przystanku tramwajowego, masz obowiązek zachować szczególną ostrożność?',
                        media: 'assets/test1/s26.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [0]
                    },
                    {
                        id: 9,
                        title: 'Pytanie 9',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.Medium,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'Czy w tej sytuacji należy rozpocząć hamowanie?',
                        media: 'assets/test1/s28.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [0]
                    },
                    {
                        id: 10,
                        title: 'Pytanie 10',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.Medium,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'Czy zmęczenie może powodować skutki zbliżone do działania alkoholu, takie jak obniżona możliwość koncentracji oraz wydłużony czas reakcji?', 
                        media: 'assets/test1/s30.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [0]
                    },

                    // Simple; High
                    {
                        id: 11,
                        title: 'Pytanie 11',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.High,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'Czy w tej sytuacji jestes obowiązany do upewnienia się czy nie nadjeżdza tramwaj?',
                        media: 'assets/test1/s14.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [0]
                    },
                    {
                        id: 12,
                        title: 'Pytanie 12',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.High,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'Czy wolno Ci zatrzymać się na odcinku jezdni przed widocznym znakiem w celu wysadzenia pasażera?',
                        media: 'assets/test1/s16.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [1]
                    },
                    {
                        id: 13,
                        title: 'Pytanie 13',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.High,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'Zamierzasz skręcić w lewo. Czy masz pierwszeństwo przed pojazdem nadjeżdżającym z prawej strony?',
                        media: 'assets/test1/s32.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [1]
                    },
                    {
                        id: 14,
                        title: 'Pytanie 14',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.High,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'Zamierzasz jechać na wprost. Czy masz obowiązek ustąpić pierwszeństwa pojazdowi nadjeżdżającemu z prawej strony?',
                        media: 'assets/test1/s19.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [0]
                    },
                    {
                        id: 15,
                        title: 'Pytanie 15',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.High,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'Czy w tej sytuacji możesz skręcić w prawo, jeżeli nie utrudni to ruchu pieszym i pojazdom poruszającym się drogą poprzeczną?',
                        media: 'assets/test1/s20.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [1]
                    },
                    {
                        id: 16,
                        title: 'Pytanie 16',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.High,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'Czy na obszarze wyznaczonym linią przystankową możesz zatrzymać samochód osobowy w celu zapytania o drogę?',
                        media: 'assets/test1/s21.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [1]
                    },
                    {
                        id: 17,
                        title: 'Pytanie 17',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.High,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'Czy wolno Ci zawrócić na moście?',
                        media: 'assets/test1/s23.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [1]
                    },
                    {
                        id: 18,
                        title: 'Pytanie 18',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.High,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'Czy wolno Ci zwiększać prędkość, jeżeli jesteś wyprzedzany przez inny pojazd?',
                        media: 'assets/test1/s24.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [1]
                    },
                    {
                        id: 19,
                        title: 'Pytanie 19',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.High,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'Czy w tej sytuacji powinieneś być przygotowany do zatrzymania pojazdu?',
                        media: 'assets/test1/s27.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [0]
                    },
                    {
                        id: 20,
                        title: 'Pytanie 20',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.High,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'Zamierzasz kontynuować jazdę widoczną drogą. Czy wjeżdzając na nią jesteś obowiązany ustąpić pierwszeństwa kierującym, którzy sie nią poruszają?',
                        media: 'assets/test1/s31.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [0]
                    },

                    // Advance; Low
                    {
                        id: 21,
                        title: 'Pytanie 21',
                        type: TestQuestionType.Advanced,
                        importance: TestQuestionImportance.Low,
                        readTime: TestQuestionTime.AdvancedRead,
                        answerTime: TestQuestionTime.AdvancedAnswer,
                        question: 'Co może być efektem nieszczelności układu wydechowego',
                        media: 'assets/test1/s7.jpg',
                        answers: TestQuestionAnswers.ADVANCED,
                        answersStr: [
                            'Ubytek płynu chłodzącego',
                            'Wzrost hałasu generowanego przez tłumik',
                            'Wolniejsze zużywanie się oleju silnikowego'
                        ],
                        correctAnswers: [1]
                    },
                    {
                        id: 22,
                        title: 'Pytanie 22',
                        type: TestQuestionType.Advanced,
                        importance: TestQuestionImportance.Low,
                        readTime: TestQuestionTime.AdvancedRead,
                        answerTime: TestQuestionTime.AdvancedAnswer,
                        question: 'Który z dokumentów masz obowiązek posiadać przy sobie kierując pojazdem samochodowym zarejestrowanym w Polsce?',
                        media: 'assets/test1/s8.jpg',
                        answers: TestQuestionAnswers.ADVANCED,
                        answersStr: [
                            'Kartę pojazdu.',
                            'Umowę kupna pojazdu',
                            'Dowód rejestracyjny pojazdu'
                        ],
                        correctAnswers: [2]
                    },

                    // Advance; Medium
                    {
                        id: 23,
                        title: 'Pytanie 23',
                        type: TestQuestionType.Advanced,
                        importance: TestQuestionImportance.Medium,
                        readTime: TestQuestionTime.AdvancedRead,
                        answerTime: TestQuestionTime.AdvancedAnswer,
                        question: 'W jakich warunkach masz prwo włączyć światła przeciwmgłowe?',
                        media: 'assets/test1/s4.jpg',
                        answers: TestQuestionAnswers.ADVANCED,
                        answersStr: [
                            'Gdy widoczność w obfitym deszczu jest ograniczona do 60 m.',
                            'Gdy widocznośc w gęstej mgle jest ograniczona do 100 m.',
                            'Gdy widoczność podczas opadów śniegu jest mniejsza niż 50 m.'
                        ],
                        correctAnswers: [2]
                    },
                    {
                        id: 24,
                        title: 'Pytanie 24',
                        type: TestQuestionType.Advanced,
                        importance: TestQuestionImportance.Medium,
                        readTime: TestQuestionTime.AdvancedRead,
                        answerTime: TestQuestionTime.AdvancedAnswer,
                        question: 'W jaki sposób należy obserwować otoczenie podczas jazdy po autostradzie?',
                        media: 'assets/test1/s5.jpg',
                        answers: TestQuestionAnswers.ADVANCED,
                        answersStr: [
                            'Patrzeć wyłącznie do przodu.',
                            'Poświęcać tyle samo uwagi na obserwację drogi przed i za pojazdem.',
                            'Patrzeć do przodu i regularnie kontrolować drogę za pojazdem w lusterkach wstecznych.'
                        ],
                        correctAnswers: [2]
                    },
                    {
                        id: 25,
                        title: 'Pytanie 25',
                        type: TestQuestionType.Advanced,
                        importance: TestQuestionImportance.Medium,
                        readTime: TestQuestionTime.AdvancedRead,
                        answerTime: TestQuestionTime.AdvancedAnswer,
                        question: 'Co należy sprawdzić, gdy lampka kontrolna kierunkowskazów zaczęła migać dużo szybciej?',
                        media: 'assets/test1/s9.jpg',
                        answers: TestQuestionAnswers.ADVANCED,
                        answersStr: [
                            'Napięcie akumulatora.',
                            'Sprawność bezpieczników.',
                            'Sprawność żarówek kierunkowskazów.'
                        ],
                        correctAnswers: [2]
                    },
                    {
                        id: 26,
                        title: 'Pytanie 26',
                        type: TestQuestionType.Advanced,
                        importance: TestQuestionImportance.Medium,
                        readTime: TestQuestionTime.AdvancedRead,
                        answerTime: TestQuestionTime.AdvancedAnswer,
                        question: 'W jaki sposób ustawisz fotel kierowcy przed jazdą?',
                        media: 'assets/test1/s10.jpg',
                        answers: TestQuestionAnswers.ADVANCED,
                        answersStr: [
                            'Tak, aby umożliwiał swobodny dostęp do urządzeń pojazdu służących do kierowania i sterowania nim.',
                            'Tak, aby plecy nie przylegały do oparcia.',
                            'Tak, aby ręce trzymające kierownicą były całkowicie wyprostowane w łokciach.'
                        ],
                        correctAnswers: [0]
                    },

                    // Advance; High
                    {
                        id: 27,
                        title: 'Pytanie 27',
                        type: TestQuestionType.Advanced,
                        importance: TestQuestionImportance.High,
                        readTime: TestQuestionTime.AdvancedRead,
                        answerTime: TestQuestionTime.AdvancedAnswer,
                        question: 'Kiedy na obszarze zabudowanym obowiązuje dopuszczalna prędkość 50 km/h?',
                        media: 'assets/test1/s1.jpg',
                        answers: TestQuestionAnswers.ADVANCED,
                        answersStr: [
                            'Od zmierzchu do świtu.',
                            'Od godziny 23:00 do 5:00',
                            'Od godziny 5:00 do 23:00'
                        ],
                        correctAnswers: [2]
                    },
                    {
                        id: 28,
                        title: 'Pytanie 28',
                        type: TestQuestionType.Advanced,
                        importance: TestQuestionImportance.High,
                        readTime: TestQuestionTime.AdvancedRead,
                        answerTime: TestQuestionTime.AdvancedAnswer,
                        question: 'Który z wymienionych skutków może zostać wywołany przez kontynuowanie jazdy przy świecącej się na czerwono lampce kontrolnej cisnienia oleju silnikowego?',
                        media: 'assets/test1/s2.jpg',
                        answers: TestQuestionAnswers.ADVANCED,
                        answersStr: [
                            'Poważne uszkodzenie silnika.',
                            'Uszkodzenie hamulców.',
                            'Uszkodzenie mechanizmów przeniesienia napędu.'
                        ],
                        correctAnswers: [0]
                    },
                    {
                        id: 29,
                        title: 'Pytanie 29',
                        type: TestQuestionType.Advanced,
                        importance: TestQuestionImportance.High,
                        readTime: TestQuestionTime.AdvancedRead,
                        answerTime: TestQuestionTime.AdvancedAnswer,
                        question: 'Jaki odstęp należy zachować podczas wyprzedzania motocykla?',
                        media: 'assets/test1/s3.jpg',
                        answers: TestQuestionAnswers.ADVANCED,
                        answersStr: [
                            'Bezpieczny, ale nie większy niż 0,5 metra.',
                            'Bezpieczny, ale nie większy niż 1 metr',
                            'Bezpieczny, ale nie mniejszy niż 1 metr'
                        ],
                        correctAnswers: [2]
                    },
                    {
                        id: 30,
                        title: 'Pytanie 30',
                        type: TestQuestionType.Advanced,
                        importance: TestQuestionImportance.High,
                        readTime: TestQuestionTime.AdvancedRead,
                        answerTime: TestQuestionTime.AdvancedAnswer,
                        question: 'Co jest niewskazane podczas jazdy czterokołowcem na zakręcie?',
                        media: 'assets/test1/s6.jpg',
                        answers: TestQuestionAnswers.ADVANCED,
                        answersStr: [
                            'Utrzymywanie niewielkiej stałej prędkości jazdy.',
                            'Pochylanie się w stronę zakrętu.',
                            'Nagłe zamknięcie lub otwarcie przepustnicy'
                        ],
                        correctAnswers: [2]
                    },
                    {
                        id: 31,
                        title: 'Pytanie 31',
                        type: TestQuestionType.Advanced,
                        importance: TestQuestionImportance.High,
                        readTime: TestQuestionTime.AdvancedRead,
                        answerTime: TestQuestionTime.AdvancedAnswer,
                        question: 'Dlaczego układanie na boku osób nieprzytomnych i oddychających jest bezpieczne?',
                        media: 'assets/test1/s11.jpg',
                        answers: TestQuestionAnswers.ADVANCED,
                        answersStr: [
                            'Ponieważ zapewnia poszkodowanemu największy komfort oczekiwania na pogotowie.',
                            'Ponieważ zabezpiecza przed urazami kręgosłupa szyjnego.',
                            'Ponieważ zapobiega niedrożności dróg oddechowych i zachłyśnięciu.'
                        ],
                        correctAnswers: [2]
                    },
                    {
                        id: 32,
                        title: 'Pytanie 32',
                        type: TestQuestionType.Advanced,
                        importance: TestQuestionImportance.High,
                        readTime: TestQuestionTime.AdvancedRead,
                        answerTime: TestQuestionTime.AdvancedAnswer,
                        question: 'Jesteś uczestnikiem lub świakdkiem wypadku drogowego. Które z wymienionych informacji należy podać dzwoniąc pod numer alarmowy?',
                        media: 'assets/test1/s12.jpg',
                        answers: TestQuestionAnswers.ADVANCED,
                        answersStr: [
                            'Miejsce zdarzenia oraz liczbę i stan ofiar wypadku.',
                            'Tylko liczbę pojazdów biorących udział w wypadku',
                            'Tylko liczbę ofiar wypadku'
                        ],
                        correctAnswers: [0]
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
                        importance: TestQuestionImportance.High,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'Czy widoczna linia złożona z trójkątów wskazuje Ci miejce zatrzymania pojazdu w celu ustąpienia pierwszeństwa?',
                        media: 'assets/test1/1.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [0]
                    },
                    {
                        id: 2,
                        title: 'Pytanie 2',
                        type: TestQuestionType.Simple,
                        importance: TestQuestionImportance.Medium,
                        readTime: TestQuestionTime.SimpleRead,
                        answerTime: TestQuestionTime.SimpleAnswer,
                        question: 'Czy w przedstawionej sytuacji odległość znaku ostrzegawczego od miejsca niebezpiecznego wynosi od 150 do 300 metrów?',
                        media: 'assets/test1/2.jpg',
                        answers: TestQuestionAnswers.SIMPLE,
                        answersStr: [],
                        correctAnswers: [1]
                    }
                ]
            }
        ]

         return {tests};
    }
}