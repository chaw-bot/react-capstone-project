// import React from 'react-dom';
import { Link } from 'react-router-dom';
import data from '../components/data';

const HomePage = () => (
  <ul className="dataUL">
    {
      data.map((dets) => (
        <Link key={dets.id} to={{ pathname: `/country/${dets.country}` }}>
          <li>
            {dets.country}
            <br />
            {dets.population}
          </li>
        </Link>
      ))
    }
  </ul>
);

export default HomePage;
