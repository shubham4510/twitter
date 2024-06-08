import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";

const RightSidebar = () => {
  return (
    <div className=" w-[30%] flex flex-col gap-3 items-center py-2 px-5 h-screen sticky right-0 top-0">
      <div className=" w-full bg-gray-200 flex items-center rounded-full p-2">
        <CiSearch size={20} />
        <input
          type="text"
          className=" bg-transparent border-none outline-none text-gray-600 ml-4 "
          placeholder=" Search"
        />
      </div>

      <div className="py-4 px-2 w-full bg-gray-200 rounded-lg">
        <h3 className=" text-2xl font-bold mb-5">Who to Follow</h3>

        <div className=" flex flex-col gap-2">
          <div className=" flex justify-between">
            <div className=" flex gap-1">
              <Avatar
                className=" rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCga-xdtUg1fK-RWZ_pOcouzCbVPCt72v_Zg&s"
                twitterHandle="sitebase"
                size="40"
              />
              <div className=" text-sm">
                <p className=" font-bold">Shubham</p>
                <p>@ShubhamMernStack</p>
              </div>
            </div>

            <button className=" px-4 py-2 bg-black text-white rounded-full">
              Profile
            </button>
          </div>
          <div className=" flex justify-between">
            <div className=" flex gap-1">
              <Avatar
                className=" rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCga-xdtUg1fK-RWZ_pOcouzCbVPCt72v_Zg&s"
                twitterHandle="sitebase"
                size="40"
              />
              <div className=" text-sm">
                <p className=" font-bold">Shubham</p>
                <p>@ShubhamMernStack</p>
              </div>
            </div>

            <button className=" px-4 py-2 bg-black text-white rounded-full">
              Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
