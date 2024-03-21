import React from "react";
import "./index.css";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";
import {FaCheckCircle, FaEllipsisV, FaPlusCircle} from "react-icons/fa";
import {PiDotsThreeVerticalBold} from "react-icons/pi";


function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) => state.modulesReducer.module);
    const dispatch = useDispatch();



    return (
        <ul className="list-group">
            <li className="list-group-item">
                <div className="button-group">

                    <button className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                        Add
                    </button>
                    <span className="button-spacer"></span>
                    <button className="btn btn-warning" onClick={() => dispatch(updateModule(module))}>
                        Update
                    </button>
                </div>
                <div className="textarea-container">
                    <input
                        value={module.name}
                        onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                        placeholder="New Module"
                        className="form-control"
                    />
                </div>
                <div className="textarea-container">
          <textarea
              value={module.description}
              onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
              placeholder="New Description"
              className="form-control"
          />
                </div>
            </li>
            {moduleList
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <li key={index} className="list-group-item">
                        <span className="float-end ">
                            <button className="btn btn-danger delete-button me-2"
                                onClick={() => dispatch(deleteModule(module._id))}>
                                Delete
                            </button>
                            <button className="btn btn-success delete-button me-2"
                                onClick={() => dispatch(setModule(module))}>
                                Edit
                            </button>
                            <FaCheckCircle className="text-success" />
                            <PiDotsThreeVerticalBold className="fs-3" />

                        </span>
                        <h3>{module.name}</h3>

                        <p>{module.description}</p>



                    </li>
                ))}
        </ul>
    );
}

export default ModuleList;