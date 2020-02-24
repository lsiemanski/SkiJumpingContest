import {Component, Input, OnInit} from '@angular/core';
import {ContestResult} from '../../../../models/contest-result.model';

@Component({
  selector: 'app-contest-last-result',
  templateUrl: './contest-last-result.component.html',
  styleUrls: ['./contest-last-result.component.css']
})
export class ContestLastResultComponent implements OnInit {

  @Input() lastResult: {rank: number, result: ContestResult};

  constructor() { }

  ngOnInit() {
  }

}
