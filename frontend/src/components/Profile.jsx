import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";



const Profile = () => {
  return (
    <div className=' w-[50%] mx-auto'>
        <div className=" flex items-center py-1 px-2 ">
            <div className=" w-[12%] p-2 hover:bg-gray-100 cursor-pointer">
                <Link to={'/home'}>
                <IoArrowBack size={22}/>
                </Link>
            
            </div>
            <div className=" w-[80%]">
            <h4 className=" font-bold text-lg leading-[0.90rem]">Shubham</h4>
            <p className=" text-gray-500 text-sm">10 post</p>
            </div>   
            <div className=" w-[12%]"></div>
        </div>


        <div className=' relative '>
            <img className=' top-0 left-0 ' src="	https://pbs.twimg.com/profile_banners/3193911588/1712252766/1080x360"   alt="banner" />

            <div className="   absolute -bottom-14 border-[5px] overflow-hidden border-white left-4 rounded-full">
            <Avatar
              className=" "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUem1ykMgZrm7P2GNRhID1fnipTWf1kQ1dA&s"
              twitterHandle="sitebase"
              size="130"
            />
            </div>
           
            <div className="  bottom-1 right-1 absolute">
            <button className=" px-4 py-2  rounded-full bg-white hover:bg-gray-300 transition-all duration-300" >Edit Profile</button>
           </div>   
        </div>

        <div>
        <div className=" w-[70%]">
                <div className=" h-[65px]"></div>
                <h4 className=" font-bold text-xl">
                    Shubham Bhardwaj
                </h4>   
                <p>@shubham</p>

                <p className=" font-semibold my-2">Code is like humor. When you have to explain it, it’s bad.
                BCA Graduate | Ex-SEBI as ASE | Coder | Hustler</p>
            </div>   
        </div>
        
    </div>
  )
}

export default Profile