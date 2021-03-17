import NextHead from "next/head";

function Head({ title = "" }) {
  return (
    <NextHead>
      <title>
        {title}
        {title ? " | " : ""} Next App
      </title>
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}

export default Head;
