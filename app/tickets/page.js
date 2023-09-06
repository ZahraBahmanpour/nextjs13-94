async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Tickets() {
  const posts = await getPosts();
  return (
    <main>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div className="card">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </main>
  );
}
