const printToDom = (divId, toPrint) => {
  document.getElementById(divId).innerHTML = toPrint;
};

export default { printToDom };
