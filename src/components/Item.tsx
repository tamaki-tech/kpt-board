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
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {props.item.content}
        </li>
      )}
    </Draggable>
  );
};

export default Item;
