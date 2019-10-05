import '../styles/main.scss';
import '@fortawesome/fontawesome-free/js/all';
import eat from './components/eat/eat';
import play from './components/play/play';
import fight from './components/fight/fight';

const init = () => {
  eat.eatOptions();
  play.playOptions();
  fight.fightOptions();
};

init();
