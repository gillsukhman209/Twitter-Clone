import { AiFillHome } from "react-icons/ai";
import { HiOutlineHashtag } from "react-icons/hi";
import { HiOutlineBell } from "react-icons/hi";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IoMdListBox } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import { CgMenuRound } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";

function LeftNav() {
  return (
    <div className="hidden  h-screen fixed left-0 top-0 md:flex flex-col justify-between w-[20%] p-8 mt-5  ">
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-3">
          <AiFillHome size={20} />
          <p className="text-xl">Home</p>
        </div>
        <div className="flex items-center gap-3">
          <HiOutlineHashtag size={20} />
          <p className="text-xl">Explore</p>
        </div>
        <div className="flex items-center gap-3">
          <HiOutlineBell size={20} />
          <p className="text-xl">Notifications</p>
        </div>
        <div className="flex items-center gap-3">
          <IoChatboxEllipsesSharp size={20} />
          <p className="text-xl">Messages</p>
        </div>
        <div className="flex items-center gap-3">
          <BsFillBookmarkFill size={20} />
          <p className="text-xl">Bookmarks</p>
        </div>
        <div className="flex items-center gap-3">
          <IoMdListBox size={20} />
          <p className="text-xl">Lists</p>
        </div>
        <div className="flex items-center gap-3">
          <BsPersonFill size={20} />
          <p className="text-xl">Profile</p>
        </div>
        <div className="flex items-center gap-3">
          <CgMenuRound size={20} />
          <p className="text-xl">More</p>
        </div>

        <div className="rounded-full bg-[#7257F6] w-[50] h-14 flex items-center justify-center">
          Tweet
        </div>
      </div>

      <div className="flex items-center gap-2 fixed left-10 bottom-10">
        <div className="rounded-full bg-gray-500 w-12 h-12"></div>
        <div>
          <div className="font-semibold">Sukhman Singh</div>
          <div className="text-gray-500">@SukhmanSinghG</div>
        </div>

        <div className="ml-10">
          <BsThreeDots size={20} />
        </div>
      </div>
    </div>
  );
}

export default LeftNav;
