import utilities from '../../helpers/utilities';
import './pet.scss';
import bunny from './assets/images/bunny.gif';


const printPet = () => {
  const domString = `
  <h1 id="petName">Fluffy</h1>
  <div id="petImage">
    <img src="${bunny}" alt="Fluffy">
  </div>
  `;
  utilities.printToDom('pet', domString);
};

export default { printPet };
