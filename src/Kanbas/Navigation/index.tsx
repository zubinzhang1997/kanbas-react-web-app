import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
    FaTachometerAlt,
    FaRegUserCircle,
    FaBook,
    FaRegCalendarAlt,
    FaQuestionCircle, FaInbox, FaHistory
} from "react-icons/fa";
import neulogo from './northeasternlogo.jpg'
import {FaArrowRightArrowLeft, FaComputer} from "react-icons/fa6";
function KanbasNavigation() {
    const links = [
        { label: "Account",   icon: <FaRegUserCircle className="wd-icon-account" />  },
        { label: "Dashboard", icon: <FaTachometerAlt className="wd-icon" />  },
        { label: "Courses",   icon: <FaBook className="wd-icon" />           },
        { label: "Calendar",  icon: <FaRegCalendarAlt className="wd-icon" /> },
        { label: "Inbox",  icon: <FaInbox className="wd-icon" /> },
        { label: "History",  icon: <FaHistory className="wd-icon" /> },
        { label: "Studio",  icon: <FaComputer className="wd-icon" /> },
        { label: "Commons",  icon: <FaArrowRightArrowLeft className="wd-icon" /> },
        { label: "Help",  icon: <FaQuestionCircle className="wd-icon" /> },

    ];
    const { pathname } = useLocation();
    return (
        <div>
            <div className="list-group wd-kanbas-navigation">
                <a href="https://www.northeastern.edu" target="_blank" rel="noopener noreferrer">
                    <img src={neulogo} alt="Northeastern University Logo" className="logo"></img>
                </a>
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={`/Kanbas/${link.label}`}
                        className={`list-group-item ${pathname.includes(link.label) && "active"}`}>
                        {link.icon}<br/>
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );

}
export default KanbasNavigation;

