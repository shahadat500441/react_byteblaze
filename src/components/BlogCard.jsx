import { Link } from "react-router-dom";
import placeHolderImage from "../../public/404.jpg";
import { MdDelete } from "react-icons/md";


const BlogCard = ({ blog, deletable,handelDelete }) => {
  const { id, cover_image, title, description, published_at } = blog;

 
  return (
    <div className="relative flex flex-col justify-center items-center min-h-[calc(100vh-117px)]">
      <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group transition border-2 border-primary hover:border-secondary hover:scale-105 p-2 rounded-lg hover:no-underline focus:no-underline dark:bg-gray-50"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image || placeHolderImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deletable && <div  onClick={()=> handelDelete(id)} className="absolute bg-primary -top-1 -right-0.5  p-4 rounded-full hover:scale-105 "><MdDelete className="text-secondary" size={20}></MdDelete></div>}
    </div>
  );
};

export default BlogCard;
