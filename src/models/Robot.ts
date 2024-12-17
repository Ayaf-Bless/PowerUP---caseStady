import { Plateau } from "./Plateau";

export class Robot {
  private x: number;
  private y: number;
  private direction: "N" | "E" | "S" | "W";
  private plateau: Plateau;

  // Directions array for rotating
  private directions: ("N" | "E" | "S" | "W")[] = ["N", "E", "S", "W"];

  constructor(
    x: number,
    y: number,
    direction: "N" | "E" | "S" | "W",
    plateau: Plateau
  ) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.plateau = plateau;
  }

  rotateLeft(): void {
    const currentIndex = this.directions.indexOf(this.direction);
    this.direction = this.directions[(currentIndex + 3) % 4]; // Rotate left
  }

  rotateRight(): void {
    const currentIndex = this.directions.indexOf(this.direction);
    this.direction = this.directions[(currentIndex + 1) % 4]; // Rotate right
  }

  move(): void {
    let newX = this.x;
    let newY = this.y;

    switch (this.direction) {
      case "N":
        newY += 1;
        break;
      case "E":
        newX += 1;
        break;
      case "S":
        newY -= 1;
        break;
      case "W":
        newX -= 1;
        break;
    }

    // Only move if the new position is within bounds
    if (this.plateau.isWithinBounds(newX, newY)) {
      this.x = newX;
      this.y = newY;
    }
  }

  executeCommand(command: "L" | "R" | "M"): void {
    if (command === "L") {
      this.rotateLeft();
    } else if (command === "R") {
      this.rotateRight();
    } else if (command === "M") {
      this.move();
    }
  }

  getPosition(): string {
    return `${this.x} ${this.y} ${this.direction}`;
  }
}
