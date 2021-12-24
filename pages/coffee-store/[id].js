import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

import coffeeStoresData from "../../data/coffee-stores.json";

export function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStoresData.find(
        (store) => store.id.toString() === params.id
      ),
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "0",
        },
      },
      {
        params: {
          id: "1",
        },
      },
    ],
    fallback: true,
  };
}

const CoffeeStore = ({ coffeeStore }) => {
  const router = useRouter();
  const { id } = router.query;
  const { name, address, neighbourhood } = coffeeStore;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <p>{address}</p>
      <p>{name}</p>
      <p>{neighbourhood}</p>
    </div>
  );
};

export default CoffeeStore;
