import React from 'react';
import Search from './Search';
import RestaurantsGrid from './RestaurantsGrid';
import RestaurantDetail from './RestaurantDetail';
import {Switch,Route} from 'react-router-dom';
import './App.css';

const App = () => {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            <div>
              <h1 className="title">Top Ramen Restaurants</h1>
              <Search />
              <RestaurantsGrid />
            </div>
          )}/>
          <Route path="/:brand/:variety" component={RestaurantDetail} />
        </Switch>
      </div>
    );
}

export default App;
