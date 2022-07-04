import React from 'react';
import {
  Box,
  Image,
  Text,
  Flex,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { MdWork } from 'react-icons/md';
import { BiNetworkChart } from 'react-icons/bi';
import { GrUserWorker } from 'react-icons/gr';
import { GoLocation } from 'react-icons/go';
import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router';

const ArtisanCard = ({
  src,
  name,
  experience,
  skills,
  location,
  verifyUser,
  isArtisian,
  user,
  ...props
}) => {
  const navigate = useNavigate();
  const alt = useColorModeValue('white', 'black');
  const reRouteUser = async () => {
    if (user) {
      if (verifyUser) {
        navigate(`/dash/allservices`);
      } else {
        navigate(`/login`);
      }
    } else {
      navigate(`/login`);
    }
  };
  return (
    <Flex
      w="100%"
      h={{ base: 'auto', md: '220px' }}
      fontSize={{ base: '14px', md: '16px' }}
      borderRadius="10px"
      direction={{ base: 'column', md: 'row' }}
      bg={alt}
      mb={5}
      boxShadow={{ base: 'none', md: '0px 1px 14px rgba(0, 0, 0, 0.1)' }}
      {...props}
    >
      <Image
        src={src}
        w={{ base: '100%', md: '200px' }}
        h={{ base: '200px', md: '100%' }}
        objectFit="cover"
        borderTopLeftRadius="10px"
        borderBottomLeftRadius={{ base: '0px', md: '10px' }}
        borderTopRightRadius={{ base: '10px', md: '0px' }}
      />
      <Box p={5}>
        <Text display="flex" alignItems="center" mb={3}>
          <GrUserWorker fontSize="25px" /> &nbsp;{name}
        </Text>
        <Text display="flex" alignItems="center" mb={3}>
          <MdWork fontSize="25px" /> &nbsp; {experience || 'Not Available'}
        </Text>
        <Text display="flex" alignItems="center" mb={3}>
          <BiNetworkChart fontSize="25px" /> &nbsp;{skills || 'Not Available'}
        </Text>
        <Text display="flex" alignItems="center" mb={3}>
          <GoLocation fontSize="25px" /> &nbsp;{location}
        </Text>
        <Flex>
          <AiFillStar color="yellow" fontSize="25px" />
          <AiFillStar color="yellow" fontSize="25px" />
          <AiFillStar color="yellow" fontSize="25px" />
          <AiFillStar color="yellow" fontSize="25px" />
          <AiFillStar color="yellow" fontSize="25px" />
        </Flex>
      </Box>

      <Button
        mb={3}
        border="1px solid"
        mx={5}
        alignSelf={{ base: 'none', md: 'end' }}
        borderColor="primary"
        bg="transparent"
        color="primary"
        onClick={() => {
          reRouteUser();
        }}
      >
        {' '}
        Hire
      </Button>
    </Flex>
  );
};

export default ArtisanCard;
