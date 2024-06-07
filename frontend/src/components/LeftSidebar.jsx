import { BiMessageSquare } from "react-icons/bi";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiSearch,CiHome} from "react-icons/ci";
import { RiLogoutCircleRLine } from "react-icons/ri";




const LeftSidebar = () => {
  return (
    <div className="">
        <div>
            <img className="ml-2" width={"45px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56Gnsv1-VbZYG78iHjLogURyJBAs_9m7ESQ&s" alt="twitter-logo" />
        </div>

        <div>
            <div className="flex items-center cursor-pointer gap-2 my-2 py-2 px-4  hover:bg-gray-300 rounded-full">
                <CiHome size={30}/>
                <h4 className="font-bold">Home</h4>
            </div>
            <div className="flex items-center cursor-pointer gap-2 my-2 py-2 px-4  hover:bg-gray-300 rounded-full">
                <CiSearch size={30}/>
                <h4 className=" font-bold">Explore</h4>
            </div>
            <div className="flex items-center cursor-pointer gap-2 my-2 py-2 px-4  hover:bg-gray-300 rounded-full">
                <IoMdNotificationsOutline size={30}/>
                <h4 className=" font-bold">Notifications</h4>
            </div>
            <div className="flex items-center cursor-pointer gap-2 my-2 py-2 px-4  hover:bg-gray-300 rounded-full">
                <BiMessageSquare size={27}/>
                <h4 className=" font-bold">Messages</h4>
            </div>
            <div className="flex items-center cursor-pointer gap-2 my-2 py-2 px-4  hover:bg-gray-300 rounded-full">
                <LiaClipboardListSolid size={30}/>
                <h4 className=" font-bold">Lists</h4>
            </div>
            <div className="flex items-center cursor-pointer  my-2 py-2 px-2  hover:bg-gray-300 rounded-full">
            <img width={"45px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56Gnsv1-VbZYG78iHjLogURyJBAs_9m7ESQ&s" alt="twitter-logo" />
                <h4 className=" font-bold">Premium</h4>
            </div>
            <div className="flex items-center cursor-pointer gap-2 my-2 py-2 px-4  hover:bg-gray-300 rounded-full">
                <CgProfile size={30}/>
                <h4 className="font-bold">Profile</h4>
            </div>
            <div className="flex items-center cursor-pointer gap-2 my-2 py-2 px-4  hover:bg-gray-300 rounded-full">
                <RiLogoutCircleRLine size={30}/>
                <h4 className="font-bold">Logout</h4>
            </div>

            <button className=" text-white font-semibold w-full py-2 rounded-full hover:scale-95 transition-all duration-300 bg-blue-600">Post</button>
            
        </div>
    </div>
  )
}

export default LeftSidebar