import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/app/lib/posts";
import Post from "@/app/ui/blog/post";
import LikeButton from "@/app/ui/blog/like-button";
import { ErrorButton } from "@/app/ui/blog/error-button";

async function likePost(formData: FormData) {
  "use server";

  const slug = formData.get("slug");

  if (typeof slug === "string") {
    console.log(`Liked post with slug: ${slug}`);
    // TODO: wire this to a real like counter or persistence layer.
  }
}

export default async function BlogPostPage(
  props: PageProps<"/dashboard/blog/[slug]">,
) {
  const params = await props.params;

  console.log(" params", params);
  const { slug } = params;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Posts", href: "/dashboard/blog" },
          {
            label: `${post.title}`,
            href: `/dashboard/blog/${slug}`,
            active: true,
          },
        ]}
      />
      <Post post={post} />
      <LikeButton />
      <ErrorButton />
    </main>
  );
}
