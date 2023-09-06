async function getPost(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Post({ params }) {
  const post = await getPost(params.id);
  return (
    <>
      <h1>Post Details</h1>
      <div className="card">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </>
  );
}
