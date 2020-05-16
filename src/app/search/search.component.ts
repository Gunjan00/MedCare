import { Component, OnInit } from "@angular/core";
import { GoogleLogin } from 'nativescript-google-login';
import * as application from "tns-core-modules/application";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    constructor() {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.


         GoogleLogin.init({
                google: {
                    initialize: true,
                    serverClientId: "",
                    clientId: "",
                    isRequestAuthCode: true
                },
                activity: application.android.foregroundActivity
            });
    }


    login(): void {
        GoogleLogin.login(result=>{
            console.dir(result);
        });

    }
}
