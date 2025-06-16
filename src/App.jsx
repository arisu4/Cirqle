import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import DealsList from './pages/Home';
import Banner1 from './components/common/Banner1';
import Signup from './features/auth/Signup';
import Login from './features/auth/Login';
import Banner2 from './components/common/Banner2';


function App() {
  return (
    <Router basename="/current-project/react-project/cirqle">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Banner1 />
              <Banner2/>
              <br/>
              <DealsList />

            </>
          }
        />
        <Route path="/signin" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;


