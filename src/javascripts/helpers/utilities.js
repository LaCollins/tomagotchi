const printToDom = (divId, toPrint) => {
  document.getElementById(divId).innerHTML = toPrint;
};

const changeColor = (prog, divId) => {
  if (prog < 26) {
    document.getElementById(divId).className += ' dangerMeter';
  } else {
    document.getElementById(divId).classList.remove('dangerMeter');
  }
};

export default { printToDom, changeColor };
