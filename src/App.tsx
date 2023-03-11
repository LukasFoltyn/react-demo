import React, { useEffect, useRef, useState } from "react";
import { LOL } from "./LOL";
import styles from "./App.module.css";
import clsx from "clsx";
import axios from "axios";

import useSWR from "swr";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

type AppProps = {
  title: string;
  type: "primary" | "secondary";
  children: React.ReactNode;
};

export const App: React.FC<AppProps> = ({ title, type, children }) => {
  const fetcher = (url: string) =>
    axiosInstance.get(url).then((res) => res.data);

  const { data, isLoading } = useSWR("/posts", fetcher);

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const mountedRef = useRef(false);

  const [name, setName] = useState("");
  const nameRef = useRef(null);

  console.log("HAHAH");

  let x = 4;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      {isLoading ? <h1>Loading...</h1> : <p>{JSON.stringify(data)}</p>}
      <input className="border border-black" ref={nameRef} type="text" />
      {show && <LOL />}
      <p className="">You clicked me {count} time!</p>
      <p
        className={clsx("fwefwefwefq", {
          "bg-red-500": type == "primary",
          "bg-blue-500": type == "secondary",
        })}
      >
        You clicked me {count} time!
      </p>
      <button
        onClick={() => {
          setCount((prevCount) => {
            return prevCount + 1;
          });
          setShow((prevShow) => {
            return !prevShow;
          });
        }}
      >
        Toggle!
      </button>
      {children}
      <h1>{title}</h1>
    </div>
  );
};
