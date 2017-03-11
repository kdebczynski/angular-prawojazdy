import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { NgbModule }            from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }                   from './app.component';
import { WelcomeComponent }               from './welcome/welcome.component';
import { TestComponent}                   from './test/test.component';
import { TestQuestionSwitcherComponent}   from './test/test-question-switcher/test-question-switcher.component';
import { TestQuestionComponent}           from './test/test-question/test-question.component';
import { AppRoutingModule }               from './app-routing.module';
import { ResultComponent }                from './result/result.component';

import { InMemoryWebApiModule }   from 'angular-in-memory-web-api';
import { InMemoryTestService }    from './data/mock-test-questions';
import { TestAnswerStoreService } from './test/shared/test-answer-store.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TestComponent,
    TestQuestionSwitcherComponent,
    TestQuestionComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryTestService, { delay: 0 }),
    NgbModule.forRoot()
  ],
  providers: [TestAnswerStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
