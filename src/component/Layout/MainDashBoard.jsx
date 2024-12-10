import {NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa"
import { RxDashboard } from "react-icons/rx";
import { VscProject } from "react-icons/vsc";
import { GrTask } from "react-icons/gr";
import { MdForwardToInbox } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const MainDashBoard = () => {
    return (
        <div className="flex ">


        {/* side bar */}
        <div className="w-64 min-h-screen  bg-blue-300">
           <ul className="menu mt-[40%] p-4">
                {
            
                   <>
                     <p className="text-2xl font-bold  text-center">Chrono Task</p>
                     <div className="divider mb-12"></div>
                           <li>
                               <NavLink to="/mainDashBoard/dashBoard">
                                   
                                    <RxDashboard />
                                   <p className="font-semibold">DashBoard</p>

                               </NavLink>
                           </li>

                           <li>
                               <NavLink to="/mainDashBoard/projects">
                                    <VscProject />
                                  <p className="font-semibold">Projects</p>
                               </NavLink>
                           </li>

                           <li>
                               <NavLink to="/mainDashBoard/tasks">
                               <GrTask />  
                               <p className="font-semibold">Tasks</p>
                               </NavLink>
                           </li>
                           <li>
                               <NavLink to="/mainDashBoard/inbox">
                               <MdForwardToInbox />  
                               <p className="font-semibold">Inbox</p>
                               </NavLink>
                           </li>
                           <li>
                               <NavLink to="/mainDashBoard/setting">
                                          <IoSettingsOutline />
                                        <p className="font-semibold">Setting</p>
                               </NavLink>
                           </li>
                           
                   </>
                }
                    
                    {/* share nav links */}
                   <div className="divider mt-16"></div>

                   <li> 
                   <NavLink to="/">
                       <FaHome></FaHome>
                       Home
                       </NavLink> 
                   </li>

                   
           </ul>
        </div>

        {/* dashboard content */}
        <div className="flex-1 bg-blue-200 p-8">
             <Outlet></Outlet>
        </div>
   </div>
    );
};

export default MainDashBoard;