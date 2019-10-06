import eat from '../eat/eat';
import fight from '../fight/fight';
import play from '../play/play';
import sleep from '../sleep/sleep';
import utilities from '../../helpers/utilities';

const happinessBar = (progress) => {
  const progressString = `
        <div class="happinessMeter">
        <span style="width: ${progress}%" id="bar"></span>
        <div class="progressPercentage">${progress}%</div>
        <h2>Happiness</h2>
        </div>
        </div>
        `;
  utilities.printToDom('progress', progressString);
};

const findHappiness = () => {
  const full = eat.getFullProgress();
  const strength = fight.getFightProgress();
  const fun = play.getPlayProgress();
  const energy = sleep.getSleepProgress();

  const totalHappiness = (full + strength + fun + energy) / 4;

  happinessBar(totalHappiness);
};

export default { findHappiness };
