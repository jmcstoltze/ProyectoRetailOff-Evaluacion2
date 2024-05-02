import { Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl'; // Biblioteca de MapBox para interactuar con mapas

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

// Se defini y exporta la clase con un construtor vacío
export class MapPage implements OnInit {

  constructor() { }

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    // Token de acceso a mapbox
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1Ijoiam1jc3RvbHR6ZSIsImEiOiJjbHZtbjg2ZDIwNGkxMmp0dDJ1aG1hcXRtIn0.JK6ofvdB1cRib3aEP0vFLQ'
    
    // Como no funcionaba se intentó con el link de ejercicio de clases
    // (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1Ijoiam1jc3RvbHR6ZSIsImEiOiJjbHZmYnRwYWQwaTh6MmpvejhiZTRscHRoIn0.Pd3CJtujafXBR8u-Y6VMZw'

    // Se genera una instancia con los parámetros para renderizar el mapa
    const map = new mapboxgl.Map({
      container: 'map',      
      style: 'mapbox://styles/mapbox/streets-v12', // Define el estilo del mapa            
      center: [-74.5, 30], // Coordenadas de prueba
      zoom: 9
    })
  }
}

// https://www.mapbox.com/
