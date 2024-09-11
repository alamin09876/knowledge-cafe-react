import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookMarks = (blog) => {
    const newBookmarks = [...bookMarks, blog];
    setBookMarks(newBookmarks);
  };

  const handleMarkTime = (id, time) => {
    const newMarkTime = readingTime + time;
    setReadingTime(newMarkTime);

    // remove bookmark

    const remaningBookMark = bookMarks.filter((bookMark) => bookMark.id !== id);
    setBookMarks(remaningBookMark);
  };
  return (
    <div className="max-w-6xl mx-auto">
      <Header></Header>
      <div className="md:flex mt-8 ">
        <Blogs
          handleAddToBookMarks={handleAddToBookMarks}
          handleMarkTime={handleMarkTime}
        ></Blogs>
        <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
      </div>
    </div>
  );
}

export default App;
