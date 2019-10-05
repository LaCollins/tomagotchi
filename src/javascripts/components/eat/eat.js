import utilities from '../../helpers/utilities';
import './eat.scss';

let myProgress = 100;

const progressBar = (progress) => {
  const progressString = `
      <div class="fullMeter">
      <span style="width: ${progress}%" id="bar"></span>
      <div class="progressPercentage">${progress}%</div>
      </div>
      </div>
      `;
  utilities.printToDom('full', progressString);
};

const progressInt = () => {
  progressBar(myProgress);
  setInterval(() => {
    progressBar(myProgress);
    myProgress -= 1;
  }, 15000);
};

const food = [
  { type: 'icecream', score: -3, img: '<i class="fas fa-ice-cream icon"></i>' },
  { type: 'carrot', score: 10, img: '<i class="fas fa-carrot icon"></i>' },
  { type: 'chicken', score: 5, img: '<i class="fas fa-drumstick-bite icon"></i>' },
];

const getFood = (e) => {
  const type = e.target.parentNode.id;
  const typeParent = e.target.parentNode.parentNode.id;
  for (let j = 0; j < food.length; j += 1) {
    if (type.includes(food[j].type) || typeParent.includes(food[j].type)) {
      myProgress += food[j].score;
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
