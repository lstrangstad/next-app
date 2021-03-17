import Head from "../components/layout/Head";
import Header from "../components/layout/Header";
import { Container } from "react-bootstrap";

function aboutUs() {
  return (
    <Container>
      <Head title="About Us" />
      <Header title="About Us" />
      <p style={{ maxWidth: 300 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        soluta, labore ipsum porro adipisci suscipit harum minima sint possimus
        voluptates?
      </p>
    </Container>
  );
}

export default aboutUs;
