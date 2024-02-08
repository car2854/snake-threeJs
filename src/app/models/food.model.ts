import { MaterialEnum } from "../enum/material.enum";
import { SquareModel } from "./square.model";

import * as THREE from 'three';
import { WormModel } from "./worm.model";
import { globals } from "../globalsHola";

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


  public generateFood = (wormModel: WormModel) => {

    
    let num = this.generateNumber(1,globals.generationSpace);
    
    let complete = false;
    
    do {
      for (let i = globals.height.min + 1; i <= globals.height.max - 1 && !complete; i++) {
        for (let j = globals.width.min + 1; j <= globals.width.max - 1 && !complete; j++) {
          num--;
          if (num <= 0){
            const objet = wormModel.getWorm().find((w) => (w.getPosition().x === i && w.getPosition().y === j ));
            if (!objet){
              this.food.reemplazePosition(new THREE.Vector3(i,j,0));
              complete = true;
            }
          }
        }
      }
    } while (!complete);

  }

  private generateNumber = (min: number, max: number) => { 
    const numeroAleatorio = Math.random();
    const rangoAjustado = max - min + 1;
    const numeroFinal = Math.floor(numeroAleatorio * rangoAjustado) + min;
    return numeroFinal;
  }

}