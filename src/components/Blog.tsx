import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import BlogType from "../types/Blog";
import Comment from "./Comment";

function Blog() {
  const [blog, setBlog] = useState<BlogType | null>(null);
  const { blogId } = useParams();

  const fetchBlog = useCallback(async () => {
    fetch(`http://localhost:3000/api/blogs/${blogId}`)
      .then(async (res) => {
        const targetBlog = await res.json();
        setBlog(targetBlog);
      })
      .catch((e) => console.error(e));
  }, [blogId]);

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);

  return (
    <div>
      {blog && (
        <article className="flex flex-col p-8 w-full max-w-3xl">
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="font-inter-bold text-4xl">{blog.title}</h1>
            <div className="flex gap-2">
              <p>{blog.author.username}</p> •{" "}
              <p className="text-slate-300" title={blog.formatDateTitle}>
                {blog.formatDate}
              </p>
            </div>

            <img
              src={blog.imgUrl}
              alt="image"
              className="object-cover aspect-video"
            />
          </div>

          <p className="text-lg mb-8">{blog.body}</p>

          <Comment blog={blog} fetchBlog={fetchBlog} />
        </article>
      )}
    </div>
  );
}

export default Blog;