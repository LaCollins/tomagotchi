import utilities from './helpers/utilities';

const food = [
  { type: 'ice cream', score: -3, img: '<i class="fas fa-ice-cream icon"></i>' },
  { type: 'carrot', score: 10, img: '<i class="fas fa-carrot icon"></i>' },
  { type: 'chicken', score: 5, img: '<i class="fas fa-drumstick-bite icon"></i>' },
];

const changeScore = (e) => {
  const type = e.target.id;
  console.log(type);
};


const eventListener = () => {
  const icons = document.getElementsByClassName('icon');
  for (let i = 0; i < icons.length; i += 1) {
    icons[i].addEventListener('click', changeScore);
  }
};

const stringBuild = (progress) => {
  let stringToPrint = '<div id="foodIcons">';
  for (let i = 0; i < food.length; i += 1) {
    stringToPrint += `<div id="${food.type}">${food[i].img}</div>`;
  }
  stringToPrint += '</div>';
  stringToPrint += `
    <div class="meter">
        <span style="width: ${progress}%"></span>
        <div class="progressPercentage">${progress}%</div>
        </div>`;
  utilities.printToDom('eat', stringToPrint);
  eventListener();
};

const eatOptions = () => {
  let myProgress = 100;
  stringBuild(myProgress);
  setInterval(() => {
    stringBuild(myProgress);
    myProgress -= 1;
  }, 10000);
};

export default { eatOptions };
