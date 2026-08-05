"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SortProducts() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString());

    params.set("sort", sortOrder);

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex gap-3">
      <button
        onClick={() => updateSorting("asc")}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
      >
        Sort Ascending
      </button>
      <button
        onClick={() => updateSorting("desc")}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
      >
        Sort Descending
      </button>
    </div>
  );
}
