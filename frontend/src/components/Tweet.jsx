import Avatar from "react-avatar";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

const Tweet = () => {
  return (
    <div className="">
      <div className=" border-[1px] border-gray-200">
        <div className=" flex p-4">
          <Avatar
            className=" rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUem1ykMgZrm7P2GNRhID1fnipTWf1kQ1dA&s"
            twitterHandle="sitebase"
            size="40"
          />

          <div className=" flex items-center ml-2">
            <p className=" font-semibold">Shubham</p>
            <p className=" text-gray-500 text-sm ml-2">@Shubham021 .1m</p>
          </div>
        </div>

        <div className=" ml-2">
          <p>
           Hello developers let's connect and grow together.
          </p>
        </div>

        <div className=" p-3 flex justify-between">
          <div className=" cursor-pointer flex items-center gap-1 ">
            <div className=" p-1 hover:bg-green-200  rounded-full">
              <BiLike size={23} />
            </div>{" "}
            <p>0</p>
          </div>
          <div className=" cursor-pointer flex items-center gap-1 ">
            <div className=" p-1 hover:bg-pink-200  rounded-full">
              <FaRegComment size={23} />
            </div>{" "}
            <p>0</p>
          </div>
          <div className=" cursor-pointer flex items-center gap-1 ">
            <div className=" p-1 hover:bg-yellow-200  rounded-full">
              <FaRegBookmark size={23} />
            </div>{" "}
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
