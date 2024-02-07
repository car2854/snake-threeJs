import * as THREE from 'three';
import { SquareModel } from '../models/square.model';
import { WormModel } from '../models/worm.model';
import { FoodModel } from '../models/food.model';
import { WallModel } from '../models/wall.model';
import { MaterialEnum } from '../enum/material.enum';
import { StatusGame } from '../enum/statusGame.enum';
export class Draw{
  
  
  public static scene = new THREE.Scene();
  public static camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  public static renderer = new THREE.WebGLRenderer();
  
  private static wormModel = new WormModel();
  private static foodModel = new FoodModel();
  private static wallModel = new WallModel();

  private static statusGame = StatusGame.RUN;

  // Time
  private static time = 0;

  private constructor(){}

  public static config = () => {
    
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    
    document.body.appendChild(Draw.renderer.domElement);

    this.camera.position.z = 22;


    window.addEventListener('resize', () => {
      
      // this.renderer.setSize( window.innerWidth, window.innerHeight );
      // this.camera.aspect = window.innerWidth / window.innerHeight;

    });


    
    this.wormModel.getWorm().forEach((worm) => {
      this.scene.add( worm.cube );
    });

    this.wallModel.getWall().forEach((wall) => {
      this.scene.add( wall.cube );
    });

    this.scene.add(this.foodModel.food.cube);



  }

  public static draw = () => {
    
    requestAnimationFrame( this.draw );
    if (this.statusGame === StatusGame.RUN){

      this.time++;

      if (this.time === 15){
        this.wormModel.moveWorm();
        this.time = 0;
        
        if (this.wormModel.isCollision([this.foodModel.food.getPosition()])){
          this.wormModel.eating(this.foodModel.food.getPosition());
          this.scene.add(this.wormModel.getWorm()[0].cube);
          this.foodModel.generateFood();
        }
        if (this.wormModel.isCollision(
          [
            ...this.wallModel.getWall().map((wall) => wall.getPosition()),
            ...this.wormModel.getWorm().filter((worm) => worm.getMaterial() === MaterialEnum.BODY).map(_ => _.getPosition())
          ]
        )){
          console.log('collision');
          this.statusGame = StatusGame.GAMEOVER;
        }
  
      }

    }

    this.renderer.render( this.scene, this.camera );
  }
}