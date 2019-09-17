import React, { useState } from 'react';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='/' render={(props) => <MovieList addToSavedList={addToSavedList} {...props} />} />
      <Route exact path='/movies/:id' render={(props) => <Movie addToSavedList={addToSavedList} {...props} />} />
    </div>
  );
};

export default App;
