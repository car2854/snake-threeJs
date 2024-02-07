import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import * as THREE from 'three';
import { Draw } from './draw/draw';
import { keyController } from './controller/input.controller';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'three';

  constructor(){

    Draw.config();
    
    keyController();
    
    Draw.draw();

    // const scene = new THREE.Scene();
    // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    // // config screen
    // const renderer = new THREE.WebGLRenderer();
    // renderer.setSize( window.innerWidth, window.innerHeight );
    
    // // Add to <>
    // document.body.appendChild( renderer.domElement );
    
    // // create box
    // const geometry = new THREE.BoxGeometry( 1, 1, 2 );
    // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // const cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );
    
    // camera.position.z = 5;
    
    // // infinite loop begin here
    // function animate() {
    //   requestAnimationFrame( animate );
    
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      
    
    //   renderer.render( scene, camera );
    // }
    
    // animate();
  }
}
