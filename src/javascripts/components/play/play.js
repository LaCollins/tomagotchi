import utilities from '../../helpers/utilities';
import playData from '../../helpers/data/playData';
import './play.scss';

let myProgress = 50;

const play = playData.getPlayData();

const progressBar = (progress) => {
  const progressString = `
      <div class="funMeter" id="playmeter">
      <span style="width: ${progress}%" id="bar"></span>
      <div class="progressPercentage">${progress}% Fun</div>
      </div>
      <div id="playTitle">PLAY</div>
      </div>
      `;
  utilities.printToDom('fun', progressString);
};

const progressInt = () => {
  progressBar(myProgress);
  setInterval(() => {
    progressBar(myProgress);
    if (myProgress < 1) {
      myProgress = 0;
      utilities.changeColor(myProgress, 'playMeter');
    } else {
      myProgress -= 1;
      utilities.changeColor(myProgress, 'playMeter');
    }
  }, 15000);
};

const getPlay = (e) => {
  const type = e.target.parentNode.id;
  const typeParent = e.target.parentNode.parentNode.id;
  for (let j = 0; j < play.length; j += 1) {
    if (type.includes(play[j].type) || typeParent.includes(play[j].type)) {
      myProgress += play[j].score;
    }
    if (myProgress > 100) {
      myProgress = 100;
      progressInt();
    } else if (myProgress < 1) {
      myProgress = 0;
    }
  }
  progressBar(myProgress);
  utilities.changeColor(myProgress, 'playMeter');
};

const iconStringBuild = () => {
  let stringToPrint = '<div id="playIcons">';
  for (let i = 0; i < play.length; i += 1) {
    stringToPrint += `<button type="button" id="${play[i].type}" class="playButton">${play[i].img}</button>`;
  }
  stringToPrint += `
    </div>
    <div id="fun">
    `;
  utilities.printToDom('play', stringToPrint);

  for (let i = 0; i < play.length; i += 1) {
    document.getElementById(play[i].type).addEventListener('click', getPlay);
  }
};

const getPlayProgress = () => myProgress;

const playOptions = () => {
  iconStringBuild();
  progressInt();
};

export default { playOptions, getPlayProgress };
