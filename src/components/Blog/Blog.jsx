import PropTypes from "prop-types";
import { CiBookmarkPlus } from "react-icons/ci";
const Blog = ({ blog, handleAddToBookMarks }) => {
  const {
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    cover,
    hashtags,
  } = blog;
  return (
    <div className="mb-8 mr-6">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`Cover image of the title ${title}`}
      />
      <div className="flex justify-between mb-8">
        <div className="flex">
          <img
            className="w-14"
            src={author_img}
            alt={`Image of the Author ${author}`}
          />
          <div className="ml-6">
            <h5 className="text-xl">{author}</h5>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex text-center items-center">
          <p>{reading_time} min read</p>
          <button className="ml-4" onClick={() => handleAddToBookMarks(blog)}>
            <CiBookmarkPlus />
          </button>
        </div>
      </div>
      <h2 className="text-4xl mb-6">{title}</h2>

      {hashtags.map((hash, idx) => (
        <span key={idx}>
          <a href="" className="mr-4">
            #{hash}
          </a>
        </span>
      ))}
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMarks: PropTypes.func,
};
export default Blog;
