import { Link, useLocation } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments
function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Assignments",
    "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements",
    "Pages", "Files", "Rubrics", "Outcomes", "Collaboration", "Syllabus", "Settings"];
    const { pathname } = useLocation();
    return (
        <div className="d-flex">
            <div className="d-block">
                <div className="d-md-block d-none">
                    <ul className="wd-navigation">
                        <span id="courses-sidebar-title" className=".wd-modules">
                                202410_1 Spr....
                            </span>
                        {links.map((link, index) => (
                            <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
                                <Link to={link}>{link}</Link>
                            </li>
                        ))}
                    </ul>


                </div>
            </div>
        </div>

    );
}
export default CourseNavigation;



