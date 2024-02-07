import * as THREE from 'three';
import { MaterialEnum } from '../enum/material.enum';

export class SquareModel{
  
  public cube: THREE.Mesh | any;
  private material!: MaterialEnum;

  constructor(data: {
    material: MaterialEnum,
    position: {
      x: number,
      y: number
    }
  }){
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const color = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    
    this.material = data.material;

    switch (data.material) {
      case MaterialEnum.WALL:
        color.color = new THREE.Color(0x2BEA3F);
        break;
      case MaterialEnum.BODY:
        color.color = new THREE.Color(0xFFF);
        break;  
      case MaterialEnum.HEAD:
        color.color = new THREE.Color(0x66946B);
        break;
      case MaterialEnum.FOOD:
        color.color = new THREE.Color(0xFF0000);
        break;
      case MaterialEnum.DIGESTION:
        color.color = new THREE.Color(0x02056E);
        break;
      default:
        break;
    }

    this.cube = new THREE.Mesh(geometry, color);
    this.cube.position.x = data.position.x;
    this.cube.position.y = data.position.y;
    this.cube.position.z = 0;

  }

  public move = (positionTo: THREE.Vector3) => {
    this.cube.position.x = this.cube.position.x + positionTo.x;
    this.cube.position.y = this.cube.position.y + positionTo.y;
  }

  public reemplazePosition = (positionTo: THREE.Vector3) => {
    this.cube.position.x = positionTo.x;
    this.cube.position.y = positionTo.y;
  }

  public getPosition = () : THREE.Vector3 => this.cube.position;

  public getMaterial = () => this.material;
  public setMaterial = (material: MaterialEnum) => {
    this.material = material;

    switch (material) {
      case MaterialEnum.WALL:
        this.cube.material.color.setHex(0x2BEA3F);
        break;
      case MaterialEnum.BODY:
        this.cube.material.color.setHex(0xFFF);
        break;  
      case MaterialEnum.HEAD:
        this.cube.material.color.setHex(0x66946B);
        break;
      case MaterialEnum.FOOD:
        this.cube.material.color.setHex(0xFF0000);
        break;
      case MaterialEnum.DIGESTION:
        this.cube.material.color.setHex(0x02056E);
        break;
      default:
        break;
    }
  }
  
}