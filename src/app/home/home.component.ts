import { Component, OnInit, Inject } from "@angular/core";
import { Medicine } from '../shared/medicine';
import { MedService } from '../services/med.service';



@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    
medicines: Medicine[];
    constructor(private medService: MedService) { }

    ngOnInit() {

        this.medService.getMedicines()
      .subscribe(medicines => this.medicines = medicines
        );
        
    }
    
}



