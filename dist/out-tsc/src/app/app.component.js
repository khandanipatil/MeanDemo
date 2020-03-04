import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart } from '@angular/router';
let AppComponent = class AppComponent {
    constructor(loadingBar, router) {
        this.loadingBar = loadingBar;
        this.router = router;
        this.title = 'MeanTest';
        this.router.events.subscribe((event) => {
            this.navigationInterceptor(event);
        });
    }
    navigationInterceptor(event) {
        if (event instanceof NavigationStart) {
            this.loadingBar.start();
        }
        if (event instanceof NavigationEnd) {
            this.loadingBar.complete();
        }
        if (event instanceof NavigationCancel) {
            this.loadingBar.stop();
        }
        if (event instanceof NavigationError) {
            this.loadingBar.stop();
        }
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map