import { MaterialEnum } from "../enum/material.enum";
import { globals } from "../globalsHola";
import { SquareModel } from "./square.model";

export class WallModel{

  public wall : SquareModel[] = [];

  constructor(){

    for (let i = 0; i < 15; i++) {
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: globals.width.max,
          y: i
        }
      }));
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: globals.width.max,
          y: i * -1
        }
      }));
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: i,
          y: globals.height.max
        }
      }));
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: i * -1,
          y: globals.height.max
        }
      }));
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: globals.width.min,
          y: i
        }
      }));
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: globals.width.min,
          y: i * -1
        }
      }));
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: i,
          y: globals.height.min
        }
      }));
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: i * -1,
          y: globals.height.min
        }
      }));

      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: globals.width.max,
          y: globals.height.max
        }
      }));
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: globals.width.min,
          y: globals.height.max
        }
      }));
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: globals.width.max,
          y: globals.height.min
        }
      }));
      this.wall.push(new SquareModel({
        material: MaterialEnum.WALL,
        position: {
          x: globals.width.min,
          y: globals.height.min
        }
      }));
    }

  }

  public getWall = () => this.wall;

}