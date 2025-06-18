import { useLoaderData } from "react-router-dom";
import placeHolderImage from "../../public/404.jpg";

const Content = () => {
  const blog = useLoaderData();
  const { cover_image, title, description, tags } = blog;
  return (
    <div className=" mx-auto group  border-2 hover:no-underline focus:no-underline dark:bg-gray-50">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={cover_image || placeHolderImage}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
          {tags.map((tag) => (
            <a
              key={tag}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
            >
              #{tag}
            </a>
          ))}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Content;
