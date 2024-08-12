import { Box, useColorModeValue } from "@chakra-ui/react";
import PropTypes from "prop-types";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  const bg = useColorModeValue("primaryLight.200", "primaryDark.700");
  const fontColor = useColorModeValue("text.light", "text.dark");

  return (
    <Box bg={bg} color={fontColor} w="100%" minH="100vh">
      <Box>
        <Navbar />
      </Box>
      <Box py={5}>{children}</Box>
      <Box position={"absolute"} bottom={0} w={"100%"}>
        <Footer />
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
