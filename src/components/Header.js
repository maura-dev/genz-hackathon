import React, { useRef } from 'react';
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
	Box,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import SideDrawer from './Drawer';

const Header = ({user, setUser}) => {
	const toast = useToast()
	const navigate = useNavigate();
	const background = useColorModeValue('white', 'black');
	const menu = useColorModeValue('WhiteAlpha.100', 'BlackAlpha.200');
	const focus = useColorModeValue('#edf2f7', '#171923');
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();
	const handleLogout = () => {
		fetch("https://artikapp.herokuapp.com/api/v1/auth/logout" ,{
			method:'POST',
			body:JSON.stringify({
				refreshToken: user?.jwt 
			}),
			headers:{
				'Content-Type':'application/json'
			}
		})
		.then(response => response.text())
		.then(res => {
			toast({
				title:"Successful",
				description:"You have logged out of Artik",
				status:"success",
				duration:2000,
				isClosable:true
			})
			localStorage.removeItem("artikLoggedUser")
			setUser({})
			navigate("/")
		})
		.catch(err => {
			toast({
				title:"Opps!",
				description: err,
				status:"error",
				duration:3000,
				isClosable:true
			})
		})
	}

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
			alignItems="center"
			bg={background}
			mb="100px"
			fontSize="16px"
			boxShadow={{ base: 'none', md: '0px 1px 14px rgba(0, 0, 0, 0.1)' }}
		>
			<Link to="/">
				<Text fontWeight="900" style={{ fontFamily: 'cursive' }} fontSize="18px">
					Artik
				</Text>
			</Link>

			<Flex
				w={{ sm: '60%', md: '50%', lg: '40%' }}
				alignItems="center"
				justify="flex-end"
			>
				<ColorModeSwitcher justifySelf="flex-end" mr={3} />
				<Box
					display={{ base: 'block', md: 'none' }}
					fontSize="20px"
					ref={btnRef}
					onClick={onOpen}
				>
					<HamburgerIcon />
				</Box>
				<Box
					display={{ base: 'none', md: 'flex' }}
					justify="space-around"
					alignItems="center"
				>
					<Link to="/register">
						<Text mr={5}>Register</Text>
					</Link>{' '}
					&nbsp;
					<Link to="/artisans">
						<Text mr={5}>Artisans</Text>
					</Link>{' '}
					&nbsp;
					<Link to="/jobs">
						<Text mr={5}>Jobs</Text>
					</Link>{' '}
					&nbsp;
					{user && user.jwtToken ? (
						<Flex alignItems="center">
							<Avatar size="md" name={`${user.user.firstName} ${user.user.lastName}`} mr={1} />
							<Text fontSize="16px" lineHeight="normal" mb={1}>
								{user.user.firstName}&nbsp; {user.user.lastName}
							</Text>
							&nbsp;
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
										onClick={handleLogout}
									>
										Logout
									</MenuItem>
								</MenuList>
							</Menu>
						</Flex>
					) : (
						<Button
							bg="primary"
							color={background}
							onClick={() => navigate('/login')}
						>
							{' '}
							Sign in
						</Button>
					)}
				</Box>
			</Flex>
			<SideDrawer onClose={onClose} isOpen={isOpen} btnRef={btnRef} user={user} handleLogout={handleLogout}/>
		</Flex>
	);
};

export default Header;
