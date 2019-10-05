import utilities from '../../helpers/utilities';
import sleepData from '../../helpers/data/sleepData';
import './sleep.scss';

let myProgress = 100;

const sleep = sleepData.getSleepData();

const progressBar = (progress) => {
  const progressString = `
      <div class="sleepMeter">
      <span style="width: ${progress}%" id="bar"></span>
      <div class="progressPercentage">${progress}%</div>
      </div>
      </div>
      `;
  utilities.printToDom('energy', progressString);
};

const progressInt = () => {
  progressBar(myProgress);
  setInterval(() => {
    progressBar(myProgress);
    myProgress -= 1;
  }, 15000);
};

const getSleep = (e) => {
  const type = e.target.parentNode.id;
  const typeParent = e.target.parentNode.parentNode.id;
  for (let j = 0; j < sleep.length; j += 1) {
    if (type.includes(sleep[j].type) || typeParent.includes(sleep[j].type)) {
      myProgress += sleep[j].score;
    }
    if (myProgress > 100) {
      myProgress = 100;
    } else if (myProgress < 0) {
      myProgress = 0;
    }
  }
  progressBar(myProgress);
};

const iconStringBuild = () => {
  let stringToPrint = '<div id="sleepIcons">';
  for (let i = 0; i < sleep.length; i += 1) {
    stringToPrint += `<button type="button" id="${sleep[i].type}" class="sleepButton">${sleep[i].img}</button>`;
  }
  stringToPrint += `
    </div>
    <div id="energy">
    `;
  utilities.printToDom('sleep', stringToPrint);

  for (let i = 0; i < sleep.length; i += 1) {
    document.getElementById(sleep[i].type).addEventListener('click', getSleep);
  }
};

const getSleepProgress = () => myProgress;

const sleepOptions = () => {
  iconStringBuild();
  progressInt();
};

export default { sleepOptions, getSleepProgress };