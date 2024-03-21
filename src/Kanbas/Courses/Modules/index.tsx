import ModuleList from "./List";
import React from "react";
import {AiFillCheckCircle, AiOutlinePlus} from "react-icons/ai";
import {FaEllipsisV} from "react-icons/fa";
function Modules() {
    return (
        <div>
            <h2>Modules</h2>
            <div>
                <button className="btn btn-light float-end mx-1"><FaEllipsisV /></button>
                <button className="btn btn-danger float-end mx-1"><AiOutlinePlus />Module</button>
                <div className="dropdown float-end mx-1">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <AiFillCheckCircle />
                        Publish All
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <button className="btn btn-secondary float-end mx-1">View Progress</button>
                <button className="btn btn-secondary float-end mx-1">Collapse All</button>
                <br></br>
                <br></br>
            </div>
            <ModuleList />
        </div>
    );
}

export default Modules;