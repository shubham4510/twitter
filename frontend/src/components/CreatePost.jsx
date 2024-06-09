import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div className="  border-[1px] border-gray-200">
      <div>
        <div className="flex items-center justify-between px-3 py-2">
          <div className=" w-6/12 text-center cursor-pointer   hover:bg-gray-300 rounded-full">
            <p className=" font-semibold text-lg ">For you</p>
          </div>
          <div className=" w-6/12 text-center cursor-pointer  hover:bg-gray-300 rounded-full">
            <p className=" font-semibold text-lg">Following</p>
          </div>
        </div>
      </div>

      <div className=" m-4">
        <div className=" flex items-center">
          <div>
            <Avatar
              className=" rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUem1ykMgZrm7P2GNRhID1fnipTWf1kQ1dA&s"
              twitterHandle="sitebase"
              size="40"
            />
          </div>
          <input
            className=" w-full border-none outline-none p-2"
            type="text"
            placeholder="What is happening?!"
          />
        </div>
        <div className="flex justify-between p-5 border-b border-gray-300b">
          <div>
            <CiImageOn size={40} />
          </div>
          <button className=" bg-blue-600 px-4 py-1 rounded-full text-white border-none outline-none hover:scale-95 transition-all duration-300">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
