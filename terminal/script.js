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
        {
            command: "ls",
            description: "List files and directories"
        },
        {
            command: "cd [directory]",
            description: "Change directory"
        },
        {
            command: "mkdir [directory]",
            description: "Create a new directory"
        },
        {
            command: "touch [file]",
            description: "Create a new file"
        },
        {
            command: "rm [file]",
            description: "Delete a file"
        },
        {
            command: "pwd",
            description: "Show current directory"
        },
        {
            command: "echo [message]",
            description: "Display a message"
        },
        {
            command: "cat [file]",
            description: "Display file content"
        },
        {
            command: "echo -date",
            description: "Show current date"
        },
        {
            command: "help",
            description: "Show available commands"
        },
        {
            command: "ip",
            description: "Show public IP address"
        },
        {
            command: "clear",
            description: "Clear the terminal"
        },
        {
            command: "sudo [command]",
            description: "Run a command with administrative privileges"
        },
        {
            command: "top",
            description: "Display system resource usage"
        },
        {
            command: "exit",
            description: "Terminate the terminal"
        },
        {
            command: "sl",
            description: "Not available"
        },
        {
            command: "cowsay [message]",
            description: "Display a cow saying a message"
        },
        {
            command: "calc [expression]",
            description: "Evaluate a mathematical expression"
        },
        {
            command: "time",
            description: "Display current time"
        },
        {
            command: "download [url] [filename]",
            description: "Download a file from a URL"
        }
    ];

    function r(e) {
        return "File content of " + e;
    }

    function c(e) {
    const t = document.createElement("p");
    t.classList.add("command-output");
    t.textContent = e;
    e.appendChild(t);
    e.scrollTop = e.scrollHeight;
}


    function a(e) {
        const t = e.split(" ");
        switch (t[0]) {
            case "ls":
                c("File1.txt File2.txt Directory1 ");
                break;
            case "cd":
                if (t.length > 1) {
                    e = t[1];
                    c("Changed directory to " + e);
                } else {
                    c("Missing directory name ");
                }
                break;
            case "mkdir":
                if (t.length > 1) {
                    e = t[1];
                    c("Created directory: " + e);
                } else {
                    c("Missing directory name ");
                }
                break;
            case "touch":
                if (t.length > 1) {
                    e = t[1];
                    c("Created file: " + e);
                } else {
                    c("Missing file name ");
                }
                break;
            case "rm":
                if(t.length > 1) {
e = t[1];
c("Deleted file: " + e);
} else {
c("Missing file name ");
}
break;
case "pwd":
c("/home/user");
break;
case "echo":
if (t.length > 1) {
e = t.slice(1).join(" ");
c(e);
} else {
c("Missing message ");
}
break;
case "cat":
if (t.length > 1) {
e = t[1];
c(r(e));
} else {
c("Missing file name ");
}
break;
case "echo -date":
c(new Date().toLocaleDateString());
break;
case "help":
c();
break;
case "ip":
fetch("https://api.ipify.org?format=json")
.then((e) => e.json())
.then((e) => {
c("Your IP address is: " + e.ip);
})
.catch((e) => {
c("Failed to retrieve IP address ");
});
break;
case "clear":
s();
break;
case "sudo":
if (t.length > 1) {
e = t.slice(1).join(" ");
c("Running command '" + e + "' with administrative privileges ");
} else {
c("Missing command after sudo ");
}
break;
case "top":
c("System resource usage: ");
break;
case "exit":
break;
case "sl":
c("Command not available ");
break;
case "cowsay":
if (t.length > 1) {
e = t.slice(1).join(" ");
n = "+".repeat(e.length + 2) + "\n < " + e + " > \n " + "+".repeat(e.length + 2);
c("<pre>" + n + "</pre>");
} else {
c("Missing message ");
}
break;
case "calc":
if (t.length > 1) {
e = t.slice(1).join(" ");
let r = void 0;
try {
r = eval(e);
c("Result: " + r);
} catch (e) {
c("Invalid expression ");
}
} else {
c("Missing expression ");
}
break;
case "time":
c(new Date().toLocaleTimeString());
break;
case "download":
if (t.length > 2) {
e = t[1];
n = t[2];
(function (e, t, n) {
const o = document.createElement("a");
o.href = e;
o.download = t;
o.target = "_blank";
o.click();
c("Downloading file: " + n);
})(e, n, o);
} else {
c("Missing URL or filename ");
}
break;
default:
c("Command not found: " + t[0]);
}

function s() {
e.innerHTML = "";
}
});
