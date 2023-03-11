import { useEffect } from "react";
import useAuth from "./contexts/AuthContext";

export const LOL = () => {
  const { name } = useAuth();

  useEffect(() => {
    console.log("mounting");

    return () => {
      console.log("unmounting");
    };
  }, []);

  return (
    <>
      <div />
      <div>
        {name}
        <h1>LOL</h1>
      </div>
    </>
  );
};
