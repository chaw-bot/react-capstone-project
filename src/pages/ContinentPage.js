import React, { useEffect, useState } from 'react';
import {
  Link, useNavigate, useLocation, useParams,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearchLocation } from 'react-icons/fa';
import FetchStats from '../store/api';
import { GetStats } from '../store/reducer';
import Pagination from '../components/Pagination';

const ContinentPage = () => {
  const CountryStore = useSelector((store) => store.details);
  const dispatch = useDispatch();
  const { continent } = useParams();

  useEffect(() => {
    if (CountryStore.length === 0) {
      FetchStats()
        .then((response) => dispatch(GetStats(response)));
    }
  }, []);

  let Continents = CountryStore.filter((item) => item.continent === continent);

  const totalPopulation = Continents.reduce((total, data) => ({
    population: total.population + data.population,
  }), { population: 0 });

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get('search') || '';
  Continents = Continents.filter((country) => country.country.toLowerCase().includes(search));
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(search);
  const [page, setPage] = useState(0);

  const countryFilterOnChange = (event) => {
    navigate(event.target.value ? `?search=${event.target.value}` : '');
    setSearchValue(event.target.value);
  };

  const itemsPerPage = 10;

  const tenItems = Continents.slice(page * itemsPerPage, (page * itemsPerPage) + itemsPerPage);

  return (
    <div className="ContinentPage">
      <div className="continent">
        <h1>{continent}</h1>
        <h3>{totalPopulation.population.toLocaleString()}</h3>
      </div>
      <form className="form">
        <div>
          <FaSearchLocation />
        </div>
        <div>
          <input className="input-search" type="text" value={searchValue} placeholder="Search for country..." onChange={countryFilterOnChange} />
        </div>
      </form>
      <ul className="dataUL">
        {
        tenItems.map((country) => (
          <Link key={country.country} to={{ pathname: `/country/${country.country}` }}>
            <li className="countryDetails">
              <div className="details">
                <h1 className="countryName">
                  {country.country}
                </h1>
                <p className="number">
                  {country.population.toLocaleString()}
                </p>
              </div>
              <div>
                <img src={country.country_flag} alt="flag" className="flag" />
              </div>
            </li>
          </Link>
        ))
      }
      </ul>
      <Pagination
        countryPages={Continents.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setPage}
      />
    </div>
  );
};

export default ContinentPage;
