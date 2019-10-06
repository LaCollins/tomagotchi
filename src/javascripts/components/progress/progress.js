import eat from '../eat/eat';
import fight from '../fight/fight';
import play from '../play/play';
import sleep from '../sleep/sleep';
import utilities from '../../helpers/utilities';
import './progress.scss';

const happinessBar = (progress) => {
  const progressString = `
        <div class="happinessMeter">
        <span style="width: ${progress}%" id="bar"></span>
        <div class="progressPercentage">Happiness ${progress}%</div>
        </div>
        `;
  utilities.printToDom('progress', progressString);
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
