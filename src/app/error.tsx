"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="fixed z-30 w-screen h-screen flex flex-col items-center bg-white">
      <div className="flex flex-col items-start m-10 rounded-md gap-3">
        <p className="text-4xl font-bold">Ooops...</p>
        <h2 className="text-5xl font-light">Something went wrong!</h2>
        <button
          className="border-2 border-black hover:bg-neutral-300 rounded-md px-3 py-2 text-back"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
