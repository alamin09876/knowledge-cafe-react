import PropTypes from "prop-types";

const BookMark = ({ bookMark }) => {
  const { title } = bookMark;
  return (
    <div className="bg-slate-200 p-2 m-4 rounded-xl text-start">
      <p>Title : {title}</p>
    </div>
  );
};

BookMark.propTypes = {
  bookMark: PropTypes.object,
};

export default BookMark;
