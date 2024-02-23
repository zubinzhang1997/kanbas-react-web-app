import JavaScript from "./JavaScript";
import Classes from "./Classes";
import PathParameters from "./routing/PathParameters";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
function Assignment3() {
    return (
        <div className="container" style={{ padding: 0, margin: 0 }}>
            <Styles/>
            <Classes/>
            <PathParameters/>
            <h1>Assignment 3</h1>
            <TodoItem/>
            <TodoList/>
            <ConditionalOutput/>
            <JavaScript/>
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>
            <Add a={3} b={4} />

        </div>
    );
}
export default Assignment3;