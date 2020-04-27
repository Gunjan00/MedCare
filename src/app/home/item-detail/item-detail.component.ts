import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { Medicine } from "../../shared/medicine";

@Component({
    selector: "ItemDetail",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    

    constructor(
        
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }
}
