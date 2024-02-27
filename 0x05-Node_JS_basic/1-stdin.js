// Write a welcome message to the standard output (console)
process.stdout.write("Welcome to Holberton School, what is your name?\n");

// Listen for the 'readable' event on the standard input (console input)
// This event is emitted when there's data available to read
process.stdin.on("readable", () => {
    // Read data from the standard input
    const chunk = process.stdin.read();

    // If data was read (i.e., the user entered something), then...
    if (chunk) {
        // Write the user's input back to the standard output
        process.stdout.write(`Your name is: ${chunk}`);
    }
});

// Listen for the 'end' event on the standard input
// This event is emitted when there's no more data to read (i.e., the user has pressed Ctrl+D)
process.stdin.on("end", () => {
    // Write a closing message to the standard output
    process.stdout.write("This important software is now closing\n");
});