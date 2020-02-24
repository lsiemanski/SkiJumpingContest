import {Component, Input, OnInit} from '@angular/core';
import {ContestResult} from '../../../../models/contest-result.model';

@Component({
  selector: 'app-contest-results',
  templateUrl: './contest-results.component.html',
  styleUrls: ['./contest-results.component.css']
})
export class ContestResultsComponent implements OnInit {

  @Input() results: {rank: number, result: ContestResult}[];
  @Input() lastResult: {rank: number, result: ContestResult};

  constructor() { }

  ngOnInit() {
  }

}
