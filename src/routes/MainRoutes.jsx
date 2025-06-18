import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "../features/auth/Signup";
import Login from "../features/auth/Login";
import Banner2 from "../components/common/Banner2";
import Header from "../components/common/Header";
import Banner1 from "../components/common/Banner1";
import DealsList from "../pages/home/Home";
import CategoryList from "../pages/categories/CategoryList";
import ListingDetails from "../pages/listing/ListingDetails";

const MainRoutes = () => {
  return (
    <Router basename="/current-project/react-project/cirqle">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Banner1 />
              <ListingDetails/>
              <Banner2 />
              <br />
              <DealsList />
            </>
          }
        />
        <Route path="/category" element={<CategoryList />} />
        <Route path="/signin" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
