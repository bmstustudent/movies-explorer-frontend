import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Register from '../Register/Register';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';

function App() {

  return (
    <div className="app">
      <Switch>

        <Route exact path='/'>
          <Header/>
          <Main/>
          <Footer/>
        </Route>

        <Route path='/signup'>
          <Header/>
          <Register/>
        </Route>

        <Route path='/signin'>
          <Header/>
          <Login/>
        </Route>

        <Route path='/movies'>
          <Header/>
          <Movies/>
          <Footer/>
        </Route>

        <Route path='/saved-movies'>
          <Header/>
          <SavedMovies/>
          <Footer/>
        </Route>

        <Route path='/profile'>
          <Header/>
          <Profile/>
        </Route>

        <Route path='/*'>
          <NotFound/>
        </Route>

      </Switch>

<<<<<<< HEAD
    </div>
  );
}
=======
const App = () => (
    <>
    <div className="page">
    <Switch>
            <Route exact path="/">
                <Main />
            </Route>
            <Route path="/signup">
                {/* <Register /> */}
            </Route>
            <Route path="/signin">
                {/* <Login /> */}
            </Route>
            <Route path="/movies">
                {/* <Movies /> */}
            </Route>
            <Route path="/saved-movies">
                {/* <SavedMovies /> */}
            </Route>
            <Route path="/profile">
                {/* <Profile /> */}
            </Route>
            <Route path='*'>
                <NotFound />
            </Route>
        </Switch>
        <Footer />
        </div>
      </>        
);
>>>>>>> dc65b27324e6300cc003d9c66a5137e27746b3cd

export default App;
