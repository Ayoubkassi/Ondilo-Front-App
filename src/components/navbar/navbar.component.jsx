import NavbarItem from "../navbar-item/navbar-item.component";
import { Main , Logo , Logout } from "./navbar.styles";
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { IoStatsChartSharp } from 'react-icons/io5';
import { AiFillSetting } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';
import { IoLogOut } from 'react-icons/io5';

const data = [
    {
      "icon" : AiOutlineUser,
      "name" : "Profile"
    },{
        "icon" : BiCalendar,
        "name" : "Schedule"
    },{
        "icon" : IoStatsChartSharp,
        "name" : "Overview"
    },{
        "icon" : BsFillChatDotsFill,
        "name" : "Chat"
    },{
        "icon" : AiFillSetting,
        "name" : "Settings"
    }
  ]

const Navbar = () => {
    return (
        <>
        <Main>
            <Logo>Ondilo</Logo>
            {
                data.map((item) => (
                    <NavbarItem key={item.name} name={item.name} icon={item.icon} />
                ))
            }
            <Logout>
                <NavbarItem key="logout" name="Logout" icon={IoLogOut} />
            </Logout> 
        </Main>
        </>
    );
}

export default Navbar;

