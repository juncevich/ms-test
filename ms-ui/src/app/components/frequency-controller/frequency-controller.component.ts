import {Component, OnInit} from '@angular/core';
import {DataServiceService} from '../../services/data-service.service';

@Component({
  selector: 'app-frequency-controller',
  templateUrl: './frequency-controller.component.html',
  styleUrls: ['./frequency-controller.component.css']
})
export class FrequencyControllerComponent implements OnInit {

  frequency: number;
  multiply: number;

  constructor(
    private dataService: DataServiceService
  ) {
  }

  ngOnInit() {
    this.frequency = 5;
    this.multiply = 1000;
  }

  changeFrequency() {
    console.log(this.frequency * this.multiply);
    const result = this.frequency * this.multiply;
    console.log(result);
    this.dataService.changeFrequency(result).subscribe(
      response => {
        console.log(response);
        // this.results = response;
      }
    );
  }
}
