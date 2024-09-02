"use client";

import { useEffect } from "react";

export default function ClientComponent() {
  useEffect(() => {
    console.log("Im in root layout!");
  }, []);
  return <div>Client component</div>;
}
