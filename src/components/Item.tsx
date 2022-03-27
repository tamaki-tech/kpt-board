import { Draggable } from "react-beautiful-dnd";
import { ItemType } from "../ItemType";
import "./Item.css";

type ItemPropsType = {
  item: ItemType;
  index: number;
};

const Item = (props: ItemPropsType, index: number) => {
  return (
    <Draggable draggableId={props.item.id} index={props.index}>
      {(provided) => (
        <div
          className="item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {props.item.content}
        </div>
      )}
    </Draggable>
  );
};

export default Item;
