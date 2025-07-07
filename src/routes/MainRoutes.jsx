import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

import Signup from "../features/auth/Signup";
import Login from "../features/auth/Login";
import Banner2 from "../components/common/Banner2";
import Header from "../components/common/Header";
import Banner1 from "../components/common/Banner1";
import DealsList from "../pages/home/Home";
import CategoryList from "../pages/listing/ListingPage";
import RelevantDeals from "../pages/relevantdeals/RelevantDeals";
import Mycoupon from "../pages/mycoupon/Mycoupon";
import ListingDetails from "../pages/details/Details";

const MainRoutes = () => {
  return (
    <AuthProvider>
      <Router basename="/current-project/react-project/cirqle">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Banner1 />
                <Banner2 />
                <br />
                <DealsList />
              </>
            }
          />
          <Route path="/imageclick" element={<ListingDetails />} />
          <Route path="/category" element={<CategoryList />} />
          <Route path="/coupon" element={<Mycoupon />} />
          <Route path="/signin" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default MainRoutes;