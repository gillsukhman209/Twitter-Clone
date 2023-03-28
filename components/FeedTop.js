import { BsStars } from "react-icons/bs";

function FeedTop() {
  return (
    <div>
      <div className="flex justify-between mt-10 mx-5">
        <div className="font-semibold text-2xl">Home</div>
        <div>
          <BsStars size={25} />
        </div>
      </div>
    </div>
  );
}

export default FeedTop;
