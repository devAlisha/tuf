import {
  Button,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "../logo/Logo";
import { Moon, Sun } from "lucide-react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function Navbar() {
  const bg = useColorModeValue("primaryLight.50", "primaryDark.900");
  const hoverBg = useColorModeValue("primaryLight.100", "primaryDark.800");
  const fontColor = useColorModeValue("text.light", "text.dark");
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      bg={bg}
      color={fontColor}
      w="100%"
      justify="space-between"
      align="center"
      p={4}
    >
      <Logo />
      <Flex>
        <ChakraLink as={ReactRouterLink} to="/playground">
          <Button
            bg={bg}
            _hover={{
              bg: hoverBg,
            }}
          >
            Playground
          </Button>
        </ChakraLink>

        <Button
          onClick={toggleColorMode}
          bg={bg}
          _hover={{
            bg: hoverBg,
          }}
        >
          {colorMode === "dark" ? <Sun /> : <Moon />}
        </Button>
      </Flex>
    </Flex>
  );
}
