import { getPosts } from "@/app/lib/posts";
import Link from "next/dist/client/link";
import { clsx } from "clsx";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // const pathname = usePathname();
  const filters = (await searchParams).filters;

  const posts = await getPosts();
  console.log("searchParams", filters);
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Link
          key={post.slug}
          prefetch={false}
          href={`/dashboard/blog/${post.slug}`}
          className={clsx(
            "group flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-4 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-200/80 transition duration-200 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-sky-100 hover:via-white hover:to-purple-100 hover:text-slate-950 hover:shadow-xl",
            {
              "bg-gradient-to-r from-sky-500 to-purple-500 text-white shadow-xl shadow-sky-200/80": false,
            },
          )}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-200 text-sky-700 transition group-hover:bg-purple-200 group-hover:text-purple-700">
            <ArrowRightCircleIcon className="h-6 w-6" />
          </span>
          <p className="text-base">{post.title}</p>
        </Link>
      ))}
    </div>
  );
}
