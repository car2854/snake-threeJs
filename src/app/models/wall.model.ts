import { MaterialEnum } from "../enum/material.enum";
import { SquareModel } from "./square.model";

export class WallModel{

  public wall : SquareModel[] = [];

  constructor(){

    for (let i = 0; i < 15; i++) {
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: 15,
          y: i
        }
      }));
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: 15,
          y: i * -1
        }
      }));
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: i,
          y: 15
        }
      }));
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: i * -1,
          y: 15
        }
      }));
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: -15,
          y: i
        }
      }));
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: -15,
          y: i * -1
        }
      }));
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: i,
          y: -15
        }
      }));
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: i * -1,
          y: -15
        }
      }));

      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: 15,
          y: 15
        }
      }));
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: -15,
          y: 15
        }
      }));
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: 15,
          y: -15
        }
      }));
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: -15,
          y: -15
        }
      }));
    }

  }

  public getWall = () => this.wall;

}