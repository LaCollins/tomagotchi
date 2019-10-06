import utilities from '../../helpers/utilities';
import './pet.scss';


const printPet = () => {
  const domString = `
  <h1 id="petName">Fluffy</h1>
  <div id="petImage">
    <img src="src/javascripts/components/pet/assets/images/bunny.gif" alt="Fluffy">
  </div>
  `;
  utilities.printToDom('pet', domString);
};

export default { printPet };
