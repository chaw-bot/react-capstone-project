// import { useParams } from 'react-router-dom';
import data from '../components/data';

const Country = () => (
  // const { name } = useParams();
  <div className="dataContainer" key={data.id}>
    <ul className="today">
      <h3>Today&apos;s update:</h3>
      <li>
        New cases:
        {' '}
        {data[0].today.confirmed}
      </li>
      <li>
        Confirmed deaths:
        {' '}
        {data[0].today.deaths}
      </li>
      <li>
        New Recoveries:
        {' '}
        {data[0].latest.confirmed}
      </li>
    </ul>
    <ul className="latest">
      <h3>Yesterday&apos;s data:</h3>
      <li>
        Confirmed cases:
        {' '}
        {data[0].latest.confirmed}
      </li>
      <li>
        Recovered:
        {' '}
        {data[0].latest.recovered}
      </li>
      <li>
        Critical:
        {' '}
        {data[0].latest.critical}
      </li>
      <li>
        Deaths:
        {' '}
        {data[0].latest.deaths}
      </li>
    </ul>
    <ul className="stats">
      <h3>Overal statistics:</h3>
      <li>
        Death rate:
        {' '}
        {data[0].countryStats.deathRate}
      </li>
      <li>
        Recovery rate:
        {' '}
        {data[0].countryStats.recoveryRate}
      </li>
      <li>
        Recovery/Death ratio:
        {' '}
        {data[0].countryStats.recover_deathRatio}
      </li>
      <li>
        Cases per million:
        {' '}
        {data[0].countryStats.casePerMilli}
      </li>
    </ul>
  </div>
);

export default Country;
