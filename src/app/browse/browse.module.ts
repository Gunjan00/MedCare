import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BrowseRoutingModule } from "./browse-routing.module";
import { BrowseComponent } from "./browse.component";
import { MedModalComponent} from "./medmodal/medmodal.component"

@NgModule({
    imports: [
        NativeScriptCommonModule,
        BrowseRoutingModule
    ],
    declarations: [
        BrowseComponent,
        MedModalComponent
    ],

    entryComponents: [MedModalComponent],
    
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BrowseModule { }
