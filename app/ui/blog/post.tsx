// generate the post page that displays the title, date, and description of a post. The page should be generated using the getPosts function from app/lib/posts.ts. The page should be generated using the slug of the post as a parameter. The page should be generated using the getStaticPaths and getStaticProps functions from Next.js. The page should be generated using the Post component from app/ui/blog/post.tsx. The page should be generated using the Layout component from app/ui/layout.tsx. The page should be generated using the Head component from next/head. The page should be generated using the Link component from next/link.
// keep in mind we are using the app router

export const Post = ({
  post,
}: {
  post: { title: string; date: string; content: string };
}) => {
  return (
    <div className="prose mx-auto">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
