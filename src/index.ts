import { InputOutput } from "./views/InputOutput";
import { Plateau } from "./models/Plateau";
import { CommandProcessor } from "./controllers/CommandProcessor";

// Entry point for the program
const inputFilePath = "./input.txt";
const outputFilePath = "./output.txt";

// Read input from file
const lines = InputOutput.readInput(inputFilePath);

// Parse plateau size from first line
const [plateauX, plateauY] = lines[0].split(" ").map(Number);
const plateau = new Plateau(plateauX, plateauY);

// Create a new command processor
const commandProcessor = new CommandProcessor(plateau);

// Store output results
const results: string[] = [];

// Process each robot's input and commands
for (let i = 1; i < lines.length; i += 2) {
  const robotInput = lines[i]; // Robot's initial position
  const commands = lines[i + 1]; // Robot's movement commands
  const result = commandProcessor.processCommands(robotInput, commands);
  results.push(result);
}

// Write the output to a file
InputOutput.writeOutput(outputFilePath, results);
