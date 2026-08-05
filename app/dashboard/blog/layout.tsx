export default function BlogLayout(props: LayoutProps<"/dashboard/blog">) {
  return <section>
    <div className="mb-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white shadow-lg">
      <h1 className="text-3xl font-bold">Fancy title for the blog section</h1>
    </div>
    {props.children}
  </section>;
}
