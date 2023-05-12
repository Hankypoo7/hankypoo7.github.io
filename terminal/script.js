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
      const outputLs = document.createElement('p');
      outputLs.classList.add('command-output');
      outputLs.textContent = 'File1.txt  File2.txt  Directory1';
      terminalOutput.appendChild(outputLs);
      break;

    case 'cd':
      // Implement logic to change the current directory
      const outputCd = document.createElement('p');
      outputCd.classList.add('command-output');
      outputCd.textContent = 'Changed directory to ' + args[1];
      terminalOutput.appendChild(outputCd);
      break;

    case 'mkdir':
      // Implement logic to create a new directory
      const outputMkdir = document.createElement('p');
      outputMkdir.classList.add('command-output');
      outputMkdir.textContent = 'Created directory: ' + args[1];
      terminalOutput.appendChild(outputMkdir);
      break;

    case 'touch':
      // Implement logic to create a new file
      const outputTouch = document.createElement('p');
      outputTouch.classList.add('command-output');
      outputTouch.textContent = 'Created file: ' + args[1];
      terminalOutput.appendChild(outputTouch);
      break;

    case 'rm':
      // Implement logic to delete a file
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
