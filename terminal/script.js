document.addEventListener("DOMContentLoaded", function() {
  const e = document.getElementById("terminal-output");
  const t = document.getElementById("command-input");
  const n = document.getElementById("command-form");

  n.addEventListener("submit", function(n) {
    n.preventDefault();
    executeCommand(t.value.trim());
    t.value = "";
  });

  const o = [
    { command: "ls", description: "List files and directories" },
    { command: "cd [directory]", description: "Change directory" },
    { command: "mkdir [directory]", description: "Create a new directory" },
    { command: "touch [file]", description: "Create a new file" },
    { command: "rm [file]", description: "Delete a file" },
    { command: "pwd", description: "Show current directory" },
    { command: "echo [message]", description: "Display a message" },
    { command: "cat [file]", description: "Display file content" },
    { command: "echo -date", description: "Show current date" },
    { command: "help", description: "Show available commands" },
    { command: "ip", description: "Show public IP address" },
    { command: "clear", description: "Clear the terminal" },
    { command: "sudo [command]", description: "Run a command with administrative privileges" },
    { command: "top", description: "Display system resource usage" },
    { command: "exit", description: "Terminate the terminal" },
    { command: "sl", description: "Not available" },
    { command: "cowsay [message]", description: "Display a cow saying a message" },
    { command: "calc [expression]", description: "Evaluate a mathematical expression" },
    { command: "time", description: "Display current time" },
    { command: "download [url] [filename]", description: "Download a file from a URL" }
  ];

  function getFileInfo(file) {
    return "File content of " + file;
  }

  function displayOutput(output) {
    const p = document.createElement("p");
    p.classList.add("command-output");
    p.textContent = output;
    e.appendChild(p);
    e.scrollTop = e.scrollHeight;
  }

  function executeCommand(command) {
    const args = command.split(" ");
    const cmd = args[0];
    switch (cmd) {
      case "ls":
        displayOutput("File1.txt File2.txt Directory1");
        break;
      case "cd":
        if (args.length > 1) {
          const directory = args[1];
          displayOutput("Changed directory to " + directory);
        } else {
          displayOutput("Missing directory name");
        }
        break;
      case "mkdir":
        if (args.length > 1) {
          const directory = args[1];
          displayOutput("Created directory: " + directory);
        } else {
          displayOutput("Missing directory name");
        }
        break;
      case "touch":
        if (args.length > 1) {
          const file = args[1];
          displayOutput("Created file: " + file);
        } else {
          displayOutput("Missing file name");
        }
        break;
      case "rm":
        if (args.length > 1) {
          const file = args[1];
          displayOutput("Deleted file: " + file);
        } else {
          displayOutput("Missing file name");
        }
        break;
      case "pwd":
        displayOutput("/home/user");
        break;
                  case "echo":
        if (args.length > 1) {
          const message = args.slice(1).join(" ");
          displayOutput(message);
        } else {
          displayOutput("Missing message");
        }
        break;
      case "cat":
        if (args.length > 1) {
          const file = args[1];
          displayOutput(getFileInfo(file));
        } else {
          displayOutput("Missing file name");
        }
        break;
      case "echo -date":
        displayOutput(new Date().toLocaleDateString());
        break;
      case "help":
        displayOutput(formatHelpText());
        break;
      case "ip":
        fetch("https://api.ipify.org?format=json")
          .then((response) => response.json())
          .then((data) => {
            displayOutput("Your IP address is: " + data.ip);
          })
          .catch((error) => {
            displayOutput("Failed to retrieve IP address");
          });
        break;
      case "clear":
        clearTerminal();
        break;
      case "sudo":
        if (args.length > 1) {
          const command = args.slice(1).join(" ");
          displayOutput("Running command '" + command + "' with administrative privileges");
        } else {
          displayOutput("Missing command after sudo");
        }
        break;
      case "top":
        displayOutput("System resource usage:");
        break;
      case "exit":
        break;
      case "sl":
        displayOutput("Command not available");
        break;
      case "cowsay":
        if (args.length > 1) {
          const message = args.slice(1).join(" ");
          const cowSaid = "+" + "+".repeat(message.length + 2) + "\n < " + message + " > \n " + "+".repeat(message.length + 2);
          displayOutput("<pre>" + cowSaid + "</pre>");
        } else {
          displayOutput("Missing message");
        }
        break;
      case "calc":
        if (args.length > 1) {
          const expression = args.slice(1).join(" ");
          let result;
          try {
            result = eval(expression);
            displayOutput("Result: " + result);
          } catch (error) {
            displayOutput("Invalid expression");
          }
        } else {
          displayOutput("Missing expression");
        }
        break;
      case "time":
        displayOutput(new Date().toLocaleTimeString());
        break;
      case "download":
        if (args.length > 2) {
          const url = args[1];
          const filename = args[2];
          downloadFile(url, filename);
        } else {
          displayOutput("Missing URL or filename");
        }
        break;
      default:
        displayOutput("Command not found: " + cmd);
    }
  }

  function formatHelpText() {
    let helpText = "Available commands:\n";
    o.forEach((item) => {
      helpText += item.command + " - " + item.description + "\n";
    });
    return helpText;
  }

  function clearTerminal() {
    e.innerHTML = "";
  }

  function downloadFile(url, filename) {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.target = "_blank";
    link.click();
    displayOutput("Downloading file: " + filename);
  }
});
