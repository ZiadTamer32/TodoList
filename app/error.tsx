"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("An error occurred:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-semibold text-red-600">
        Something went wrong!
      </h2>
      <p className="text-gray-500 mt-2">{error.message}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
