import { Link } from "react-router-dom";
import placeHolderImage from "../../public/404.jpg";

const BlogCard = ({ blog }) => {
  const { id, cover_image, title, description, published_at } = blog;
  return (
    <Link 
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group transition border-2 border-primary hover:border-secondary hover:scale-105 p-2 rounded-lg hover:no-underline focus:no-underline dark:bg-gray-50">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={cover_image || placeHolderImage}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs dark:text-gray-600">{new Date (published_at).toLocaleDateString()}</span>
        <p>
          {description}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
