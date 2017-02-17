import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { AppComponent }         from './app.component';
import { WelcomeComponent }     from './welcome/welcome.component';
import { TestComponent}         from './test/test.component';
import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTestService }  from './data/mock-test-questions';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryTestService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
