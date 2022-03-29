import React from 'react';
import AdminHomePage from './Pages/AdminHomePage/AdminHomePage';
import ApplicationFormPage from './Pages/ApplicationFormPage/ApplicationFormPage';
import CreateTripPage from './Pages/CreateTripPage/CreateTripPage';
import HomePage from './Pages/HomePage/HomePage';
import ListTripsPage from './Pages/ListTripsPage/ListTripsPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import TripDetailsPage from './Pages/TripDetailsPage/TripDetailsPage';

function App() {
  return (
    <div className="App">
     <h1> LabeX </h1>
    <HomePage/>
    <ListTripsPage/>
    <ApplicationFormPage/>
    <LoginPage/>
    <AdminHomePage/>
    <TripDetailsPage/>
    <CreateTripPage/>
    </div>
  );
}

export default App;
