import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage";
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage";
import TripDetailPage from "../pages/TripDetailsPage/TripDetailsPage";


function Router() {

    return (
        <BrowserRouter>

            <Routes>

                <Route exact path={"/"} element={<HomePage />} />

                <Route exact path={"/trips/list"} element={<ListTripsPage />} />

                <Route exact path={"/trips/aplication"} element={<ApplicationFormPage />} />

                <Route exact path={"/login"} element={<LoginPage />} />

                <Route exact path={"/admin/trips/list"} element={<AdminHomePage />} />

                <Route exact path={"/admin/trips/create"} element={<CreateTripPage />} />

                <Route exact path={"/admin/trips/:id"} element={<TripDetailPage />} />




            </Routes>

        </BrowserRouter>
    );
}

export default Router