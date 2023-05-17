const executeCd = (args) => {
  if (args.length > 0) {
    const directory = args[0];
    const terminalOutput = document.getElementById("terminal-output");
    const outputText = `Changed directory to: ${directory}`;
    const newLine = document.createElement("p");
    newLine.textContent = outputText;
    terminalOutput.appendChild(newLine);
  } else {
    const terminalOutput = document.getElementById("terminal-output");
    const errorMessage = "Missing directory name";
    const errorLine = document.createElement("p");
    errorLine.textContent = errorMessage;
    errorLine.classList.add("error");
    terminalOutput.appendChild(errorLine);
  }
};

const executeMkdir = (args) => {
  if (args.length > 0) {
    const directory = args[0];
    const terminalOutput = document.getElementById("terminal-output");
    const outputText = `Created directory: ${directory}`;
    const newLine = document.createElement("p");
    newLine.textContent = outputText;
    terminalOutput.appendChild(newLine);
  } else {
    const terminalOutput = document.getElementById("terminal-output");
    const errorMessage = "Missing directory name";
    const errorLine = document.createElement("p");
    errorLine.textContent = errorMessage;
    errorLine.classList.add("error");
    terminalOutput.appendChild(errorLine);
  }
};

const executeTouch = (args) => {
  if (args.length > 0) {
    const file = args[0];
    const terminalOutput = document.getElementById("terminal-output");
    const outputText = `Created file: ${file}`;
    const newLine = document.createElement("p");
    newLine.textContent = outputText;
    terminalOutput.appendChild(newLine);
  } else {
    const terminalOutput = document.getElementById("terminal-output");
    const errorMessage = "Missing file name";
    const errorLine = document.createElement("p");
    errorLine.textContent = errorMessage;
    errorLine.classList.add("error");
    terminalOutput.appendChild(errorLine);
  }
};

const executeRm = (args) => {
  if (args.length > 0) {
    const file = args[0];
    const terminalOutput = document.getElementById("terminal-output");
    const outputText = `Deleted file: ${file}`;
    const newLine = document.createElement("p");
    newLine.textContent = outputText;
    terminalOutput.appendChild(newLine);
  } else {
    const terminalOutput = document.getElementById("terminal-output");
    const errorMessage = "Missing file name";
    const errorLine = document.createElement("p");
    errorLine.textContent = errorMessage;
    errorLine.classList.add("error");
    terminalOutput.appendChild(errorLine);
  }
};

const executePwd = () => {
  const currentDirectory = "/path/to/current/directory";
  const terminalOutput = document.getElementById("terminal-output");
  const outputText = currentDirectory;
  const newLine = document.createElement("p");
  newLine.textContent = outputText;
  terminalOutput.appendChild(newLine);
};

const executeEcho = (args) => {
  if (args.length > 0) {
    const message = args.join(" ");
    const terminalOutput = document.getElementById("terminal-output");
    const outputText = message;
    const newLine = document.createElement("p");
    newLine.textContent = outputText;
    terminalOutput.appendChild(newLine);
  } else {
    const terminalOutput = document.getElementById("terminal-output");
    const errorMessage = "Missing message";
    const errorLine = document.createElement("p");
    errorLine.textContent = errorMessage;
    errorLine.classList.add("error");
    terminalOutput.appendChild(errorLine);
  }
};

const executeCat = (args) => {
  if (args.length > 0) {
    const file = args[0];
    const terminalOutput = document.getElementById("terminal-output");
    const outputText = `File content of ${file}`;
    const newLine = document.createElement("p");
    newLine.textContent = outputText;
    terminalOutput.appendChild(newLine);
  } else {
    const terminalOutput = document.getElementById("terminal-output");
    const errorMessage = "Missing file name";
    const errorLine = document.createElement("p");
    errorLine.textContent = errorMessage;
    errorLine.classList.add("error");
    terminalOutput.appendChild(errorLine);
  }
};

const executeEchoDate = () => {
  const currentDate = new Date().toLocaleDateString();
  const terminalOutput = document.getElementById("terminal-output");
  const outputText = currentDate;
  const newLine = document.createElement("p");
  newLine.textContent = outputText;
  terminalOutput.appendChild(newLine);
};

const executeHelp = () => {
  const helpText = "Help information goes here";
  const terminalOutput = document.getElementById("terminal-output");
  const outputText = helpText;
  const newLine = document.createElement("p");
  newLine.textContent = outputText;
  terminalOutput.appendChild(newLine);
};

const executeIp = () => {
  const ipAddress = "192.168.0.1";
  const terminalOutput = document.getElementById("terminal-output");
  const outputText = `Your IP address is: ${ipAddress}`;
  const newLine = document.createElement("p");
  newLine.textContent = outputText;
  terminalOutput.appendChild(newLine);
};

const executeSudo = (args) => {
  if (args.length > 0) {
    const command = args.join(" ");
    const terminalOutput = document.getElementById("terminal-output");
    const outputText = `Running command '${command}' with administrative privileges`;
    const newLine = document.createElement("p");
    newLine.textContent = outputText;
    terminalOutput.appendChild(newLine);
  } else {
    const terminalOutput = document.getElementById("terminal-output");
    const errorMessage = "Missing command after sudo";
    const errorLine = document.createElement("p");
    errorLine.textContent = errorMessage;
    errorLine.classList.add("error");
    terminalOutput.appendChild(errorLine);
  }
};

export default {
  cd: { execute: executeCd, description: 'Change directory' },
  mkdir: { execute: executeMkdir, description: 'Create a new directory' },
  touch: { execute: executeTouch, description: 'Create a new file' },
  rm: { execute: executeRm, description: 'Delete a file' },
  pwd: { execute: executePwd, description: 'Print the current directory' },
  echo: { execute: executeEcho, description: 'Print a message' },
  cat: { execute: executeCat, description: 'Display file content' },
  'echo-date': { execute: executeEchoDate, description: 'Print the current date' },
  help: { execute: executeHelp, description: 'Display help information' },
  ip: { execute: executeIp, description: 'Print the IP address' },
 
const executeLogout = () => {
  // Implement the logic to log out the user
};

const executeClear = () => {
  const terminalOutput = document.getElementById("terminal-output");
  terminalOutput.innerHTML = "";
};

const executeCommand = (command, args) => {
  switch (command) {
    case "cd":
      executeCd(args);
      break;
    case "mkdir":
      executeMkdir(args);
      break;
    case "touch":
      executeTouch(args);
      break;
    case "rm":
      executeRm(args);
      break;
    case "pwd":
      executePwd();
      break;
    case "echo":
      executeEcho(args);
      break;
    case "cat":
      executeCat(args);
      break;
    case "echo-date":
      executeEchoDate();
      break;
    case "help":
      executeHelp();
      break;
    case "ip":
      executeIp();
      break;
    case "sudo":
      executeSudo(args);
      break;
    case "logout":
      executeLogout();
      break;
    case "clear":
      executeClear();
      break;
    default:
      const terminalOutput = document.getElementById("terminal-output");
      const errorMessage = `Command not found: ${command}`;
      const errorLine = document.createElement("p");
      errorLine.textContent = errorMessage;
      errorLine.classList.add("error");
      terminalOutput.appendChild(errorLine);
      break;
  }
};

export default {
  cd: { execute: executeCd, description: 'Change directory' },
  mkdir: { execute: executeMkdir, description: 'Create a new directory' },
  touch: { execute: executeTouch, description: 'Create a new file' },
  rm: { execute: executeRm, description: 'Delete a file' },
  pwd: { execute: executePwd, description: 'Print the current directory' },
  echo: { execute: executeEcho, description: 'Print a message' },
  cat: { execute: executeCat, description: 'Display file content' },
  'echo-date': { execute: executeEchoDate, description: 'Print the current date' },
  help: { execute: executeHelp, description: 'Display help information' },
  ip: { execute: executeIp, description: 'Print the IP address' },
  sudo: { execute: executeSudo, description: 'Run a command with administrative privileges' },
  logout: { execute: executeLogout, description: 'Log out the user' },
  clear: { execute: executeClear, description: 'Clear the terminal output' },
  executeCommand: executeCommand,
};
