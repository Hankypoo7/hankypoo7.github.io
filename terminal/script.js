// JavaScript code for Terminal Emulator

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
    'ls - List files and directories',
    'cd [directory] - Change directory',
    'mkdir [directory] - Create a new directory',
    'touch [file] - Create a new file',
    'rm [file] - Delete a file',
    'pwd - Show current directory',
    'echo [message] - Display a message',
    'cat [file] - Display file content',
    'echo-date - Show current date',
    'help - Show available commands',
    // Add more commands here
  ];

  function executeCommand(command) {
    const args = command.split(' ');

    switch (args[0]) {
      case 'ls':
        const outputLs = document.createElement('p');
        outputLs.classList.add('command-output');
        outputLs.textContent = 'File1.txt  File2.txt  Directory1';
        terminalOutput.appendChild(outputLs);
        break;

      case 'cd':
        const outputCd = document.createElement('p');
        outputCd.classList.add('command-output');
        outputCd.textContent = 'Changed directory to ' + args[1];
        terminalOutput.appendChild(outputCd);
        break;

      case 'mkdir':
        const outputMkdir = document.createElement('p');
        outputMkdir.classList.add('command-output');
        outputMkdir.textContent = 'Created directory: ' + args[1];
        terminalOutput.appendChild(outputMkdir);
        break;

      case 'touch':
        const outputTouch = document.createElement('p');
        outputTouch.classList.add('command-output');
        outputTouch.textContent = 'Created file: ' + args[1];
        terminalOutput.appendChild(outputTouch);
        break;

      case 'rm':
        const outputRm = document.createElement('p');
        outputRm.classList.add('command-output');
        outputRm.textContent = 'Deleted file: ' + args[1];
        terminalOutput.appendChild(outputRm);
        break;

      case 'pwd':
        const outputPwd = document.createElement('p');
        outputPwd.classList.add('command-output');
        outputPwd.textContent = '/home/user'; // Replace with the actual current directory
        terminalOutput.appendChild(outputPwd);
        break;

      case 'echo':
        const message = args.slice(1).join(' ');
        const outputEcho = document.createElement('p');
        outputEcho.classList.add('command-output');
        outputEcho.textContent = message;
        terminalOutput.appendChild(outputEcho);
        break;

      case 'cat':
        const fileToRead = args[1];
        // Implement logic to read and display the content of the file
        const fileContent = getFileContent(fileToRead); // Replace with the actual file reading logic
        const outputCat = document.createElement('p');
        outputCat.classList.add('command-output');
        outputCat.textContent = fileContent;
        terminalOutput.appendChild(outputCat);
        break;

      case 'echo-date':
        const currentDate = new Date().toLocaleDateString();
        const outputEchoDate = document.createElement('p');
        outputEchoDate.classList.add('command-output');
        outputEchoDate.textContent = currentDate;
        terminalOutput.appendChild(outputEchoDate);
        break;

      case 'help':
                if (args.length === 1) {
          const helpOutput = document.createElement('p');
          helpOutput.classList.add('command-output');
          helpOutput.innerHTML = '<strong>Available commands:</strong><br>' + availableCommands.join('<br>');
          terminalOutput.appendChild(helpOutput);
        } else {
          const specificCommand = args[1];
          const matchingCommand = availableCommands.find(function(command) {
            return command.startsWith(specificCommand);
          });

          if (matchingCommand) {
            const helpOutput = document.createElement('p');
            helpOutput.classList.add('command-output');
            helpOutput.innerHTML = matchingCommand;
            terminalOutput.appendChild(helpOutput);
          } else {
            const helpOutput = document.createElement('p');
            helpOutput.classList.add('command-output');
            helpOutput.textContent = 'Command not found';
            terminalOutput.appendChild(helpOutput);
          }
        }
        break;

      default:
        const outputError = document.createElement('p');
        outputError.classList.add('command-output');
        outputError.textContent = 'Invalid command';
        terminalOutput.appendChild(outputError);
        break;
    }

    // Scroll to the bottom of the terminal output
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  function getFileContent(file) {
    // Implement logic to read and return the content of the file
    // Replace with your own implementation
    return 'File content of ' + file;
  }
});
