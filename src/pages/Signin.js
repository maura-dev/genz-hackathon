import React from 'react';
import {
	Box,
	Flex,
	useColorModeValue,
	Image,
	Text,
	Input,
	InputGroup,
	InputLeftElement,
	Button,
	Heading,
} from '@chakra-ui/react';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const SignIn = () => {
	const alt = useColorModeValue('white', 'black');
	const focus = useColorModeValue('#edf2f7', '#171923');
	return (
		<Flex
			w={{ base: '100%', md: '90%', lg: '80%' }}
			mx="auto"
			mt={{ base: '80px', md: '100px' }}
			fontSize="14px"
			mb={{ base: 0, md: 10 }}
			boxShadow={{ base: 'none', md: '0px 1px 14px rgba(0, 0, 0, 0.1)' }}
			borderRadius="10px"
			direction={{ base: 'column', md: 'row' }}
		>
			<Box
				w={{ base: '100%', md: '50%' }}
				bg={focus}
				borderTopLeftRadius={{ base: '0px', md: '10px' }}
				borderBottomLeftRadius={{ base: '0px', md: '10px' }}
			>
				<Image w={{ base: '70%', md: '100%' }} h="auto" src="/Searching.svg" />
			</Box>
			<Box
				w={{ base: '100%', md: '50%' }}
				h={{ base: '100%', md: 'auto' }}
				bg={alt}
				px={5}
				py={10}
				borderTopRightRadius={{ base: '0px', md: '10px' }}
				borderBottomRightRadius={{ base: '0px', md: '10px' }}
			>
				<Text mb={10} color="primary" fontSize="16px" fontWeight="600" textTransform="uppercase">Artik is a bridge connecting artisans to users who need their services.</Text>
				<Heading fontWeight="700" fontSize="25px" mb={5}>
					Sign in to Artik
				</Heading>
				<Box textAlign="left">
					<Text mb={2}>Email</Text>
					<InputGroup mb={5}>
						<InputLeftElement
							pointerEvents="none"
							children={<AiOutlineMail color="gray.300" />}
						/>
						<Input
							type="email"
							placeholder="Email"
							focusBorderColor="primary"
						/>
					</InputGroup>

					<Text mb={2}>Password</Text>
					<InputGroup mb={5}>
						<InputLeftElement
							pointerEvents="none"
							children={<RiLockPasswordLine color="gray.300" />}
						/>
						<Input
							type="password"
							placeholder="Password"
							focusBorderColor="primary"
						/>
					</InputGroup>

					<Button bg="primary" color={alt} w="100%" mb={5}>
						{' '}
						Login
					</Button>
					<Link to="/register">
						<Text
							fontSize="12px"
							fontWeight="600"
							color="info"
							textAlign="center"
						>
							Not registered on Artik? Sign up
						</Text>
					</Link>
				</Box>
			</Box>
		</Flex>
	);
};

export default SignIn;
