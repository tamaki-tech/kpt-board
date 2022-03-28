import { Typography } from "@material-ui/core";
import { useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { ItemType } from "../ItemType";
import InputForm from "./InputForm";
import List from "./List";
import "./Board.css"

type BoardProps = {
  label: string;
};

const Board = (props: BoardProps) => {
  const [state, setState] = useState({ items: [] as ItemType[] });
  const [itemState, setItem] = useState("");

  const reorder = (
    list: ItemType[],
    startIndex: number,
    endIndex: number
  ): ItemType[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const items = reorder(
      state.items,
      result.source.index,
      result.destination.index
    );

    setState({ items });
  };

  const handleOnChange = (content: string) => {
    setItem(content);
  };

  const handleOnAdd = () => {
    const newItem: ItemType = {
      id: (state.items.length + 1).toString(),
      content: itemState,
    };
    const newItems: ItemType[] = [...state.items, newItem];
    setState({ items: newItems });
  };

  return (
    <div className="frame">
      <Typography variant="h5" component="div">
        {props.label}
      </Typography>
      <InputForm
        item={itemState}
        onNameChange={(content) => handleOnChange(content)}
        onAdd={() => handleOnAdd()}
      />
      <div className="box">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="list">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <List items={state.items}></List>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Board;
