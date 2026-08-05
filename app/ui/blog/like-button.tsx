"use client";
import { useState } from "react";

export default function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count} likes</p>
      <button
        onClick={() => setCount(count + 1)}
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
      >
        Like this post
      </button>
    </div>
  );
}
