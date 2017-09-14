var katzDeliLine = [];

function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(`${customerName}`);
  return(`Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    while (katzDeliLine.length > 0) {
      let i = katzDeliLine[i];
      i--;
      }
    }
    
    return `Currently serving ${katzDeliLine[i]}`
  }
