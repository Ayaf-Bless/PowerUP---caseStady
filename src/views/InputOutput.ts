import * as fs from "fs";

export class InputOutput {
  static readInput(filePath: string): string[] {
    const input = fs.readFileSync(filePath, "utf-8");
    return input.trim().split("\n");
  }

  static writeOutput(filePath: string, outputData: string[]): void {
    fs.writeFileSync(filePath, outputData.join("\n"), "utf-8");
    console.log("Output successfully written to", filePath);
  }
}
