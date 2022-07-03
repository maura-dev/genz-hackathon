import React from 'react';
import { Box, Grid, useColorModeValue } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './pages/Signup';
import SignIn from './pages/Signin';
import Dashboard from './pages/Dashboard';
import Landingpage from './pages/Landingpage';
import './App.css';
import DashOverview from './userdash/DashOverview';
import DashPostJob from './userdash/DashPostJob';
import DashService from './userdash/DashService';
import DashEditProfile from './userdash/DashEditProfile';
import DashBlogPage from './userdash/DashBlogPage';
import Artisans from './pages/Artisans';
import DashSearchHandy from './userdash/DashSearchHandy';
import BeforeHiring from './userdash/BeforeHiring';
import ArtisianOverview from './artisiandash/DashOverview';

function App() {
  const background = useColorModeValue('bg', 'BlackAlpha 700');
  return (
    <Router>
      <Box textAlign="center">
        <Grid minH="100vh" bg={background}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Landingpage />}></Route>
            <Route exact path="/dashboard" element={<Dashboard />}></Route>
            <Route exact path="/login" element={<SignIn />}></Route>
            <Route exact path="/register" element={<SignUp />}></Route>

            <Route exact path="/dash/overview" element={<DashOverview />} />
            <Route exact path="/dash/postjob" element={<DashPostJob />} />
            <Route exact path="/dash/allservices" element={<DashService />} />
            <Route
              exact
              path="/dash/editprofile"
              element={<DashEditProfile />}
            />
            <Route exact path="/dash/blog" element={<DashBlogPage />} />
            <Route
              exact
              path="/dash/allskill/:skill"
              element={<DashSearchHandy />}
            />
            <Route exact path="/artisans" element={<Artisans />} />
            <Route exact path="/beforehire/:id" element={<BeforeHiring />} />
            <Route exact path="/art" element={<ArtisianOverview />} />
          </Routes>
        </Grid>
      </Box>
    </Router>
  );
}

export default App;
