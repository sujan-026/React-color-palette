const Blogs = () => {
  const posts = [
    {
      id: 1,
      title: "First Blog Post",
      excerpt: "This is a short excerpt from the first blog post...",
    },
    {
      id: 2,
      title: "Second Blog Post",
      excerpt: "This is a short excerpt from the second blog post...",
    },
    {
      id: 3,
      title: "Third Blog Post",
      excerpt: "This is a short excerpt from the third blog post...",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Latest Blog Posts
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.excerpt}</p>
            <a
              href={`/blog/${post.id}`}
              className="inline-block mt-4 text-purple-600 hover:text-purple-800"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
