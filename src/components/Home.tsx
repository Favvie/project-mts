import React from "react";
// import "./css/App.css";
import {
	Box,
	Heading,
	Text,
	Button,
	Flex,
	Image,
	VStack,
	Center,
} from "@chakra-ui/react";
import Nav from "./LandingPageComponents/Nav";
// import Nav from "../components/Nav";
import Snippet from "../assets/appSnippet.png";
import "../App.css";
// import HeroSection from "./LandingPageComponents/HeroSection";
// import HeroSection from "./LandingPageComponents/HeroSection";
// import ServicesSection from "./LandingPageComponents/ServicesSection";
// import Footer from "./LandingPageComponents/Footer";

const Home = () => {
	return (
		<Box as="div" height="100%">
			{/* header */}
			<Flex
				as="header"
				w="inherit"
				justifyContent="space-between"
				paddingBlock="3"
				paddingInline="20"
				bg="black"
				color="white"
			>
				<Heading className="logo">strive</Heading>

				<Flex alignItems="center" gap="3v0px">
					<Text>Home</Text>
					<Text>About</Text>
					<Button
						bg="none"
						color="yellow.300"
						border="1px"
						borderColor="yellow.300"
					>
						Get Started
					</Button>
				</Flex>
			</Flex>
			{/* main section */}
			<Box as="section" paddingInline={["5%", "130px"]} maxW="1600px" m="auto">
				{/* hero section */}
				<Flex
					as="main"
					gap="30px"
					direction={["column", "row"]}
					mt={["50px", "135px"]}
					// bgGradient="linear(to-r, green.200, pink.500)"
				>
					<VStack spacing="40px" flex="1" w="100%">
						<Heading as="h1" fontSize={["40px", "55px"]} mt="10px">
							Strive <br />
							helps teams move work forward
						</Heading>
						<Text
							fontSize={["15px", "25px"]}
							fontWeight="normal"
							lineHeight="40px"
							width={["100%", "37vw"]}
						>
							Collaborate, manage projects and reach new productivity peaks.From
							high rises to the home office, the way your team work is unique -
							accomplish it all with Strive
						</Text>
						<Button
							// bg="none"
							// color="yellow.300"
							border="1px"
							borderColor="yellow.300"
							borderRadius="8px"
							bg="yellow.300"
							color="black"
							paddingInline="50px"
							paddingBlock="28px"
							alignSelf="flex-start"
							_hover={{
								background: " #FFD282",
							}}
						>
							Get Started
						</Button>
					</VStack>
					<Box width={["90%", "50vw"]} position="relative">
						<Image src={Snippet} />
					</Box>
				</Flex>

				<Box mt="100px">
					<Box bg="black" w="100%" h="10px"></Box>
					<Heading textAlign="center" marginBlock="20px" mt="40px">
						Why Choose Us?
					</Heading>
					<Flex justifyContent="space-between" m="auto" mt="40px" gap="20px">
						<Box flex="1">
							<Heading fontSize="18px">
								Create easy to manage tasks for your team
							</Heading>
							<Box bg="yellow.300" w="40px" h="5px" marginBlock="20px"></Box>
							<Text>
								Simple straight-forward user interface. Designed for ease.{" "}
							</Text>
						</Box>
						<Box flex="1">
							<Heading fontSize="18px">Ready to go in minutes</Heading>
							<Box bg="yellow.300" w="40px" h="5px" marginBlock="20px"></Box>
							<Text>
								Speed of setup. Simplified view of the necessary and urgent
								tasks.
							</Text>
						</Box>
						<Box flex="1">
							<Heading fontSize="18px">Peak performance for your team</Heading>
							<Box bg="yellow.300" w="40px" h="5px" marginBlock="20px"></Box>
							<Text>
								Accelerate growth because zero delay in setting up and assigning
								task to responsible parties.{" "}
							</Text>
						</Box>
						{/* <Box>
							<Box bg="yellow.300" w="40px" h="5px"></Box>
						</Box>
						<Box>
							<Text>Peak performance</Text>
							<Box bg="yellow.300" w="40px" h="5px"></Box>
						</Box> */}
					</Flex>
				</Box>
			</Box>

			{/* footer section */}

			<Center
				as="footer"
				bg="black"
				color="white"
				mt="85px"
				paddingBlock="20px"
			>
				<Flex alignItems="center" gap="20px">
					Made by Strive
				</Flex>
			</Center>

			{/* <Nav /> */}
			{/* <Box paddingInline={["5%", "130px"]} maxW="1600px" m="auto"> */}
			{/* hero section */}
			{/* <HeroSection /> */}
			{/* <ServicesSection /> */}
			{/* </Box> */}
			{/* <Footer /> */}
		</Box>
	);
};

export default Home;
