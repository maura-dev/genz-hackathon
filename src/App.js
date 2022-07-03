import React, { useEffect, useState } from 'react';
import { Box, Grid, useColorModeValue } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './pages/Signup';
import SignIn from './pages/Signin';
import Dashboard from './pages/Dashboard';
import Landingpage from './pages/Landingpage';
import Artisans from './pages/Artisans';
import './App.css';

function App() {
  const background = useColorModeValue('bg', 'BlackAlpha 700');
  const [ user, setUser ] = useState({})
  useEffect(()=> {
    const l = localStorage.getItem("artikLoggedUser")
    if(l){
      setUser(JSON.parse(l))
    } else{
      setUser({})
    }
  }, [])
  return (
    <Router>
      <Box textAlign="center">
        <Grid minH="100vh" bg={background}>
          <Header user={user} setUser={setUser}/>
          <Routes>
            <Route exact path="/" element={<Landingpage />}></Route>
            <Route exact path="/dashboard" element={<Dashboard />}></Route>
            <Route exact path="/login" element={<SignIn setUser={setUser}/>}></Route>
            <Route exact path="/register" element={<SignUp />}></Route>
            <Route exact path="/artisans" element={<Artisans />}></Route>
          </Routes>
        </Grid>
      </Box>
    </Router>
  );
}

export default App;
