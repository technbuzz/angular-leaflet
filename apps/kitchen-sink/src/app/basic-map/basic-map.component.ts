import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NglCanvas } from '@angular-leaflet/core';

@Component({
  selector: 'app-basic-map',
  imports: [NglCanvas],
  standalone: true,
  templateUrl: './basic-map.component.html',
  styleUrl: './basic-map.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BasicMapComponent {}
