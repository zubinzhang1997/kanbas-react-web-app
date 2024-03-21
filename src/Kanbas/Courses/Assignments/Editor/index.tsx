import React, {useState} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../index.css";
import {FaCheckCircle, FaEllipsisV} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
    addAssignment,
    updateAssignment,
} from "../reducer";
import {KanbasState} from "../../../store";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignments = useSelector(
        (state: KanbasState) => state.assignmentsReducer.assignments
    );

    const assignment = assignments.find(assignment => assignment._id === assignmentId) ||
        {
            _id: new Date().toString,
            title: "New Assignment",
            description: "New Assignment Description",
            points: 100,
            course: "RS101"
        };
    const { courseId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [localAssignment, setLocalAssignment] = useState({ ...assignment });
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setLocalAssignment((prev: any) => ({ ...prev, [name]: value }));
    };


    const handleSave = () => {
        {assignmentId === "new" ? dispatch(addAssignment(localAssignment))
            : dispatch(updateAssignment(localAssignment))}
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <>
            <div className="d-flex align-items-center float-end mb-4">
                <div className="d-block px-5 text-success">
                    <FaCheckCircle className="text-success" style={{ marginRight: '5px' }} />
                    <b>Published</b>
                </div>
                <button type="button" className="btn btn-light btn-outline-secondary px-3" style={{ marginTop: '10px' }}>
                    <FaEllipsisV />
                </button>
            </div>
            <div>
                <h2>Assignment Name</h2>
                <input defaultValue={assignment.title} className="form-control mb-2" name="title"
                       onChange={handleChange}
                />
                <div className="mb-3">
                <textarea className="form-control mb-3" id="assiDes" name="description"
                          onChange={handleChange}>
          {assignment.description}
      </textarea>
                </div>
                <div className="row">
                    <div className="col-md-3 text-end">
                        <label htmlFor="assignment_points" className="form-label">Points</label>
                    </div>
                    <div className="col-md-6 mb-3">
                        <input type="number" id="points" className="form-control" defaultValue="100" max="100" min="0"
                               name="points"
                               onChange={handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 text-end">
                        <label className="form-label"
                        >Assignment Group</label
                        >
                    </div>
                    <div className="col-md-6 mb-3 form-group">
                        <div className="dropdown">
                            <button
                                type="button"
                                className="form-control wd-button-style px-3 d-flex justify-content-between align-items-center"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <span>ASSIGNMENTS</span>
                                <span><i className="fa fa-caret-down"></i></span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 text-end">
                        <label className="form-label"
                        >Display Grade as</label>
                    </div>
                    <div className="col-md-6 mb-3 form-group">
                        <div className="dropdown">
                            <button
                                type="button"
                                className="form-control wd-button-style px-3 d-flex justify-content-between align-items-center"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <span>Percentage</span>
                                <span><i className="fa fa-caret-down"></i></span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 text-end"></div>
                    <div className="col-md-6 mb-3 form-group">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="edit-count-grade"
                        />
                        <label className="form-check-label" htmlFor="edit-count-grade"
                        >Do not count this assignment towards the final grade</label
                        >
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 text-end"></div>
                    <div className="col-md-6 mb-3 form-group">
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 text-end">
                        <label className="form-label">Assign</label>
                    </div>
                    <div className="col-md-6 mb-3 form-group">
                        <div className="border p-2 wd-assign-border">
                            <div className="form-group">
                                <label htmlFor="edit-assign-to"><b>Assign to</b></label>
                                <select id="edit-assign-to" className="form-control mb-3">
                                    <option value="VAL1" selected>Everyone</option>
                                </select>
                            </div>
                            <div className="col-md-12 mb-3">
                                <label htmlFor="due-date" className="fw-bold">Due</label>
                                <input type="date" className="form-control mb-3" value={assignment.dueDate}

                                       name="dueDate" id="due-date"
                                       onChange={handleChange}/>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="date2"><b>Available from</b></label>
                                    <input type="date" className="form-control mb-3" value={assignment.availableDate}
                                           name="availableDate" id="available-date"
                                           onChange={handleChange}/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="date3"><b>Until</b></label>
                                    <input type="date" className="form-control mb-3" value={assignment.untilDate}
                                           name="untilDate" id="until-date"
                                           onChange={handleChange}/>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-light border w-100">
                            <i className="fa fa-plus"></i> Add
                        </button>
                    </div>
                </div>
                <hr />
                <div className="mb-3">
                    <div className="form-check d-inline p=0">
                        <input className="form-check-input ms-2" type="checkbox" id="notifyUsers"></input>
                        <label className="form-check-label ps-2" htmlFor="notifyUsers">
                            Notify users that this content has changed
                        </label>
                    </div>
                    <button onClick={handleSave} className="btn btn-success ms-2 float-end">
                        Save
                    </button>
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                          className="btn btn-danger float-end">
                        Cancel
                    </Link>
                </div>
            </div>
        </>
    );

}
export default AssignmentEditor;