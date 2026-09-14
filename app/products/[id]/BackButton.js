"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-hidden hover:bg-indigo-600 rounded-sm text-lg"
    >
      Go Back
    </button>
  );
}
