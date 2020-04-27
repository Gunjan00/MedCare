import { Component, OnInit, Inject,ChangeDetectorRef,  ViewContainerRef } from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { MedModalComponent } from "./medmodal/medmodal.component";
import { Medicine } from '../shared/medicine';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
const firebase = require("nativescript-plugin-firebase/app");



@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {

    medicine:Medicine;
    medsCollection = firebase.firestore().collection("medicines");

    constructor(private modalService: ModalDialogService,
               private vcRef: ViewContainerRef) {
        
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }


    createModalView() {

        let options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };

        this.modalService.showModal(MedModalComponent, options)
            .then((medicine:Medicine) => {
                console.log(medicine);
                this.medsCollection.add(medicine);

                });
      }

}













 

