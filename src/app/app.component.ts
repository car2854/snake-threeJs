import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import * as THREE from 'three';
import { Draw } from './draw/draw';
import { keyController } from './controller/input.controller';
import { StatusGame } from './enum/statusGame.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Snake';

  public statusGame = Draw.statusGame;

  @ViewChild('refCanvas') refCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(){}
  
  ngAfterViewInit(): void {

    Draw.config({
      canvas: this.refCanvas.nativeElement
    });
    
    keyController();
    
    Draw.draw();
  }

  public isGameOver = () => this.statusGame.status === StatusGame.GAMEOVER;

  public restartGame = () => {
    this.statusGame.status = StatusGame.RUN;
    Draw.restartGame();
  }
}
