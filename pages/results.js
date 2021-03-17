import Head from "../components/layout/Head";
import Header from "../components/layout/Header";
import axios from "axios";
import { BASE_URL } from "../constants/api";
import Image from "next/image";

function products(props) {
  return (
    <>
      <Head title="Results" />
      <Header title="Results" />
      {props.currencies.map((currency) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Image
              src={currency.image}
              alt={currency.name}
              width={50}
              height={50}
            />
            <h3>{currency.symbol}</h3>
            <p>{currency.name}</p>
            <p>${currency.current_price}</p>
          </div>
        );
      })}
    </>
  );
}

export default products;

export async function getStaticProps() {
  let currencies = [];

  try {
    const response = await axios.get(BASE_URL);
    console.log(response.data);
    currencies = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      currencies: currencies,
    },
  };
}
