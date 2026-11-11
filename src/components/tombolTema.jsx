"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function TombolTema() {
  const [gelap, setGelap] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("tema") === "gelap";
    }
    return false;
  });

  // Menyesuaikan tema pada browser
  useEffect(() => {
    document.documentElement.classList.toggle("dark", gelap);
  }, [gelap]);

  function gantiTema() {
    const temaGelap = !gelap;
    localStorage.setItem("tema", temaGelap ? "gelap" : "terang");
    setGelap(temaGelap);
  }

  return (
    <Button
      variant="outline"
      onClick={gantiTema}
      className="border-white bg-transparent text-white hover:bg-aksen hover:text-white font-bold"
    >
      {gelap ? "Mode Terang" : "Mode Gelap"}
    </Button>
  );
}