import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Mark,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { CountdownBanner } from "../components/countdownBanner/CountdownBanner";
import { useSelector } from "react-redux";

export default function Homepage() {
  const fontColor = useColorModeValue("text.light", "text.dark");
  const accentColor = useColorModeValue("secondary.300", "secondary.700");
  const { description, heading, isVisible, link, countdown, loading } =
    useSelector((state) => state.banner);
  return (
    <Container>
      <Flex direction="column" align="center" justify="center" gap={10}>
        {isVisible ? (
          <>
            <Heading color={fontColor} textAlign={'center'}>
              <Text>{heading}</Text>
            </Heading>
            <CountdownBanner />
            <Flex
              px={2}
              textAlign={"center"}
              justify={"center"}
              align={"center"}
              gap={5}
              direction={"column"}
            >
              <Button>
                <Mark color={fontColor}>
                  <a href={link}>Banner Link</a>
                </Mark>
              </Button>
              <Text textAlign={"center"} color={fontColor}>
                {description}
              </Text>
            </Flex>
          </>
        ) : (
          <Box>
            <Heading color={fontColor}>
              <Text>
                No banner is currently visible. Go to playground to change
                settings.
              </Text>
            </Heading>
          </Box>
        )}
      </Flex>
    </Container>
  );
}
