import {Component, OnInit} from '@angular/core';
import {DataServiceService} from '../../services/data-service.service';
import {Result} from '../../modules/model/Result';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  results: Result[];
  displayedColumns: string[] = ['Value', 'LocalDateTime'];

  constructor(
    private dataService: DataServiceService
  ) {
  }

  ngOnInit() {
    this.getResults();
  }

  getResults() {
    this.dataService.retrieveTodo().subscribe(
      response => {
        console.log(response);
        this.results = response;
      }
    );
  }

  isEmptyResult(): boolean {
    if (this.results === undefined || this.results.length < 1) {
      return true;
    } else {
      return false;
    }
  }


}
