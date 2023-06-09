import "./navBar.scss"
import {Link} from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined"
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {

    const { toggle, darkMode} = useContext(DarkModeContext)
    const { currentUser } = useContext(AuthContext)

    return (
        <div className="navBar">
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span>MySocial</span>
                </Link>
                <HomeOutlinedIcon/>
                {!darkMode ? <DarkModeOutlinedIcon onClick={toggle}/> : <WbSunnyOutlinedIcon onClick={toggle}/>}
                <GridViewOutlinedIcon/>
                <div className="search">
                    <SearchOutlinedIcon/>
                <input type="text" placeholder="Search..."/>
            </div>
            </div>
            
            <div className="right">
                <PersonOutlinedIcon/>
                <MailOutlinedIcon/>
                <NotificationsNoneOutlinedIcon/>
                <div className="user">
                    <img src={currentUser.profilePic} alt=""/>
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar