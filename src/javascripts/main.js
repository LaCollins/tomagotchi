import '../styles/main.scss';
import '@fortawesome/fontawesome-free/js/all';
import eat from './components/eat/eat';
import play from './components/play/play';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';
import pet from './components/pet/pet';

const init = () => {
  eat.eatOptions();
  play.playOptions();
  fight.fightOptions();
  sleep.sleepOptions();
  pet.printPet();
};

init();
