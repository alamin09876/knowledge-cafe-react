import PropTypes from "prop-types";

const BookMark = ({ bookMark }) => {
  const { title } = bookMark;
  return (
    <div>
      <p>Title : {title}</p>
    </div>
  );
};

BookMark.propTypes = {
  bookMark: PropTypes.object,
};

export default BookMark;
