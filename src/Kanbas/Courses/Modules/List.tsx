import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <>
            <div className="d-flex flex-row justify-content-end straight-button my-4">
                <button className="btn btn-light me-1 ellipsis" type="button">
                    Collapse All
                </button>
                <button className="btn btn-light me-1 ellipsis" type="button">
                    View Progress
                </button>
                <div className="dropdown">
                    <button className="btn btn-light btn-outline-secondary dropdown-toggle"
                            type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaCheckCircle className="ms-2 text-success" /> Publish All
                    </button>
                </div>
                <button className="btn btn-danger me-1 ellipsis" type="button">
                    <i className="fa fa-plus" aria-hidden="true"></i> Module
                </button>
                <button className="btn btn-light btn-outline-secondary">
                    <FaEllipsisV className="mb-1"/>
                </button>
            </div>


            <ul className="list-group wd-modules">
                {modulesList.map((module, index) => (
                    <li key={index}
                        className="list-group-item"
                        onClick={() => setSelectedModule(module)}>
                        <div>
                            <FaEllipsisV className="me-2" />
                            {module.name}
                            <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
                        </div>
                        {selectedModule._id === module._id && (
                            <ul className="list-group">
                                {module.lessons?.map((lesson, index) => (
                                    <li className="list-group-item" key={index}>
                                        <FaEllipsisV className="me-2" />
                                        {lesson.name}
                                        <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ModuleList;