import { Component, OnInit, Output } from '@angular/core';
import {PlatillosService } from '../platillos.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent implements OnInit {
  // clickEvent: any;

  constructor(private ps: PlatillosService) { }

  check = 'check';
  checked = false;


  ngOnInit() {
    this.showPlatillos();
  }

  showPlatillos() {
    this.ps.getPlatillos().subscribe((platillos => {
      console.log(platillos);
    }));
  }

  toggle() {
    this.checked = !this.checked;
    if (this.checked) {
      this.check = 'check';
    } else {
      this.check = '';
    }
  }

}
