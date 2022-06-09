import React, { useState, useEffect } from "react";

export default function useListings() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://house-lydiahallie.vercel.app/api/listings"
      );
      const json = await res.json();
      setData(json);
    }
    getData();
  });
  return data;
}
