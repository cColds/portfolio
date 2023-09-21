import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type BlogType = {
  _id: string;
  imgUrl: string;
  title: string;
  body: string;
  author: { _id: string; username: string };
  formatDate: string;
  formatDateTitle: string;
};

function Blog() {
  const [blog, setBlog] = useState<BlogType | null>(null);
  const { blogId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/blogs/${blogId}`)
      .then(async (res) => {
        const targetBlog = await res.json();
        setBlog(targetBlog);
      })
      .catch((e) => console.error(e));
  }, [blogId]);

  return (
    <div>
      {blog && (
        <article className="flex flex-col p-8 w-full max-w-3xl">
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="font-inter-bold text-4xl">{blog.title}</h1>
            <div className="flex gap-2">
              <p>{blog.author.username}</p> •{" "}
              <p title={blog.formatDateTitle}>{blog.formatDate}</p>
            </div>

            <img
              src={blog.imgUrl}
              alt="image"
              className="object-cover aspect-video"
            />
          </div>

          <p>{blog.body}</p>
        </article>
      )}
    </div>
  );
}

export default Blog;
