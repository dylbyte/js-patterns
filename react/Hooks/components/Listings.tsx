import React, { useEffect, useState } from "react";
import { Listing } from "./Listing";
import { ListingsGrid } from "./ListingsGrid";
import useListings from "../hooks/useListings";

export function Listings(props) {
  const data = useListings();

  if (!data) return <h1>...Loading</h1>;
  return (
    <ListingsGrid>
      {data.listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
