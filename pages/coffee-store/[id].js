import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <p>Coffee Store Page {id}</p>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
