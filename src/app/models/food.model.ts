import { MaterialEnum } from "../enum/material.enum";
import { SquareModel } from "./square.model";

import * as THREE from 'three';

export class FoodModel{
  
  public food! : SquareModel;

  constructor(){
    this.food = new SquareModel({
      material: MaterialEnum.FOOD,
      position: {
        x: 1,
        y: 1
      }
    });
  }

  public generateFood = () => {
    const x = this.generateNumber(-14,14);
    const y = this.generateNumber(-14,14);
    this.food.reemplazePosition(new THREE.Vector3(x,y,0));
  }

  private generateNumber = (min: number, max: number) => { 
    const numeroAleatorio = Math.random();
    const rangoAjustado = max - min + 1;
    const numeroFinal = Math.floor(numeroAleatorio * rangoAjustado) + min;
    return numeroFinal;
  }

}