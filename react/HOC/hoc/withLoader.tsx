/*
 **  Pass reusable logic down as props to components throughout your application.
 **  Return the component with added logic from the wrapped component.
 */
import React from "react";
import { LoadingSpinner } from "../components/LoadingSpinner";

export default function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      const getListings = async () => {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      };
    }, []);

    if (!data) return <LoadingSpinner />;
    return <Element {...props} data={data} />;
  };
}
