import React from 'react';
import ArtisanCard from "../components/ArtisanCard";
import { Box, Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs"

const Artisans = () => {
	
	return (
		<Box mt="100px">
			<Box>
				<InputGroup mb={3} w={{base: "85%", md:"75%", lg:"65%"}} mx="auto" borderColor="primary">
					<InputLeftElement
						pointerEvents="none"
						children={<BsSearch color="gray.300" />}
					/>
					<Input type="text" placeholder="Search for any artisan" focusBorderColor="primary"/>
				</InputGroup>
			</Box>
			<Flex direction ="column" w={{base:"100%", md:"85%", lg:"70%"}} p={5} mx="auto">
				<ArtisanCard src="/image 15.svg"/>
				<ArtisanCard src="/image 6.svg"/>
				<ArtisanCard src="/image 8.svg"/>
				<ArtisanCard src="/image 15.svg"/>
				<ArtisanCard src="/image 6.svg"/>
			</Flex>
		</Box>
	);
};

export default Artisans;
