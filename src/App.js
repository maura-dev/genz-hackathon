import React, { useEffect, useState } from 'react';
import { Box, Grid, useColorModeValue } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './pages/Signup';
import SignIn from './pages/Signin';
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
import DashArtBooked from './artisiandash/DashArtBooked';

function App() {
  const background = useColorModeValue('bg', 'BlackAlpha 700');
  const [user, setUser] = useState({});
  useEffect(() => {
    const l = localStorage.getItem('artikLoggedUser');
    if (l) {
      setUser(JSON.parse(l));
    } else {
      setUser({});
    }
  }, []);
  return (
    <Router>
      <Box textAlign="center">
        <Grid minH="100vh" bg={background}>
          <Header user={user} setUser={setUser} />
          <Routes>
            <Route exact path="/" element={<Landingpage />}></Route>
            <Route
              exact
              path="/login"
              element={<SignIn setUser={setUser} />}
            ></Route>
            <Route
              exact
              path="/register"
              element={<SignUp user={user} setUser={setUser} />}
            ></Route>

            <Route
              exact
              path="/dash/overview"
              element={<DashOverview user={user} setUser={setUser} />}
            />
            <Route
              exact
              path="/dash/postjob"
              element={<DashPostJob user={user} setUser={setUser} />}
            />
            <Route
              exact
              path="/dash/allservices"
              element={<DashService user={user} setUser={setUser} />}
            />
            <Route
              exact
              path="/dash/editprofile"
              element={<DashEditProfile user={user} setUser={setUser} />}
            />
            <Route
              exact
              path="/dash/blog"
              element={<DashBlogPage user={user} setUser={setUser} />}
            />
            <Route
              exact
              path="/dash/allskill/:skill"
              element={<DashSearchHandy user={user} setUser={setUser} />}
            />
            <Route exact path="/artisans" element={<Artisans />} />
            <Route
              exact
              path="/beforehire/:id"
              element={<BeforeHiring user={user} setUser={setUser} />}
            />
            <Route
              exact
              path="/art"
              element={<ArtisianOverview user={user} setUser={setUser} />}
            />
            <Route
              exact
              path="/all-booked"
              element={<DashArtBooked user={user} setUser={setUser} />}
            />
          </Routes>
        </Grid>
      </Box>
    </Router>
  );
}

export default App;
