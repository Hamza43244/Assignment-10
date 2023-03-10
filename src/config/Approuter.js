import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import Posts from "../screens/Post";
import SinglePost from "../screens/Singlepost";
import Comments from "../screens/dashboardscreens/Comments";
import CommentsForm from "../screens/CommentsForm";
import Dashboard from "../screens/dashoboard";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="post" element={<Posts />} />
          <Route path="singlepost/:id" element={<SinglePost />} />
          <Route path="commentform" element={<CommentsForm />} />
          <Route path="commentform/:id" element={<CommentsForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
