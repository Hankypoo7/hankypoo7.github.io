document.addEventListener('DOMContentLoaded', function() {
  const terminalOutput = document.getElementById('terminal-output');
  const commandInput = document.getElementById('command-input');
  const commandForm = document.getElementById('command-form');

  commandForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const command = commandInput.value.trim();
    executeCommand(command);

    commandInput.value = ''; // Clear the command input after execution
  });

  const availableCommands = [
    {
      command: 'ls',
      description: 'List files and directories',
    },
    {
      command: 'cd [directory]',
      description: 'Change directory',
    },
    {
      command: 'mkdir [directory]',
      description: 'Create a new directory',
    },
    {
      command: 'touch [file]',
      description: 'Create a new file',
    },
    {
      command: 'rm [file]',
      description: 'Delete a file',
    },
    {
      command: 'pwd',
      description: 'Show current directory',
    },
    {
      command: 'echo [message]',
      description: 'Display a message',
    },
    {
      command: 'cat [file]',
      description: 'Display file content',
    },
    {
      command: 'echo-date',
      description: 'Show current date',
    },
    {
      command: 'help',
      description: 'Show available commands',
    },
    {
      command: 'ip',
      description: 'Show public IP address',
    },
    {
      command: 'clear',
      description: 'Clear the terminal',
    },
    {
      command: 'sudo [command]',
      description: 'Run a command with administrative privileges',
    },
    {
      command: 'top',
      description: 'Display system resource usage',
    },
    {
      command: 'exit',
      description: 'Terminate the terminal',
    },
    {
      command: 'sl',
      description: 'Not available',
    },
    {
      command: 'cowsay [message]',
      description: 'Display a cow saying a message',
    },
    {
      command: 'calc [expression]',
      description: 'Evaluate a mathematical expression',
    },
    {
      command: 'time',
      description: 'Display current time',
    },
    
    {
      command: 'download [url] [filename]',
      description: 'Download a file from a URL',
    },
    
    
    
    //ADD MORE COMMANDS AND THEIR DESCRIPTIONS
    //ADD MORE COMMANDS AND THEIR DESCRIPTIONS
    //ADD MORE COMMANDS AND THEIR DESCRIPTIONS
    //ADD MORE COMMANDS AND THEIR DESCRIPTIONS
    //ADD MORE COMMANDS AND THEIR DESCRIPTIONS
    //ADD MORE COMMANDS AND THEIR DESCRIPTIONS
    //ADD MORE COMMANDS AND THEIR DESCRIPTIONS
    //ADD MORE COMMANDS AND THEIR DESCRIPTIONS
    //ADD MORE COMMANDS AND THEIR DESCRIPTIONS
    //ADD MORE COMMANDS AND THEIR DESCRIPTIONS
    
    
    
  ];

  function getFileContent(file) {
    // Implement logic to read and return the content of the file
    // Replace with your own implementation
    return 'File content of ' + file;
  }

  function displayCommandOutput(output) {
    const outputElement = document.createElement('p');
    outputElement.classList.add('command-output');
    outputElement.textContent = output;
    terminalOutput.appendChild(outputElement);
  }

  function displayHelp() {
    const helpOutput = document.createElement('p');
    helpOutput.classList.add('command-output');
    helpOutput.innerHTML = '<strong>Available commands:</strong><br>';
    availableCommands.forEach(function(cmd) {
      helpOutput.innerHTML += `<strong>${cmd.command}</strong>: ${cmd.description}<br>`;
    });
    terminalOutput.appendChild(helpOutput);
  }

  function executeCommand(command) {
    const args = command.split(' ');

    switch (args[0]) {
      case 'ls':
        displayCommandOutput('File1.txt  File2.txt  Directory1');
        break;

      case 'cd':
        if (args.length > 1) {
          // Implementation for 'cd' command
          const directory = args[1];
          displayCommandOutput(`Changed directory to ${directory}`);
        } else {
          displayCommandOutput('Missing directory argument');
        }
        break;

      case 'mkdir':
        if ( args.length > 1) {
          // Implementation for 'mkdir' command
          const directory = args[1];
          displayCommandOutput(`Created directory: ${directory}`);
        } else {
          displayCommandOutput('Missing directory name');
        }
        break;
        case 'touch':
        if (args.length > 1) {
          // Implementation for 'touch' command
          const file = args[1];
          displayCommandOutput(`Created file: ${file}`);
        } else {
          displayCommandOutput('Missing file name');
        }
        break;

      case 'rm':
        if (args.length > 1) {
          // Implementation for 'rm' command
          const file = args[1];
          displayCommandOutput(`Deleted file: ${file}`);
        } else {
          displayCommandOutput('Missing file name');
        }
        break;

      case 'pwd':
        displayCommandOutput('/home/user'); // Replace with the actual current directory
        break;

      case 'echo':
        if (args.length > 1) {
          const message = args.slice(1).join(' ');
          displayCommandOutput(message);
        } else {
          displayCommandOutput('Missing message');
        }
        break;

      case 'cat':
        if (args.length > 1) {
          const fileToRead = args[1];
          // Implement logic to read and display the content of the file
          const fileContent = getFileContent(fileToRead); // Replace with the actual file reading logic
          displayCommandOutput(fileContent);
        } else {
          displayCommandOutput('Missing file name');
        }
        break;

      case 'echo-date':
        const currentDate = new Date().toLocaleDateString();
        displayCommandOutput(currentDate);
        break;

      case 'help':
        displayHelp();
        break;

      case 'ip':
        fetch('https://api.ipify.org?format=json')
          .then(response => response.json())
          .then(data => {
            const ipOutput = `Your IP address is: ${data.ip}`;
            displayCommandOutput(ipOutput);
          })
          .catch(error => {
            displayCommandOutput('Failed to retrieve IP address');
          });
        break;

      case 'clear':
        clearTerminal();
        break;

      case 'sudo':
        if (args.length > 1) {
          const sudoCommand = args.slice(1).join(' ');
          displayCommandOutput(`Running command '${sudoCommand}' with administrative privileges`);
        } else {
          displayCommandOutput('Missing command after sudo');
        }
        break;

      case 'top':
        displayCommandOutput('System resource usage:');
        // Implement logic to display system resource usage
        break;

      case 'exit':
        // Terminate the terminal
        break;

      case 'sl':
        displayCommandOutput('Command not available');
        break;

      case 'cowsay':
        if (args.length > 1) {
          const message = args.slice(1).join(' ');
          const cowSaid = `  ${'\\'.repeat(message.length + 2)}\n< ${message} >\n  ${'/'.repeat(message.length + 2)}`;
          const cowOutput = `<pre>${cowSaid}</pre>`;
          displayCommandOutput(cowOutput);
        } else {
          displayCommandOutput('Missing message');
        }
        break;
        case 'calc':
        if (args.length > 1) {
          const expression = args.slice(1).join(' ');
          try {
            const result = eval(expression);
            displayCommandOutput(`Result: ${result}`);
          } catch (error) {            displayCommandOutput('Invalid expression');
          }
        } else {
          displayCommandOutput('Missing expression');
        }
        break;

      case 'time':
        const currentTime = new Date().toLocaleTimeString();
        displayCommandOutput(currentTime);
        break;

      default:
        displayCommandOutput(`Command not found: ${args[0]}`);
        break;
        
        //ADD MORE COMMANDS
        //ADD MORE COMMANDS
        //ADD MORE COMMANDS
        //ADD MORE COMMANDS
        //ADD MORE COMMANDS
        //ADD MORE COMMANDS
        //ADD MORE COMMANDS
        //ADD MORE COMMANDS
        //ADD MORE COMMANDS
        //ADD MORE COMMANDS

        
        
        
 case 'download':
        if (args.length > 2) {
          const url = args[1];
          const filename = args[2];
          downloadFile(url, filename);
        } else {
          displayCommandOutput('Missing URL or filename');
        }
        break;

      default:
        displayCommandOutput(`Command not found: ${args[0]}`);
        break;
    }
  }

  function downloadFile(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';
    link.click();
    displayCommandOutput(`Downloading file: ${filename}`);
  }

  function clearTerminal() {
    terminalOutput.innerHTML = '';
  }
});


            
