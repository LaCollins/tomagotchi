import utilities from '../../helpers/utilities';
import fightData from '../../helpers/data/fightData';
import './fight.scss';

let myProgress = 100;

const fight = fightData.getFightData();

const progressBar = (progress) => {
  const progressString = `
      <div class="fightMeter">
      <span style="width: ${progress}%" id="bar"></span>
      <div class="progressPercentage">${progress}% Strength</div>
      </div>
      </div>
      `;
  utilities.printToDom('strength', progressString);
};

const progressInt = () => {
  progressBar(myProgress);
  setInterval(() => {
    progressBar(myProgress);
    myProgress -= 1;
  }, 15000);
};

const getFight = (e) => {
  const type = e.target.parentNode.id;
  const typeParent = e.target.parentNode.parentNode.id;
  for (let j = 0; j < fight.length; j += 1) {
    if (type.includes(fight[j].type) || typeParent.includes(fight[j].type)) {
      myProgress += fight[j].score;
    }
    if (myProgress > 100) {
      myProgress = 100;
    } else if (myProgress < 0) {
      myProgress = 0;
      clearInterval(progressInt);
    }
  }
  progressBar(myProgress);
};

const iconStringBuild = () => {
  let stringToPrint = '<div id="fightIcons">';
  for (let i = 0; i < fight.length; i += 1) {
    stringToPrint += `<button type="button" id="${fight[i].type}" class="fightButton">${fight[i].img}</button>`;
  }
  stringToPrint += `
    </div>
    <div id="strength">
    `;
  utilities.printToDom('fight', stringToPrint);

  for (let i = 0; i < fight.length; i += 1) {
    document.getElementById(fight[i].type).addEventListener('click', getFight);
  }
};

const getFightProgress = () => myProgress;

const fightOptions = () => {
  iconStringBuild();
  progressInt();
};

export default { fightOptions, getFightProgress };
