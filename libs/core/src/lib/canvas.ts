import { Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { Map, TileLayer } from 'leaflet'

@Component({
  standalone: true,
  imports: [],
  selector: 'ngl-canvas',
  template: `<div style="width: 800px; height: 600px;" #nglCanvas></div>`,
  //host: {
  //  style: 'width: 800px; height: 600px; display:block; position: relative;'
  //
  //}
})

export class NglCanvas implements OnInit {
  nglCanvas = viewChild.required<ElementRef<HTMLElement>>('nglCanvas');

  ngOnInit() { }

  ngAfterViewInit() {
    let map = new Map(this.nglCanvas().nativeElement).setView([51.505, -0.09], 13);

    new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

  }
}

