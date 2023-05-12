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
      // Implement logic to display a list of files and directories
      const output = document.createElement('p');
      output.classList.add('command-output');
      output.textContent = 'File1.txt  File2.txt  Directory1';
      terminalOutput.appendChild(output);
      break;

    case 'cd':
      // Implement logic to change the current directory
      const output = document.createElement('p');
      output.classList.add('command-output');
      output.textContent = 'Changed directory to ' + args[1];
      terminalOutput.appendChild(output);
      break;

    case 'mkdir':
      // Implement logic to create a new directory
      const output = document.createElement('p');
      output.classList.add('command-output');
      output.textContent = 'Created directory: ' + args[1];
      terminalOutput.appendChild(output);
      break;

    case 'touch':
      // Implement logic to create a new file
      const output = document.createElement('p');
      output.classList.add('command-output');
      output.textContent = 'Created file: ' + args[1];
      terminalOutput.appendChild(output);
      break;

    case 'rm':
      // Implement logic to delete a file
      const output = document.createElement('p');
      output.classList.add('command-output');
      output.textContent = 'Deleted file: ' + args[1];
      terminalOutput.appendChild(output);
      break;

    case 'pwd':
      const output = document.createElement('p');
      output.classList.add('command-output');
      output.textContent = '/home/user'; // Replace with the actual current directory
      terminalOutput.appendChild(output);
      break;

    case 'echo':
      const message = args.slice(1).join(' ');
      const output = document.createElement('p');
      output.classList.add('command-output');
      output.textContent = message;
      terminalOutput.appendChild(output);
      break;

    case 'cat':
      const fileToRead = args[1];
      // Implement logic to read and display the content of the file
      const fileContent = getFileContent(fileToRead); // Replace with the actual file reading logic
      const output = document.createElement('p');
      output.classList.add('command-output');
      output.textContent = fileContent;
      terminalOutput.appendChild(output);
      break;

    case 'echo-date':
      const currentDate = new Date().toLocaleDateString();
      const output = document.createElement('p');
      output.classList.add('command-output');
      output.textContent = currentDate;
      terminalOutput.appendChild(output);
      break;

    case 'help':
      if (args.length === 1) {
        const helpOutput = document.createElement('p');
        helpOutput.classList.add('command-output');
        helpOutput.innerHTML = '<strong>Available commands:</strong><br>' + availableCommands.join('<br>');
        terminalOutput.appendChild(helpOutput);
      } else {
        const output = document.createElement('p');
        output.classList.add('command-output');
        output.textContent = 'Help command usage: help';
        terminalOutput.appendChild(output);
      }
      break;

    default:
      const
