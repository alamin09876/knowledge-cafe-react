import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookMarks }) => {
  return (
    <div>
      <div>
        <h2 className="text-2xl">Bookmarks : {bookMarks.length}</h2>
        <div>
          {bookMarks.map((bookMark) => (
            <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>
          ))}
        </div>
      </div>
    </div>
  );
};

BookMarks.propTypes = {
  bookMarks: PropTypes.array,
};

export default BookMarks;
