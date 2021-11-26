import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const ContinentStore = useSelector((store) => store.continent);

  return (
    <div className="ContinentPage" id={ContinentStore}>
      <h1 className="continent">World Wide</h1>
      <ul className="dataUL">
        {
        ContinentStore.map((continent) => (
          <Link key={continent.name} to={{ pathname: `/continent/${continent.name}` }}>
            <li className="ContinentDetails">
              <div className="titles">
                <h1 className="continentName">
                  {continent.name}
                </h1>
                <h2 className="countryNumbers">
                  {continent.number}
                  {' '}
                  countries
                </h2>
              </div>
              <div className="map-div">
                <img src={continent.map} alt="Continent map" className={`map ${continent.classname}`} />
              </div>
            </li>
          </Link>
        ))
      }
      </ul>
    </div>
  );
};

export default HomePage;
