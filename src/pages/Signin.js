import React from 'react';
import {
  Box,
  Flex,
  useColorModeValue,
  Image,
  Text,
  Button,
  Heading,
  useToast,
} from '@chakra-ui/react';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ setUser }) => {
  const alt = useColorModeValue('white', 'black');
  const focus = useColorModeValue('#edf2f7', '#171923');
  const toast = useToast();
  const navigate = useNavigate();

  //validation schema for input fields
  const validationSchema = yup.object().shape({
    login: yup.string().email('Email is invalid').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Must be at least 8 characters')
      .max(15, 'Must be 15 characters or less')
      .required('Password is required'),
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
        <Formik
          initialValues={{
            login: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            fetch('https://artikapp.herokuapp.com/api/v1/auth/login', {
              method: 'POST',
              body: JSON.stringify(values),
              headers: { 'Content-Type': 'application/json' },
            })
              .then(response => response.json())
              .then(res => {
                // console.log(res)
                localStorage.setItem('artikLoggedUser', JSON.stringify(res));
                setUser(res);
                toast({
                  title: 'Successful',
                  description: 'You are logged into your Artik account',
                  status: 'success',
                  duration: 2000,
                  isClosable: true,
                });
                setSubmitting(false);
                resetForm();
                res.user.isArtisan ? navigate('/art/overview') : navigate('/dash/overview');
                window.location.reload();
              })
              .catch(err => {
                // console.log(err)
                toast({
                  title: 'Opps!',
                  description: err,
                  status: 'error',
                  duration: 3000,
                  isClosable: true,
                });
                setSubmitting(false);
              });
          }}
        >
          {({ errors, isSubmitting, setFieldValue }) => (
            <Form>
              <Text
                mb={10}
                color="primary"
                fontSize="16px"
                fontWeight="600"
                textTransform="uppercase"
              >
                Artik is a bridge connecting artisans to users who need their
                services.
              </Text>
              <Heading fontWeight="700" fontSize="25px" mb={5}>
                Sign in to Artik
              </Heading>
              <Box textAlign="left">
                <Input
                  label="Email"
                  name="login"
                  id="login"
                  type="email"
                  placeholder="Email"
                  children={<AiOutlineMail color="gray.300" />}
                />

                <Input
                  label="Password"
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                  children={<RiLockPasswordLine color="gray.300" />}
                />

                <Button
                  bg="primary"
                  color={alt}
                  w="100%"
                  isLoading={isSubmitting}
                  isDisabled={Object.keys(errors).length > 0 ? true : false}
                  type="submit"
                  mb={5}
                >
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
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default SignIn;
