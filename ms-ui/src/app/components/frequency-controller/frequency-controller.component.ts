import {Component, OnInit} from '@angular/core';
import {DataServiceService} from '../../services/data-service.service';
import {Multiply} from '../../modules/model/Multiply';


@Component({
  selector: 'app-frequency-controller',
  templateUrl: './frequency-controller.component.html',
  styleUrls: ['./frequency-controller.component.css']
})
export class FrequencyControllerComponent implements OnInit {

  frequency: number;
  multiplies: Multiply[] = [{units: `Секунды`, multiply_factor: 1000}, {units: `Миллисекунды`, multiply_factor: 1}];
  multiply: Multiply;

  constructor(
    private dataService: DataServiceService
  ) {
  }

  ngOnInit() {
    this.frequency = 5;
    this.multiply = this.multiplies.find(value => value.units === `Секунды`);
  }

  changeFrequency() {
    const result = this.frequency * +this.multiply.multiply_factor;
    this.dataService.changeFrequency(result).subscribe();
  }

  onChange(newValue) {
    this.multiply = this.multiplies.find(value => value.multiply_factor === newValue);
  }
}
