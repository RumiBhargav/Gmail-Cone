import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import{PiDotsNineBold} from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setUser } from "../../Redux/AppSlice";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [input,setInput]=useState("");
 const [toggle,setToggle]=useState(false);
 const { user } = useSelector(store => store.appSlice);

 const signOutHandler=()=>{
  signOut(auth).then((response)=>{
    dispatch(setUser(null));
  }).catch((error)=>{
    console.log(error);
  })
  }
 

  const dispatch=useDispatch();
  
 useEffect(()=>{
  dispatch(setSearchText(input));
 },[input]);
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu size={"20px"} />
          </div>
          <img
            className="w-8"
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            alt="gamillogo"
          />
          <h1 class="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB px-2 py-3 rounded-full">
          <IoIosSearch size={"20px"} className="text-gray-700" />
          <input
          value={input}
          onChange={(e)=>setInput(e.target.value)}
            type="text"
            placeholder="Search Mail"
            className="rounded-full w-full bg-transparent outline-none px-1"
          />
        </div>
      </div>
      <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiCircleQuestion size={"20px "} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiSettings size={"20px "} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <PiDotsNineBold size={"20px "} />
          </div>
         {/* avatar */}
         {/* <div className='relative cursor-pointer'>
            <Avatar onClick={() => setToggle(!toggle)} src={user?.photoURL} googleId="118096717852922241760" size="40" round={true} />
            <AnimatePresence>
              {
                toggle && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.1 }}
                    className='absolute right-2 z-20 shadow-lg bg-white rounded-md'>
                    <p onClick={signOutHandler} className='p-2 underline'>LogOut</p>
                  </motion.div>
                )
              }
            </AnimatePresence>
          </div> */}
         </div>
      </div>
    </div>
  );
};

export default Navbar;
