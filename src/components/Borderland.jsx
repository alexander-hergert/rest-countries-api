import React from "react";
import { Link } from "react-router-dom";
import useFetchData from "../customHooks/useFetchData";
import { useNavigate } from "react-router-dom";

const Borderland = ({ borderland }) => {
  const navigate = useNavigate();

  const { data } = useFetchData(
    `https://restcountries.com/v3.1/alpha/${borderland}`
  );

  if (data !== null) {
    const [name] = data;

    const handleNavigate = () => {
      navigate(name.name.common);
    };

    return (
      <div className="p-2 text-center rounded bg-neutral w-[8rem]">
        <Link onClick={handleNavigate} to={`/countries/${name.name.common}`}>
          {name.name.common}
        </Link>
      </div>
    );
  }
};

export default Borderland;
