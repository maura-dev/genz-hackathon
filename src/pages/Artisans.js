import React, { useEffect, useState } from 'react';
import ArtisanCard from '../components/ArtisanCard';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const Artisans = ({ user }) => {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetch('https://artikapp.herokuapp.com/api/v1/artisan/all-artisan', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(res => setArtisans(res))
      .catch(err => console.log(err));
  });
  return (
    <Box mt="100px">
      <Box>
        <InputGroup
          mb={3}
          w={{ base: '85%', md: '75%', lg: '65%' }}
          mx="auto"
          borderColor="primary"
        >
          <InputLeftElement
            pointerEvents="none"
            children={<BsSearch color="gray.300" />}
          />
          <Input
            type="text"
            placeholder="Search for any artisan"
            focusBorderColor="primary"
          />
        </InputGroup>
      </Box>
      <Flex
        direction="column"
        w={{ base: '100%', md: '85%', lg: '70%' }}
        p={5}
        mx="auto"
      >
        {artisans &&
          artisans.map((artisan, id) => (
            <ArtisanCard
              key={id}
              src="/image 15.svg"
              name={`${artisan.firstName} ${artisan.lastName}`}
              experience={artisan.experience}
              skills={artisan.skills}
              verifyUser={artisan?.isVerify}
              isArtisian={artisan?.isArtisan}
              user={user}
              mainId={artisan._id}
              location={`${artisan.city} ${artisan.state}`}
            />
          ))}
      </Flex>
    </Box>
  );
};

export default Artisans;
