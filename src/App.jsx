import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);

  const handleAddToBookMarks = (blog) => {
    const newBookmarks = [...bookMarks, blog];
    setBookMarks(newBookmarks);
  };
  return (
    <div className="max-w-6xl mx-auto">
      <Header></Header>
      <div className="md:flex">
        <Blogs handleAddToBookMarks={handleAddToBookMarks}></Blogs>
        <BookMarks bookMarks={bookMarks}></BookMarks>
      </div>
    </div>
  );
}

export default App;
