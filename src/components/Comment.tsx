import { useParams } from "react-router-dom";
import BlogType from "../types/Blog";
import { useState } from "react";
import axios from "axios";
import CircleSpinner from "./CircleSpinner";

function Comment({
  blog,
  fetchBlog,
}: {
  blog: BlogType;
  fetchBlog: () => void;
}) {
  const { blogId } = useParams();
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (loading) return;

    e.preventDefault();
    setLoading(true);

    const formData = { message, name, email };
    const data = new URLSearchParams(formData);

    try {
      await axios.post(
        `http://localhost:3000/api/blogs/${blogId}/comment`,
        data
      );

      setMessage("");
      setName("");
      setEmail("");
      setErrorMessage("");
      fetchBlog();
    } catch (err) {
      if (!axios.isAxiosError(err)) throw Error("All fields are required");

      console.error(err);

      setErrorMessage("All fields are required");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="py-12 border-slate-100 border-y">
        <h2 className="text-xl font-inter-bold">
          Written by {blog.author.username}
        </h2>
        <p>Hey there! I'm Cold, a web developer.</p>
      </div>

      <form className="flex flex-col gap-2 py-4 my-4" onSubmit={handleSubmit}>
        <h2 className="text-xl font-inter-bold">Post a comment</h2>

        <label htmlFor="message">Message</label>
        <input
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          name="message"
          id="message"
          placeholder="Message"
        />

        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          id="name"
          placeholder="Name"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          id="email"
          placeholder="Email"
        />

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <button
          disabled={loading}
          className="bg-accent mt-4 inline-flex w-fit items-center justify-self-start rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:opacity-80 hover:active:scale-95 disabled:opacity-80"
        >
          {loading && <CircleSpinner />}
          Post comment
        </button>
      </form>

      <div className="pt-4 border-slate-100 border-t last:border-b-0">
        <h2 className="text-2xl font-inter-bold">
          Comments ({blog.comments.length})
        </h2>
        <ul>
          {blog.comments.map((comment) => {
            return (
              <li
                key={comment._id}
                className="py-4 border-slate-400 border-b last:border-b-0"
              >
                <div className="mb-2">
                  <p>{comment.name}</p>
                  <p className="text-slate-300" title={comment.formatDateTitle}>
                    {comment.formatDate}
                  </p>
                </div>
                <p className="text-lg">{comment.message}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Comment;
