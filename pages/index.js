import Head from "../components/layout/Head";
import Header from "../components/layout/Header";
import styles from "../styles/Home.module.css";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Head title="Home" />
      <Header title="Home Page" />
    </Container>
  );
}
