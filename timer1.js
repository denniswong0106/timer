const timer = () => {
  timesArr = process.argv.slice(2).sort((a, b) => a - b);
  for (const e of timesArr) {
    if (Number(e) < 0) {
      console.log('Please put Valid Number!')
      break;
    }
    if ((Number(e) % 1) === 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
        console.log("WAKE UP!!!!! WAKE UP!!!!! WAKE UP!!!!")
      }, Number(e) * 1000)
    } else  {
      console.log("return a number!")
    }
  }
}

timer();