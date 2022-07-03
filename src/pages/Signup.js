import React from 'react';
import {
	Box,
	Flex,
	useColorModeValue,
	Image,
	Button,
	Heading,
	useToast,
} from '@chakra-ui/react';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { FiPhone } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import Input, { Select } from '../components/Input';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const alt = useColorModeValue('white', 'black');
	const focus = useColorModeValue('#edf2f7', '#171923');
	const toast = useToast();
	const navigate = useNavigate();

	const parseNumber = (x) => {
		let code = "+234"
		return code.concat(x.slice(1))
	}

	//validation schema for input fields
	const validationSchema = yup.object().shape({
		firstName: yup
	      .string()
	      .min(3, "Must be at least 3 characters")
	      .required("First name is required"),
	    lastName: yup
	      .string()
	      .min(3, "Must be at least 3 characters")
	      .required("Last name is required"),
		email: yup
		  .string()
		  .email('Email is invalid')
		  .required('Email is required'),
		city: yup
	      .string()
	      .min(3, "Must be at least 3 characters")
	      .required("City is required"),
	    state: yup
	      .string()
	      .min(3, "Must be at least 3 characters")
	      .required("State is required"),
	    phone: yup
	      .string()
	      .phone("NG", true)
	      .required("Phone number is required"),
	    userType: yup.string().required("Required"),
		password: yup
			.string()
			.min(8, 'Must be at least 8 characters')
			.max(15, 'Must be 15 characters or less')
			.required('Password is required'),
		confirmPassword: yup
			.string()
			.min(8, 'Must be at least 8 characters')
			.max(15, 'Must be 15 characters or less')
			.required('Please confirm password')
			.oneOf([yup.ref("password")], "Passwords do not match")
	});

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
				<Image w={{ base: '70%', md: '100%' }} h="auto" src="/handyman.svg" />
			</Box>
			<Box
				w={{ base: '100%', md: '50%' }}
				bg={alt}
				p={5}
				borderTopRightRadius={{ base: '0px', md: '10px' }}
				borderBottomRightRadius={{ base: '0px', md: '10px' }}
			>
				<Formik
					initialValues={{
						firstName:'',
						lastName:'',
						email:'',
						city:'',
						state:'',
						phone:'', 
						password:'',
						confirmPassword:''
					}}
					validationSchema={validationSchema}
					onSubmit={ (values, { setSubmitting, resetForm }) => {	
						const data = {
							firstName:values.firstName,
							lastName:values.lastName,
							email:values.email,
							city:values.city,
							state:values.state,
							phone:parseNumber(values.phone),
							password:values.password
						}
						console.log(data)
						if(document.getElementById("userType").value ==="artisan"){
							fetch("https://artikapp.herokuapp.com/api/v1/auth/register/artisan" ,{
								method:'POST',
								body:JSON.stringify(data),
								headers:{
									'Content-Type':'application/json'
								}
							})
							.then(res => res.text())
							.then(res => {
								toast({
									title:"Successful",
									description:"You have successfully signed up as an Artisan on Artik. Proceed to login",
									status:"success",
									duration:2000,
									isClosable:true
								})
								setSubmitting(false)
								resetForm()
								navigate("/login")
							})
							.catch(err => {
								toast({
									title:"Opps!",
									description: err,
									status:"error",
									duration:3000,
									isClosable:true
								})
								setSubmitting(false)
							})
						} else{
							fetch("https://artikapp.herokuapp.com/api/v1/auth/register",{
								method:'POST',
								body:JSON.stringify(data),
								headers:{
									'Content-Type':'application/json'
								}
							})
							.then(res => res.text())
							.then(res => {
								toast({
									title:"Successful",
									description:"You have successfully signed up as a user on Artik. Proceed to login",
									status:"success",
									duration:2000,
									isClosable:true
								})
								setSubmitting(false)
								resetForm();
								navigate("/login")
							})
							.catch(err => {
								toast({
									title:"Opps!",
									description: err,
									status:"error",
									duration:3000,
									isClosable:true
								})
								setSubmitting(false)
							})
						}		
					}}
				>
					{({ errors, isSubmitting, setFieldValue }) => (
						<Form>
							<Heading fontWeight="700" fontSize="25px" mb={5}>
								Register on Artik
							</Heading>
							<Box textAlign="left">
								<Input
				                  label="First name"
				                  name="firstName"
				                  id="firstName"
				                  type="text"
				                  placeholder="First name"
				                  children={<CgProfile color="gray.300" />}
				                />

				                <Input
				                  label="Last name"
				                  name="lastName"
				                  id="lastName"
				                  type="text"
				                  placeholder="Last name"
				                  children={<CgProfile color="gray.300" />}
				                />

				                <Input
				                  label="Email"
				                  name="email"
				                  id="email"
				                  type="email"
				                  placeholder="Email"
				                  children={<AiOutlineMail color="gray.300" />}
				                />

				                <Input
				                  label="City"
				                  name="city"
				                  id="city"
				                  type="text"
				                  placeholder="City"
				                  children={<GoLocation color="gray.300" />}
				                />

				                <Input
				                  label="State"
				                  name="state"
				                  id="state"
				                  type="text"
				                  placeholder="State"
				                  children={<GoLocation color="gray.300" />}
				                />

				                <Input
				                  label="Phone"
				                  name="phone"
				                  id="phone"
				                  type="tel"
				                  placeholder="Phone"
				                  children={<FiPhone color="gray.300" />}
				                />

				                <Select label="Are you an artisan or user?" name="userType" id="userType">
					                <option value="">Select user type</option>
					                <option value="artisan">Artisan</option>
					                <option value="user">User</option>
					             </Select>

				                 <Input
				                  label="Password"
				                  name="password"
				                  id="password"
				                  type="password"
				                  placeholder="Password"
				                  children={<RiLockPasswordLine color="gray.300" />}
				                />

				                 <Input
				                  label="Confirm Password"
				                  name="confirmPassword"
				                  id="confirmPassword"
				                  type="password"
				                  placeholder="Confirm password"
				                  children={<RiLockPasswordLine color="gray.300" />}
				                />
								
								<Button 
									bg="primary" 
									color={alt} 
									isLoading={isSubmitting}
									isDisabled={Object.keys(errors).length > 0 ? true : false}
									type="submit"
									w="100%" 
									mb={3}
								>
									{' '}
									Register
								</Button>

							</Box>
						</Form>
					)}
				</Formik>
			</Box>
		</Flex>
	);
};

export default SignUp;
