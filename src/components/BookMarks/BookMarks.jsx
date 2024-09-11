import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookMarks, readingTime }) => {
  return (
    <div>
      <div className="bg-slate-300 p-4 text-center w-full">
        <h2 className="text-2xl ">MarkTime : {readingTime}</h2>
        <h2 className="text-2xl ">Bookmarks : {bookMarks.length}</h2>

        <div>
          {bookMarks.map((bookMark, idx) => (
            <BookMark key={idx} bookMark={bookMark}></BookMark>
          ))}
        </div>
      </div>
    </div>
  );
};

BookMarks.propTypes = {
  bookMarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default BookMarks;
