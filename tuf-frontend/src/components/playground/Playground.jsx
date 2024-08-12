import { Container, Heading } from "@chakra-ui/react";
import BannerForm from "../bannerForm/BannerForm";

export default function Playground() {
  return (
    <Container>
      <Heading mb={4} textAlign={"center"}>Change Banner Settings</Heading>
      <BannerForm />
    </Container>
  );
}
