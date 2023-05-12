

const availableCommands = [
  'ls - List files and directories',
  'cd [directory] - Change directory',
  'mkdir [directory] - Create a new directory',
  'touch [file] - Create a new file',
  'rm [file] - Delete a file',
  'help - Show available commands',
  // Add more commands here
];

function executeCommand(command) {
  const args = command.split(' ');

  switch (args[0]) {
    case 'ls':
      const output = document.createElement('p');
      output.classList.add('command-output');
      output.textContent = 'File1.txt  File2.txt  Directory1';
      terminalOutput.appendChild(output);
      break;

    case 'cd':
      const directory = args[1];
      const output = document.createElement('p');
      output.classList.add('command-output');
      output.textContent = 'Changed directory to ' + directory;
      terminalOutput.appendChild(output);
      break;

    case 'mkdir':
      const newDirectory = args[1];
      const output = document.createElement('p');
      output.classList.add('command-output');
      output.textContent = 'Created directory ' + newDirectory;
      terminalOutput.appendChild(output);
      break;

    case 'touch':
      const newFile = args[1];
      const output = document.createElement('p');
      output.classList.add('command-output');
      output.textContent = 'Created file ' + newFile;
      terminalOutput.appendChild(output);
      break;

    case 'rm':
      const fileToDelete = args[1];
      const output = document.createElement('p');
      output.classList.add('command-output');
      output.textContent = 'Deleted file ' + fileToDelete;
      terminalOutput.appendChild(output);
      break;

   case 'help':
  const helpOutput = document.createElement('p');
  helpOutput.classList.add('command-output');
  helpOutput.innerHTML = '<strong>Available commands:</strong><br>' + availableCommands.join('<br>');
  terminalOutput.appendChild(helpOutput);
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
  // Implement the logic to read and display the content of the file
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
      
      
    // Add more commands here

    default:
      const unknownOutput = document.createElement('p');
      unknownOutput.classList.add('command-output');
      unknownOutput.textContent = 'Unknown command: ' + args[0];
      terminalOutput.appendChild(unknownOutput);
      break;
  }
}

commandInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const command = commandInput.value;
    const output = document.createElement('p');
    output.classList.add('command-output');
    output.textContent = '$ ' + command;
    terminalOutput.appendChild(output);
