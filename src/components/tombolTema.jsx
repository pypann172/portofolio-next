"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function subscribe(callback) {
  window.addEventListener("storage", callback);
  window.addEventListener("tema-berubah", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("tema-berubah", callback);
  };
}

function getSnapshot() {
  return localStorage.getItem("tema") === "gelap";
}

function getServerSnapshot() {
  return false;
}

export default function TombolTema() {
  const gelap = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", gelap);
  }, [gelap]);

  function gantiTema() {
    const temaGelap = !gelap;

    localStorage.setItem("tema", temaGelap ? "gelap" : "terang");
    document.documentElement.classList.toggle("dark", temaGelap);

    window.dispatchEvent(new Event("tema-berubah"));
  }

  return (
    <Button
      onClick={gantiTema}
      className="bg-blue-300/60 dark:bg-blue-200/40 hover:bg-aksen dark:hover:bg-aksen rounded-full dark:rounded-full">
      {gelap ?
      <Image src="/assets/icons/sun.svg" alt="sun" width={20} height={20}/>:
      <Image src="/assets/icons/moon.svg" alt="moon" width={20} height={20}/>}
    </Button>
  );
}