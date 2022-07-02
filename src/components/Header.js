import React, { useState} from 'react';
import {
	Text,
	Flex,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	useColorModeValue,
	Avatar, 
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	const background = useColorModeValue('white', 'black');
	const menu = useColorModeValue('WhiteAlpha.100', 'BlackAlpha.200');
	const focus = useColorModeValue('#edf2f7', '#171923');
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	return (
		<Flex
			w="100%"
			pos="fixed"
			top="0"
			left="0"
			right="0"
			p={5}
			zIndex="10"
			justify="space-between"
			bg={background}
			mb="100px"
			fontSize="16px"
		>
			<Text fontWeight="900" style={{fontFamily:"cursive"}} fontSize="18px">Artik</Text>

			<Flex
				w={{ sm: '50%', md: '40%', lg: '35%' }}
				justify="space-around"
				alignItems="center"
			>
				<ColorModeSwitcher justifySelf="flex-end" mr={3}/>
				<Link to="/register"><Text mr={3}>Register</Text></Link> &nbsp;
				<Link to="/artisans"><Text mr={3}>Artisans</Text></Link> &nbsp;	
				{isLoggedIn ? 
					<Flex alignItems="center">
						<Avatar
		                    size="md"
		                    name="Anonymous User"
		                    mr={1}
		                  />
	               
		                <Text
		                  fontSize="16px"
		                  lineHeight="normal"
		                  mb={1}
		                >
		                 Anonymous User
		                </Text>
		                &nbsp; &nbsp;
						<Menu>
							<MenuButton>
								<ChevronDownIcon />
							</MenuButton>
							<MenuList bg={background}>
								<MenuItem
									bg={menu}
									_focus={{ bg: focus }}
									_active={{ bg: { base: '#18183d', md: '#e2e8f0' } }}
								>
									<Link to="/dashboard">Dashboard</Link>
								</MenuItem>
								<MenuItem
									bg={menu}
									_focus={{ bg: focus }}
									_active={{ bg: { base: '#18183d', md: '#e2e8f0' } }}	
								>
									<Link to="/logout">Logout</Link>
								</MenuItem>
							</MenuList>
						</Menu>
					</Flex> :
					<Button bg="primary" color={background} onClick={()=> navigate("/login")}>
						{' '}
						Sign in
					</Button>}
			</Flex>
		</Flex>
	);
};

export default Header;
