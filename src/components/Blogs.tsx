import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type BlogPreview = {
  _id: string;
  author: { _id: string; username: string };
  title: string;
  body: string;
  imgUrl: string;
  formatDate: string;
  formatDateTitle: string;
  description: string;
};

function Blogs() {
  const [blogs, setBlogs] = useState<[] | BlogPreview[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/blogs/published")
      .then(async (res) => {
        const allBlogs = await res.json();
        setBlogs(allBlogs);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="flex flex-col p-8 w-full max-w-7xl">
      <h1 className="mb-6">Blogs</h1>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {blogs.map((blog) => {
          return (
            <article className="flex flex-col gap-2" key={blog._id}>
              <Link to={`/blogs/${blog._id}`}>
                <img
                  src={blog.imgUrl}
                  alt="image"
                  className="object-cover aspect-video"
                />
              </Link>
              <h2 className="text-2xl font-inter-bold">{blog.title}</h2>
              <div className="flex gap-2">
                <p>{blog.author.username}</p> •{" "}
                <p title={blog.formatDateTitle}>{blog.formatDate}</p>
              </div>
              <p className="line-clamp text-sm text-slate-300 ">
                {blog.description}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
