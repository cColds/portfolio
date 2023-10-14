import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import BlogType from "../types/Blog";
import Comment from "./Comment";
import axios from "axios";
import Loading from "./Loading";

function Blog() {
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [loading, setLoading] = useState(true);
  const { blogId } = useParams();

  const fetchBlog = useCallback(async () => {
    setLoading(true);

    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/blogs/${blogId}`
      );

      const targetBlog = res.data;
      setBlog(targetBlog);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [blogId]);

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);

  if (loading) return <Loading loading={loading} />;

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

          <div
            className="prose-sm prose-invert my-3 rounded sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.body) }}
          />

          <Comment blog={blog} fetchBlog={fetchBlog} />
        </article>
      )}
    </div>
  );
}

export default Blog;
