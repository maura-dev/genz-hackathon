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
	Heading
} from '@chakra-ui/react';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { FiPhone } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';

const SignUpAsUser = () => {
	const alt = useColorModeValue('white', 'black');
	const focus = useColorModeValue('#edf2f7', '#171923');
	return (
		<Flex
			w={{base:"100%", md:"90%",lg:"80%"}}
			mx="auto"
			mt={{base:"80px", md:"100px"}}
			fontSize="14px"
			mb={{base:0, md:10}}
			boxShadow={{ base: 'none', md: '0px 1px 14px rgba(0, 0, 0, 0.1)' }}
			borderRadius="10px"
			direction={{base:"column", md:"row"}}
		>
			<Box w={{base:"100%",md:"50%"}}  bg={focus} borderTopLeftRadius={{base:"0px",md:"10px"}} borderBottomLeftRadius={{base:"0px",md:"10px"}}>
				<Image w={{base:"70%",md:"100%"}} h="auto" src="/handyman.svg" />
			</Box>
			<Box w={{base:"100%",md:"50%"}} bg={alt} p={5} borderTopRightRadius={{base:"0px",md:"10px"}} borderBottomRightRadius={{base:"0px",md:"10px"}}>
				<Heading fontWeight="700" fontSize="25px" mb={5}>
					Register as a User
				</Heading>
				<Box textAlign="left">
					<Text mb={2}>First name</Text>
					<InputGroup mb={3}>
						<InputLeftElement
							pointerEvents="none"
							children={<CgProfile color="gray.300" />}
						/>
						<Input type="text" placeholder="First name" focusBorderColor="primary"/>
					</InputGroup>

					<Text mb={2}>Last name</Text>
					<InputGroup mb={3}>
						<InputLeftElement
							pointerEvents="none"
							children={<CgProfile color="gray.300" />}
						/>
						<Input type="text" placeholder="Last name" focusBorderColor="primary"/>
					</InputGroup>

					<Text mb={2}>Email</Text>
					<InputGroup mb={3}>
						<InputLeftElement
							pointerEvents="none"
							children={<AiOutlineMail color="gray.300" />}
						/>
						<Input type="email" placeholder="Email" focusBorderColor="primary"/>
					</InputGroup>

					<Text mb={2}>City</Text>
					<InputGroup mb={3}>
						<InputLeftElement
							pointerEvents="none"
							children={<GoLocation color="gray.300" />}
						/>
						<Input type="text" placeholder="City" focusBorderColor="primary"/>
					</InputGroup>

					<Text mb={2}>State</Text>
					<InputGroup mb={3}>
						<InputLeftElement
							pointerEvents="none"
							children={<GoLocation color="gray.300" />}
						/>
						<Input type="text" placeholder="State" focusBorderColor="primary"/>
					</InputGroup>

					<Text mb={2}>Phone</Text>
					<InputGroup mb={3}>
						<InputLeftElement
							pointerEvents="none"
							children={<FiPhone color="gray.300" />}
						/>
						<Input type="tel" placeholder="Phone" focusBorderColor="primary"/>
					</InputGroup>

					<Text mb={2}>Password</Text>
					<InputGroup mb={3}>
						<InputLeftElement
							pointerEvents="none"
							children={<RiLockPasswordLine color="gray.300" />}
						/>
						<Input type="password" placeholder="Password" focusBorderColor="primary"/>
					</InputGroup>

					<Text mb={2}>Confirm Password</Text>
					<InputGroup mb={3}>
						<InputLeftElement
							pointerEvents="none"
							children={<RiLockPasswordLine color="gray.300" />}
						/>
						<Input type="password" placeholder="Confirm Password" focusBorderColor="primary"/>
					</InputGroup>
					<Button bg="primary" color={alt} w="100%">
					{' '}
					Register
				</Button>
				</Box>
			</Box>
		</Flex>
	);
};

export default SignUpAsUser;
