import React from 'react';
import { Box, Grid, useColorModeValue } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";
function App() {
  const background= useColorModeValue("bg","BlackAlpha 700" )
  return (
    <Router>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" bg={background}>
          <Header />
          <Routes>
          <Route path="/login" element={<SignIn />}></Route>
          <Route exact path="/register" element={<SignUp />}></Route>
        </Routes>
        </Grid>
      </Box>
    </Router>
  );
}

export default App;
