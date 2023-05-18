// Import the necessary modules from xterm.js
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';

// Create a new instance of Terminal
const term = new Terminal();

// Create an instance of the FitAddon
const fitAddon = new FitAddon();

// Attach the FitAddon to the terminal
term.loadAddon(fitAddon);

// Attach the terminal to a DOM element
term.open(document.getElementById('terminal'));

// Fit the terminal to the size of the container
fitAddon.fit();

// Example: Write "Hello, World!" to the terminal
term.writeln('Hello, World!');

// Example: Handle user input and output
term.onKey(e => {
    term.write(e.key);
});
