import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Page } from 'tns-core-modules/ui/page';
import { ListPicker } from 'tns-core-modules/ui/list-picker';
import { TextField } from 'tns-core-modules/ui/text-field'; 
import { Medicine } from '../../shared/medicine';

@Component({
    moduleId: module.id,
    templateUrl: './medmodal.component.html'
})
export class MedModalComponent implements OnInit {

    medArray: Array<number> = [1, 2, 3, 4];
    selectedIndex:number = 0;
    meds: number;
    medicine: Medicine;
    medForm: FormGroup;
    

    constructor(private params: ModalDialogParams,
        private page: Page,
        private formBuilder: FormBuilder,
        ) {
                
                this.medForm = this.formBuilder.group({
                name: ['', Validators.required],
                color: ['', Validators.required],
                quantity: [5, Validators.required]
                });
           
    }

    ngOnInit() {

        
    }

    onNameChange(args) { 
        let textField = <TextField>args.object;        
        this.medForm.patchValue({ name: textField.text }); 
    }

    onColorChange(args) { 
        let textField = <TextField>args.object;
        this.medForm.patchValue({ color: textField.text });    
    }

    onQuantityChange(args) { 
        let picker = <ListPicker>args.object;
        this.medForm.patchValue( { quantity: this.medArray [picker.selectedIndex]});  

        
    }

    onSubmit() {
        this.medicine = this.medForm.value;
        console.log(this.medicine);
        this.params.closeCallback(this.medicine);
      }
}