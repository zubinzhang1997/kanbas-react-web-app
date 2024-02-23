import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import "../index.css";
import React from "react";
import {FaFileExport, FaFileImport, FaFilter} from "react-icons/fa";
import {FaGear, FaMagnifyingGlass} from "react-icons/fa6";

function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>
            <div className="mt-4 me-2">
                <div className="wd-float-right">
                    <button type="button" className="me-2 btn btn-light btn-outline-secondary">
                        <FaFileImport className="mb-1 me-2"/>
                        <span style={{ color: 'black' }}>Import</span>
                    </button>
                    <button className="btn btn-light btn-outline-secondary dropdown-toggle"
                            type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaFileExport className="mb-1 me-2"/>
                        <span style={{ color: 'black' }}>Export</span>
                    </button>
                    <ul className="dropdown-menu"></ul>
                    <button type="button" className="btn btn-light btn-outline-secondary">
                        <FaGear className="mb-1"/>
                    </button>
                </div>
                <br />
                <div className="row">
                    <div className="col-6 mb-3">
                        <label className="form-label"><strong>Student Names</strong></label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="magni1">
                                <FaMagnifyingGlass />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Students"
                                aria-label="Search students"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                    </div>
                    <div className="col-6 mb-3">
                        <label className="form-label"><strong>Assignment Names</strong></label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="magni1">
                                <FaMagnifyingGlass />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Assignments"
                                aria-label="Search assignments"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn btn-light btn-outline-secondary px-3">
                        <FaFilter />
                        <span style={{ color: 'black' }}>Apply Filters</span>
                    </button>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-bordered wd-table">
                    <thead className="border">
                    <th className=""> Student Name</th>
                    {as.map((assignment) => (<th className="wd-table-assi">
                        {assignment.title}<br/>Out of 100
                    </th>))}
                    </thead>
                    <tbody>
                    {es.map((enrollment) => {
                        const user = users.find((user) => user._id === enrollment.user);
                        return ( user?.role === 'STUDENT' &&
                            <tr>
                                <td className="wd-table-name">{user?.firstName} {user?.lastName}</td>
                                {assignments.map((assignment) => {
                                    const stu_grade = grades.find(
                                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                    return (
                                        courseId === assignment.course &&
                                        <td className="wd-table-assi">{stu_grade?.grade || ""}%</td>);})}
                            </tr> );
                    })}
                    </tbody></table>
            </div></div>
    );
}
export default Grades;

