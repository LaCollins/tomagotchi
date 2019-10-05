const fight = [
  {
    type: 'fightNow',
    score: -10,
    img: '<i class="fas fa-fist-raised icon"></i>',
  },
  {
    type: 'run',
    score: 1,
    img: '<i class="fas fa-running icon"></i>',
  },
];

const getFightData = () => fight;

export default { getFightData };
