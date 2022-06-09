import React, { useEffect, useState } from "react";
import { Listing } from "./Listing";
import { ListingsGrid } from "./ListingsGrid";

export function Listings(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://house-lydiahallie.vercel.app/api/listings"
      );
      const json = await res.json();
      setData(json);
    };
    getData();
  });

  if (!data) return <h1>...Loading</h1>;
  return (
    <ListingsGrid>
      {data.listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
