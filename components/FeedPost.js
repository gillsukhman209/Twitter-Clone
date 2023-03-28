import Image from "next/image";
function FeedPost() {
  return (
    <div className="h-[50%] mt-10 border-b border-gray-500">
      <div className="flex">
        <div className="rounded-full w-14 h-14 bg-gray-500 ml-3"></div>
        <div className="flex flex-col ml-3">
          <div className="font-bold text-lg">Harry Wang</div>
          <div className="font-light">
            TAE Members' Profits <span>$SPY $SPX $ES_F $QQQ $XLE</span>
          </div>
        </div>
      </div>

      <div className=" rounded-2xl h-[70%] mx-[5%] mt-[5%]">
        <Image src={"/trading-img.webp"} width={1200} height={300} />
      </div>
    </div>
  );
}

export default FeedPost;
