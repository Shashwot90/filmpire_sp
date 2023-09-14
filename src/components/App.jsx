import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom'
const App = () => (
  <div>
    <CssBaseline />
    <main>
        <Routes>
            <Route exact element="/movie/:id"><h1>Movie Information</h1></Route>
            <Route exact element="/actors/:id"><h1>Actors</h1></Route>
            <Route exact element="/"><h1>Movies</h1></Route>
            <Route exact element="/profile/:id"><h1>Profile</h1></Route>
        </Routes>
    </main>
  </div>
);

export default App;
