import React from 'react';
import {
	Text,
	Flex,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";

const Header = () => {
	const background = useColorModeValue('white', 'black');
	const menu = useColorModeValue('WhiteAlpha.100', 'BlackAlpha.200');
	const focus = useColorModeValue('#edf2f7', '#171923');
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
		>
			<Text>Logo</Text>

			<Flex
				w={{ sm: '50%', md: '40%', lg: '30%' }}
				justify="space-around"
				alignItems="center"
			>
				<ColorModeSwitcher justifySelf="flex-end" />
				<Flex alignItems="center">
					<Text>Register</Text> &nbsp;
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
								<Link to="/artisan-register">As Artisan</Link>
							</MenuItem>
							<MenuItem
								bg={menu}
								_focus={{ bg: focus }}
								_active={{ bg: { base: '#18183d', md: '#e2e8f0' } }}	
							>
								<Link to="/user-register">As User</Link>
							</MenuItem>
						</MenuList>
					</Menu>
				</Flex>

				<Button bg="primary" color={background}>
					{' '}
					Sign in
				</Button>
			</Flex>
		</Flex>
	);
};

export default Header;
