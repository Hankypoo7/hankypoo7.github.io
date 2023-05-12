const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');

function processCommand(command) {
  // Implement your command processing logic here
  // This is just a sample command processing
  const output = document.createElement('p');
  output.textContent = '> ' + command;
  terminalOutput.appendChild(output);
}

terminalInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const command = terminalInput.value;
    const output = document.createElement('p');
    output.textContent = '$ ' + command;
    terminalOutput.appendChild(output);
    processCommand(command);
    terminalInput.value = '';
    event.preventDefault();
  }
});
