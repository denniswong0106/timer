const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  console.log(key);
  if (key === 'b') {
    process.stdout.write('\x07');
    console.log('BEEEP!!!!!');
  }
  if ((typeof Number(key) === 'number') &&
      (key >= 1 && key <= 9)) {
        console.log(`setting timer for ${key} seconds...`)
        setTimeout(() => {
          process.stdout.write('\x07');
          console.log("BEEEP!!! BEEEP!!! BEEEP!!!")
        }, Number(key) * 1000)
  }
  if (key === '\u0003') {
    process.exit();
  }
});