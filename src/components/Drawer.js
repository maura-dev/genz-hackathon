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

const SideDrawer = ({isOpen, onClose, btnRef}) =>  {
      const background = useColorModeValue('white', 'black');
      const isLoggedIn = false;
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
            {isLoggedIn ? 
              <>
                <Text mb={5} display="flex" fontSize="18px" fontWeight="600" alignItems="center"><CgProfile fontSize="25px"/> &nbsp;Anonymous User</Text> 
                <hr/>
              </> : null
            }
              <Link to="/register" onClick={onClose}><Text mb={5} mt={5}>Register</Text></Link> 
              <Link to="/artisans" onClick={onClose}><Text mb={5}>Artisans</Text></Link> 
              {isLoggedIn ? 
                <Box>
                  <Link to="/dashboard" onClick={onClose}><Text mb={5}>Dashboard</Text></Link>
                  <Button bg="primary" color={background} onClick={()=> {
                    onClose();
                    navigate("/logout");  
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