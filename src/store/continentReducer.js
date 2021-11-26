import Africa from '../images/Africa.png';
import asia from '../images/asia.png';
import australia from '../images/australia.png';
import europe from '../images/europe.png';
import northamerica from '../images/northamerica.png';
import southamerica from '../images/southamerica.png';

const intialState = [
  {
    name: 'Africa',
    classname: 'Africa',
    map: Africa,
    number: 58,
  },
  {
    name: 'Asia',
    classname: 'Asia',
    map: asia,
    number: 49,
  },
  {
    name: 'Australia-Oceania',
    classname: 'Australia-Oceania',
    map: australia,
    number: 14,
  },
  {
    name: 'Europe',
    classname: 'Europe',
    map: europe,
    number: 48,
  },
  {
    name: 'North America',
    classname: 'North-America',
    map: northamerica,
    number: 39,
  },
  {
    name: 'South America',
    classname: 'South-America',
    map: southamerica,
    number: 14,
  },
];

const ContinentReducer = (state = intialState) => state;

export default ContinentReducer;
