import "./leftBar.scss"
import Friends from "../../assets/icons8-team-48.png"
import Groups from "../../assets/icons8-users-48.png"
import Market from "../../assets/icons8-online-store-48.png"
import Watch from "../../assets/icons8-laptop-play-video-48.png"
import Memories from "../../assets/icons8-time-machine-48.png"
import Events from "../../assets/icons8-schedule-48.png"
import Gaming from "../../assets/icons8-game-controller-48.png"
import Gallery from "../../assets/icons8-image-gallery-48.png"
import Videos from "../../assets/icons8-video-48.png"
import Messages from "../../assets/icons8-speech-bubble-48.png"
import Fundraiser from "../../assets/icons8-peace-pigeon-48.png"
import Tutorials from "../../assets/icons8-e-learning-48.png"
import Courses from "../../assets/icons8-books-48.png"
import { AuthContext } from "../../context/authContext"
import { useContext } from "react";

const LeftBar = () => {
const {currentUser} = useContext(AuthContext)

    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={currentUser.profilePic} alt=""/>
                        <span>{currentUser.name}</span>
                    </div>
                    <div className="item">
                        <img src={Friends} alt=""/>
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={Groups} alt=""/>
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={Market} alt=""/>
                        <span>Marketplace</span>
                    </div>
                    <div className="item">
                        <img src={Watch} alt=""/>
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={Memories} alt=""/>
                        <span>Memories</span>
                    </div>
                </div>
                <hr/>
                <div className="menu">
                    <span>Your shortcuts</span>
                    <div className="item">
                        <img src={Events} alt=""/>
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={Gaming} alt=""/>
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        <img src={Gallery} alt=""/>
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <img src={Videos} alt=""/>
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <img src={Messages} alt=""/>
                        <span>Messages</span>
                    </div>
                </div>
                <hr/>
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        <img src={Fundraiser} alt=""/>
                        <span>Fundraiser</span>
                    </div>
                    <div className="item">
                        <img src={Tutorials} alt=""/>
                        <span>Tutorials</span>
                    </div>
                    <div className="item">
                        <img src={Courses} alt=""/>
                        <span>Courses</span>
                    </div>
                </div>
                <hr/>
                <span>App icons by <a href="https://icons8.com/">Icons8</a></span>
            </div>
        </div>
    )
}

export default LeftBar