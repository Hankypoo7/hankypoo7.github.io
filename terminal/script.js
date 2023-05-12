const terminalOutput = document.getElementById('output-display');
const commandInput = document.getElementById('command-input');

function processCommand(command) {
  const output = document.createElement('p');
  output.textContent = '> ' + command;
  terminalOutput.appendChild(output);

  // Implement your command processing logic here
  // This is just a sample command processing
  if (command === 'hello') {
    const response = document.createElement('p');
    response.textContent = 'Hello, there!';
    terminalOutput.appendChild(response);
  } else if (command === 'date') {
    const currentDate = new Date().toLocaleDateString();
    const response = document.createElement('p');
    response.textContent = 'Today is ' + currentDate;
    terminalOutput.appendChild(response);
  } else {
    const response = document.createElement('p');
    response.textContent = 'Invalid command: ' + command;
    response.style.color = 'red';
    terminalOutput.appendChild(response);
  }
}

commandInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const command = commandInput.value;
    const output = document.createElement('p');
    output.textContent = '$ ' + command;
    terminalOutput.appendChild(output);
    processCommand(command);
    commandInput.value = '';
    event.preventDefault();
  }
});
