import Avatar from "react-avatar"
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";




const Tweet = () => {
  return (
    <div className=''>
        <div className="">
            <div className=" flex p-4">
            <Avatar
              className=" rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7MUANej77UsPeJYcyuPd46KXyeuwi8m5yw&s"
              twitterHandle="sitebase"
              size="40"
            />
            
            <div className=" flex items-center ml-2">
   <p className=" font-semibold">Shubham</p>
                <p className=" text-gray-500 text-sm ml-2">@shubhamMernStack  .1m</p>
         </div>
            </div>

            <div className=" ml-2">
            <p>Hello developers lets connect and grow together.</p>
        </div>

        <div className=" flex justify-between">
            <div><BiLike/></div>
            <div><FaRegComment/></div>
            <div><FaRegBookmark/></div>
        </div>
        </div>

      
    </div>
  )
}

export default Tweet