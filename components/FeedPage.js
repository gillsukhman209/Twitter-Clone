import { BsStars } from "react-icons/bs";
import FeedTop from "./FeedTop";
import FeedPosts from "./FeedPosts";

function FeedPage() {
  return (
    <div className="fixed overflow-auto md:left-[25%] w-full max-w-3xl h-screen items-center border-x border-gray-800">
      <FeedTop />
      <FeedPosts />
    </div>
  );
}

export default FeedPage;
