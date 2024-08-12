import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useCountdown } from "../../hooks/useCountdown";

export const CountdownBanner = () => {
  const timeLeft = useCountdown();
  const bg = useColorModeValue("primaryLight.200", "primaryDark.700");
  const fontColor = useColorModeValue("text.light", "text.dark");
  return (
    <Flex w="100%" justify="center" align="center" bg={bg} color={fontColor}>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
        justify="center"
        align="center"
      >
        {Object.entries(timeLeft).map(([unit, value]) => (
          <GridItem key={unit} p={4} textAlign="center">
            <Heading
              color={fontColor}
              fontSize={{ base: "4xl", md: "6xl", lg: "9xl" }}
            >
              {value}
            </Heading>
            <Box>{unit}</Box>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};
