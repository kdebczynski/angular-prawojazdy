import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'welcome',
    templateUrl: './welcome.component.html',
    styleUrls: [ './welcome.component.css' ]
})
export class WelcomeComponent implements OnInit {
    constructor(
        private router: Router
    ) {}

    ngOnInit(): void {
        console.log('welcome init')
    }

    gotoTest(): void {
        this.router.navigate(['/test', 1]);
    }
}