import * as THREE from 'three';
import { SquareModel } from '../models/square.model';
import { WormModel } from '../models/worm.model';
import { FoodModel } from '../models/food.model';
import { WallModel } from '../models/wall.model';
import { MaterialEnum } from '../enum/material.enum';
import { StatusGame } from '../enum/statusGame.enum';
import { StatusGameInterface } from '../interface/statusGame';
import { controls } from '../controller/input.controller';
import { globals } from '../globalsHola';
export class Draw{
  
  public static statusGame: StatusGameInterface = {
    points: 0,
    status: StatusGame.RUN
  }
  
  public static scene = new THREE.Scene();
  public static camera : THREE.PerspectiveCamera;

  public static renderer: THREE.WebGLRenderer;
  
  private static wormModel = new WormModel();
  private static foodModel = new FoodModel();
  private static wallModel = new WallModel();

  // Time
  private static time = 0;

  private constructor(){}

  public static config = (data: {
    canvas:HTMLCanvasElement
  }) => {
    
    // this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    this.camera = new THREE.PerspectiveCamera(75, data.canvas.width / data.canvas.height, 0.1, 1000 );

    this.renderer = new THREE.WebGLRenderer({canvas: data.canvas, antialias: true});

    // this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.renderer.setSize( data.canvas.width, data.canvas.height );
    
    this.camera.position.z = 22;

    window.addEventListener('resize', () => {
      
      // this.renderer.setSize( window.innerWidth, window.innerHeight );
      // this.camera.aspect = window.innerWidth / window.innerHeight;

    });


    this.foodModel.generateFood(this.wormModel);
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
    if (this.statusGame.status === StatusGame.RUN){

      this.time++;

      if (this.time === globals.timeToMoveTheWorm){
        this.wormModel.moveWorm();
        this.time = 0;
        
        if (this.wormModel.isCollision([this.foodModel.food.getPosition()])){
          this.wormModel.eating(this.foodModel.food.getPosition());
          this.scene.add(this.wormModel.getWorm()[0].cube);
          this.foodModel.generateFood(this.wormModel);
          this.statusGame.points = this.statusGame.points + globals.pointsToAccumulate;
        }
        if (this.wormModel.isCollision(
          [
            ...this.wallModel.getWall().map((wall) => wall.getPosition()),
            ...this.wormModel.getWorm().filter((worm) => worm.getMaterial() === MaterialEnum.BODY).map(_ => _.getPosition())
          ]
        )){
          this.statusGame.status = StatusGame.GAMEOVER;
        }
  
      }

    }

    this.renderer.render( this.scene, this.camera );
  }

  public static restartGame = () => {
    this.wormModel.initWorm();
    this.foodModel.generateFood(this.wormModel);
    this.scene.clear();
    this.wormModel.getWorm().forEach((worm) => {
      this.scene.add( worm.cube );
    });

    this.wallModel.getWall().forEach((wall) => {
      this.scene.add( wall.cube );
    });

    this.scene.add(this.foodModel.food.cube);
    controls[0] = 0;
    controls[1] = 1;
    controls[2] = 0;
    controls[3] = 0;
  }
}