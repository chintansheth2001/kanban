import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import TasksBox from "./TasksBox";
import { AppContext } from "./AppContext";
import { DRAG_AND_DROP_CARD } from "./ActionType";

import "./TaskRow.scss";

function TaskRow() {
  const [state, dispatch] = React.useContext(AppContext);
  const { projects } = state;

  const activeProject = projects.filter((i) => i.active);
  const { tasksCol } = activeProject[0];
  const onDragEnd = (result) => {
    //console.log(result);
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    dispatch({ type: DRAG_AND_DROP_CARD, payload: result });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="task-row">
        {tasksCol.map((i, index) => (
          <TasksBox
            key={i.id}
            id={i.id}
            color={i.color}
            title={i.title}
            addBtn={index === 0}
            tasks={i.tasks}
          />
        ))}
      </div>
    </DragDropContext>
  );
}

export default TaskRow;
