"use client";

import dynamic from "next/dynamic";

const AlarmSystem = dynamic(() => import("./AlarmSystem"), { ssr: false });

export default function AlarmSystemLoader() {
  return <AlarmSystem />;
}
