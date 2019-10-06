import eat from '../eat/eat';
import fight from '../fight/fight';
import play from '../play/play';
import sleep from '../sleep/sleep';
import utilities from '../../helpers/utilities';
import './progress.scss';

const printHearts = (happiness) => {
  const fullHeart = '<i class="fas fa-heart" id="fullHeart"></i>';
  const emptyHeart = '<i class="far fa-heart" id="emptyHeart></i>';

  const fullHappiness = fullHeart + fullHeart + fullHeart + fullHeart;
  const threeHearts = fullHeart + fullHeart + fullHeart + emptyHeart;
  const halfHeart = fullHeart + fullHeart + emptyHeart + emptyHeart;
  const oneHeart = fullHeart + emptyHeart + emptyHeart + emptyHeart;
  const dead = emptyHeart + emptyHeart + emptyHeart + emptyHeart;

  if (happiness > 75) {
    utilities.printToDom('hearts', fullHappiness);
  } else if (happiness <= 75 && happiness > 50) {
    utilities.printToDom('hearts', threeHearts);
  } else if (happiness <= 50 && happiness > 25) {
    utilities.printToDom('hearts', halfHeart);
  } else if (happiness <= 25 && happiness > 0) {
    utilities.printToDom('hearts', oneHeart);
  } else if (happiness === 0) {
    utilities.printToDom('hearts', dead);
  }
};

const happinessBar = (progress) => {
  const progressString = `
          <div id="hearts"></div>
          <div class="happinessMeter">
          <span style="width: ${progress}%" id="bar"></span>
          <div class="progressPercentage">Happiness ${progress}%</div>
          </div>
          `;
  utilities.printToDom('progress', progressString);
  printHearts(progress);
};


const findHappiness = () => {
  let totalHappiness = 75;
  happinessBar(totalHappiness);
  setInterval(() => {
    const full = eat.getFullProgress();
    const strength = fight.getFightProgress();
    const energy = sleep.getSleepProgress();
    const fun = play.getPlayProgress();
    totalHappiness = Math.round((fun + full + strength + energy) / 4);
    happinessBar(totalHappiness);
  }, 5000);
};

export default { findHappiness };
