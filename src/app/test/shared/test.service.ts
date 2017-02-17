import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';

import { Test }             from './test.model';
import { Endpoints }    from '../../app-config';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class TestService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private testsUrl = Endpoints.TESTS;  // URL to web api

    constructor (private http: Http) {}

    getTests(): Promise<Test[]> {
        return this.http.get(this.testsUrl)
               .toPromise()
               .then(response => response.json().data as Test[])
               .catch(this.handleError);
    }

    getTestById(id: number): Promise<Test> {
        const url = `${this.testsUrl}/${id}`;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Test)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}