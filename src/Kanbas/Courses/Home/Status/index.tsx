import {
    FaCheckCircle, FaFileImport, FaBullseye,
    FaChartBar, FaRegBell, FaBan, FaRegArrowAltCircleLeft
} from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { useParams } from "react-router-dom";
import { assignments } from "../../../Database";
import "./index.css";
import React from "react";

function Status() {

    const buttons = [
        { text: "Import Existing Content", icon:  <FaFileImport />},
        { text: "Import From Commons", icon: <FaRegArrowAltCircleLeft />},
        { text: "Choose Home Page", icon: <FaBullseye /> },
        { text: "View Course Stream", icon: <FaChartBar /> },
        { text: "New Announcement", icon: <GrAnnounce />},
        { text: "New Analytics", icon: <FaChartBar /> },
        { text: "View Course Notifications", icon: <FaRegBell />},]

    const { courseId } = useParams();
    const todos = assignments.filter(
        (assignment) => assignment.course === courseId);

    return (
        <>

            <h4 className="mt-4">Course Status</h4>
            <hr/>
            <div className="d-flex button-one mb-4">
                <button
                    type="button" className="btn btn-light btn-outline-secondary">
                    <FaBan /> Unpublish
                </button>
                <button type="button" className="btn btn-success" disabled>
                    <FaCheckCircle /> Published
                </button>
            </div>

            <div className="button-two mb-3">
                {buttons.map((btn, index) => (
                        <button
                            type="button"
                            className="btn btn-light btn-outline-secondary mt-1">
                            {btn.icon} {btn.text}
                        </button>
                    )
                )}
            </div>

            <div className="d-flex flex-column mt-3 right-sidebar-to-do">
                <h5 className="mb-0">To Do</h5>
            </div><hr/>
            <div className="d-flex flex-row to-do-item ">
                <div className="col-2 mt-1">
                    <span className="fa fa-stack-1x"></span>
                </div>
                <div className="col-9">
                    <div className="d-flex flex-column">
                        <div>
                            <a href="#" className="to-do-item-title link-red">Grade A1 - ENV + HTML</a>
                        </div>
                        <div className="to-do-item-detail right-sidebar-detail">100 points * Sep 18 at
                            11:59pm
                        </div>
                        <div>
                            <a href="#" className="to-do-item-title link-red">Grade A2 - CSS + BOOTSTRAP</a>
                        </div>
                        <div className="to-do-item-detail right-sidebar-detail">100 points * Oct 2 at
                            11:59pm
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Status;