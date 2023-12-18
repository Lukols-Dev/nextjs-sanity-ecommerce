"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  return (
    <div className="top-0 left-0 fixed z-50 w-screen h-screen">
      <NextStudio config={config} />
    </div>
  );
}
