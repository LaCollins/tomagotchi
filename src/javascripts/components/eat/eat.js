import utilities from '../../helpers/utilities';
import eatData from '../../helpers/data/eatData';
import './eat.scss';

let myProgress = 100;

const food = eatData.getEatData();

const progressBar = (progress) => {
  const progressString = `
      <div class="fullMeter" id="eatMeter">
      <span style="width: ${progress}%" id="bar"></span>
      <div class="progressPercentage">${progress}% Full</div>
      </div>
      <div id="eatTitle">EAT</div>
      </div>
      `;
  utilities.printToDom('full', progressString);
};

const progressInt = () => {
  progressBar(myProgress);
  setInterval(() => {
    progressBar(myProgress);
    if (myProgress < 1) {
      myProgress = 0;
      utilities.changeColor(myProgress, 'eatMeter');
    } else {
      myProgress -= 1;
      utilities.changeColor(myProgress, 'eatMeter');
    }
  }, 15000);
};

const getFood = (e) => {
  const type = e.target.parentNode.id;
  const typeParent = e.target.parentNode.parentNode.id;
  for (let j = 0; j < food.length; j += 1) {
    if (type.includes(food[j].type) || typeParent.includes(food[j].type)) {
      myProgress += food[j].score;
    }
    if (myProgress > 100) {
      myProgress = 100;
    } else if (myProgress < 1) {
      myProgress = 0;
    }
  }
  progressBar(myProgress);
  utilities.changeColor(myProgress, 'eatMeter');
};

const iconStringBuild = () => {
  let stringToPrint = '<div id="foodIcons">';
  for (let i = 0; i < food.length; i += 1) {
    stringToPrint += `<button type="button" id="${food[i].type}" class="foodButton">${food[i].img}</button>`;
  }
  stringToPrint += `
    </div>
    <div id="full">
    `;
  utilities.printToDom('eat', stringToPrint);

  for (let i = 0; i < food.length; i += 1) {
    document.getElementById(food[i].type).addEventListener('click', getFood);
  }
};

const getFullProgress = () => myProgress;

const eatOptions = () => {
  iconStringBuild();
  progressInt();
};

export default { eatOptions, getFullProgress };
