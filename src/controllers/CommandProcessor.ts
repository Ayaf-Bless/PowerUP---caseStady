import { Robot } from "../models/Robot";
import { Plateau } from "../models/Plateau";

export class CommandProcessor {
  private plateau: Plateau;
  private robots: Robot[] = [];

  constructor(plateau: Plateau) {
    this.plateau = plateau;
  }

  // Process the command string for each robot
  processCommands(robotInput: string, commandInput: string): string {
    const [x, y, direction] = robotInput.split(" ");

    const robot = new Robot(
      parseInt(x),
      parseInt(y),
      direction as "N" | "E" | "S" | "W",
      this.plateau
    );
    for (const command of commandInput) {
      robot.executeCommand(command as "L" | "R" | "M");
    }

    this.robots.push(robot);
    return robot.getPosition();
  }
}
