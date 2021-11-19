import {
  render, waitFor, screen, act,
} from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../store/configureStore';
import HomePage from '../pages/HomePage';
import FetchStats from '../store/api';

jest.mock('../store/api');

describe('Render HomePAge', () => {
  beforeEach(() => {
    FetchStats.mockResolvedValue(
      [
        {
          continent: 'Africa',
          country: 'Botswana',
          country_flag: 'https://disease.sh/assets/img/flags/af.png',
          country_id: 4,
          population: 40135620,
          todays_cases: 17,
          todays_deaths: 0,
          todays_recovered: 55,
          total_active: 13320,
          total_cases: 156812,
          total_deaths: 7361,
          total_recovered: 136131,
          total_tests: 782926,
        },
      ],
    );
  });

  test('Test shows countries', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <Router>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
            </Routes>
          </Router>
        </Provider>,
      );
    });

    await waitFor(() => expect(screen.getByText('Botswana')).toBeInTheDocument());
  });
});
