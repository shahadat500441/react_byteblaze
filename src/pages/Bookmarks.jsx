import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { deleteBlog, getBlogs } from "../utils/localstorage";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  const handelDelete = (id) => {
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };

  return (
    <div className="grid justify-center px-4  sm:px-8 lg:px-16 py-10 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard
          deletable={true}
          key={blog.id}
          blog={blog}
          handelDelete={handelDelete}
        ></BlogCard>
      ))}
    </div>
  );
};

export default Bookmarks;
