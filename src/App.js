import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  Heading,
  Button,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

export default function App(){
  const bg = useColorModeValue("white", "gray.800");

  return (
    <chakra.header>
      <chakra.nav bg={bg} shadow="base">
        <Box mx="auto" px={6} py={3} maxW="full">
          <Box
            display={{ md: "flex" }}
            alignItems={{ md: "center" }}
            justifyContent={{ md: "space-between" }}
          >
            <Flex alignItems="center" justifyContent="space-between">
              <Box fontSize="xl" fontWeight="semibold" color="gray.700">
                <chakra.a
                  fontSize={["l", , "s"]}
                  fontWeight="bold"
                  color={useColorModeValue("gray.800", "white")}
                  _hover={{
                    color: useColorModeValue("gray.700", "gray.300"),
                  }}
                  
                >
                  ©2021
                </chakra.a>
              </Box>

              <Flex display={{ md: "none" }}>
                <IconButton
                  aria-label="toggle menu"
                  icon={<AiOutlineMenu />}
                  variant="ghost"
                />
              </Flex>
            </Flex>

            <Box display={["none", , "flex"]} alignItems={{ md: "center" }}>
              <chakra.a
                display="block"
                mx={4}
                mt={[2, , 0]}
                fontSize="sm"
                color={useColorModeValue("gray.700", "gray.200")}
                textTransform="capitalize"
                _hover={{ color: useColorModeValue("brand.400", "blue.400") }}
                
              >
                Record Industry
              </chakra.a>
              <chakra.a
                display="block"
                mx={4}
                mt={[2, , 0]}
                fontSize="sm"
                color={useColorModeValue("gray.700", "gray.200")}
                textTransform="capitalize"
                _hover={{ color: useColorModeValue("brand.400", "blue.400") }}
                
              >
                Teaching
              </chakra.a>
              <chakra.a
                display="block"
                mx={4}
                mt={[2, , 0]}
                fontSize="sm"
                color={useColorModeValue("gray.700", "gray.200")}
                textTransform="capitalize"
                _hover={{ color: useColorModeValue("brand.400", "blue.400") }}
                
              >
                Artistry
              </chakra.a>
              <chakra.a
                display="block"
                mx={4}
                mt={[2, , 0]}
                fontSize="sm"
                color={useColorModeValue("gray.700", "gray.200")}
                textTransform="capitalize"
                _hover={{ color: useColorModeValue("brand.400", "blue.400") }}
                
              >
               Design
              </chakra.a>
            </Box>
          </Box>
        </Box>
      </chakra.nav>

      <Box
        w="full"
        h="container.sm"
        backgroundImage="url(https://i.ibb.co/QvyRQxR/hero2.png)"
        bgPos="center"
        bgSize="cover"
      >
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
          bg="blackAlpha.700"
        >
          <Stack textAlign="center" alignItems="center" spacing={6}>
            <Heading
              fontSize={["2xl", , "3xl"]}
              fontWeight="semibold"
              color="white"
              textTransform="uppercase"
              _hover={{
                color: useColorModeValue("gray.700", "gray.300"),
              }}
            >
              Jacob Thomas Strom
             
            </Heading>
            <Button
              colorScheme="brand"
              textTransform="uppercase"
              w="fit-content"
              class="px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              <i>Let's create the future together • jstrom@berklee.edu • [513]-581-1204</i>
            </Button>
          </Stack>
        </Flex>
      </Box>
    </chakra.header>
  );
};

