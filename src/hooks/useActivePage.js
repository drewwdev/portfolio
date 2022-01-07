import { useEffect, useState } from "react";

const useActivePage = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const className = "hover:text-cyan-800 hover:underline underline";
  }, [active, setActive]);
  return [active, setActive];
};

export default useActivePage;
