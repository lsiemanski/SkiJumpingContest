import {Component, Input, OnInit} from '@angular/core';
import {Jumper} from '../../../../models/jumper.model';
import {Hill} from '../../../../models/hill.model';

@Component({
  selector: 'app-contest-info',
  templateUrl: './contest-info.component.html',
  styleUrls: ['./contest-info.component.css']
})
export class ContestInfoComponent implements OnInit {

  @Input() nextJumper: Jumper;
  @Input() hill: Hill;

  constructor() { }

  ngOnInit() {
  }

}
