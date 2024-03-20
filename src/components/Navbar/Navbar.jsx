import { useState } from "react";
import Link from "../LInk/Link";
import { VscMenu } from "react-icons/vsc";
import { MdRestaurantMenu } from "react-icons/md";






const Navbar = () => {

    // useState
    
    const [open , setOpen] = useState(false)

    const routes = [
        {"name":"Home","id":1,"path":"/home"},
        {"name":"About","id":2,"path":"/about"},
        {"name":"Services","id":3,"path":"/services"},
        {"name":"Portfolio","id":4,"path":"/portfolio"},
        {"name":"Contact","id":5,"path":"/contact"}
      ]
      
      
    return (
        <div>


            <nav>

                <button className="md:hidden text-2xl"  onClick={()=>setOpen(!open)} >

                    {
                        open === true ?  <MdRestaurantMenu className="ml-4" /> : <VscMenu className="ml-4"/>
                    }
     

                </button>
            

               <ul className={`md:flex p-5 duration-1000 gap-2 absolute md:static ${open ? 'left-0' : '-left-60'}`}>
               {
                    routes.map(route => <Link key={route.id} route={route} ></Link>)
                }

               </ul>
            </nav>
            
        </div>
    );
};

export default Navbar;