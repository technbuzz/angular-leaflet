import { RendererFactory2 } from '@angular/core';
import { Route } from '@angular/router';
import { LeafletRendererFactory } from '@angular-leaflet/core'

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadComponent: () => import('./home.component').then(m => m.HomeComponent),
  },
  {
    path: 'leaflet',
    providers: [
      {
        provide: RendererFactory2,
        useClass: LeafletRendererFactory
      }
    ],
    loadComponent: () => import('./basic-map/basic-map.component').then(m => m.BasicMapComponent),
  }
];
