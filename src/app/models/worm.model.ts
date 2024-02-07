import { controls } from "../controller/input.controller";
import { MaterialEnum } from "../enum/material.enum";
import { SquareModel } from "./square.model";
import * as THREE from 'three';

export class WormModel{

  private worm : SquareModel[] = [];


  constructor(){
    this.initWorm();
  }

  private next = (worm: SquareModel[], i = 0) => {
    if (worm[i].getMaterial() === MaterialEnum.HEAD){
      if (controls[0] === 1){
        worm[i].move(new THREE.Vector3(0,1,0));
      }else if(controls[1] === 1){
        worm[i].move(new THREE.Vector3(1,0,0));
      }else if (controls[2] === 1) {
        worm[i].move(new THREE.Vector3(0,-1,0));
      }else if (controls[3] === 1) {
        worm[i].move(new THREE.Vector3(-1,0,0));
      }
    }else{
      const position = new THREE.Vector3(worm[i+1].getPosition().x, worm[i+1].getPosition().y, worm[i+1].getPosition().z);
      this.next(worm, i+1);
      if (this.worm[i].getMaterial() === MaterialEnum.BODY){
        this.worm[i].reemplazePosition(position);
      }
    }
  }

  public eating = (food: THREE.Vector3) => {
    this.worm = [
      new SquareModel({
        material: MaterialEnum.DIGESTION,
        position: food
      }), 
      ...this.worm
    ];
  }

  public moveWorm = () => {
    
    let aux: THREE.Vector3 = new THREE.Vector3( 1, 0, 0 );
    this.next(this.worm);
    
    // const digestion = this.worm.find((w) => w.getMaterial() === MaterialEnum.DIGESTION);
    const digestions = this.worm.filter((w) => w.getMaterial() === MaterialEnum.DIGESTION).map(_ => _);

    if (digestions.length > 0){
      
      digestions.forEach((d) => {

        const object = this.worm.filter((w) => (
          w.getPosition().x === d.getPosition().x &&
          w.getPosition().y === d.getPosition().y
        )).map(_ => _);

        if (object.length === 1){
          d.setMaterial(MaterialEnum.BODY);
        }
      });

      // this.worm[0].setMaterial(MaterialEnum.BODY);
    }
  }
  
  public isCollision = (position: THREE.Vector3[]) => {
    const head = this.worm.find((w) => w.getMaterial() === MaterialEnum.HEAD);
    let collision = false;
    if (head){
      position.forEach((v3) => {
        if (head.getPosition().x === v3.x && head.getPosition().y === v3.y) collision = true;
      });
    }
    return collision;
  }

  public initWorm = () => {
    this.worm = [

      new SquareModel({
        material: MaterialEnum.BODY,
        position: {
          x: -5,
          y: 0
        }
      }),
      new SquareModel({
        material: MaterialEnum.BODY,
        position: {
          x: -4,
          y: 0
        }
      }),
      new SquareModel({
        material: MaterialEnum.BODY,
        position: {
          x: -3,
          y: 0
        }
      }),
      new SquareModel({
        material: MaterialEnum.BODY,
        position: {
          x: -2,
          y: 0
        }
      }),
      new SquareModel({
        material: MaterialEnum.BODY,
        position: {
          x: -1,
          y: 0
        }
      }),
      new SquareModel({
        material: MaterialEnum.HEAD,
        position: {
          x: 0,
          y: 0
        }
      }),
    ]
  }

  public getWorm = () => this.worm;

}