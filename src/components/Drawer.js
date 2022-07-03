import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Box,
  useColorModeValue,
  Button
} from '@chakra-ui/react';
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg"

const SideDrawer = ({isOpen, onClose, btnRef, user, handleLogout}) =>  {
      const background = useColorModeValue('white', 'black');
      const navigate = useNavigate();
  return (
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link to="/">
              <Text fontWeight="900" style={{fontFamily:"cursive"}} fontSize="18px">Artik</Text>
            </Link>
          </DrawerHeader>

          <DrawerBody>
            <Box>
            {user && user.jwtToken ? 
              <>
                <Text mb={5} display="flex" fontSize="18px" fontWeight="600" alignItems="center"><CgProfile fontSize="25px"/> &nbsp;{user.user.firstName}&nbsp; {user.user.lastName}</Text> 
                <hr/>
              </> : null
            }
              <Link to="/register" onClick={onClose}><Text mb={5} mt={5}>Register</Text></Link> 
              <Link to="/artisans" onClick={onClose}><Text mb={5}>Artisans</Text></Link>
              <Link to="/jobs" onClick={onClose}><Text mb={5}>Jobs</Text></Link> 
              {user && user.jwtToken ? 
                <Box>
                  <Link to="/dashboard" onClick={onClose}><Text mb={5}>Dashboard</Text></Link>
                  <Button bg="primary" color={background} onClick={()=> {
                    onClose();
                    handleLogout()  
                  }}
                     width="100%">
                  {' '}
                 Logout
                </Button>    
                </Box> :
                <Button bg="primary" color={background} onClick={()=> {
                  onClose();
                  navigate("/login")
                }} width="100%">
                  {' '}
                  Sign in
                </Button>
              }
            </Box>
          </DrawerBody>

          <DrawerFooter>
            &copy;2022 With ❤️️ from Team Artik 
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  )
}

export default SideDrawer