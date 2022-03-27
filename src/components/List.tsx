import { ItemType } from "../ItemType";
import Item from "./Item";

type ListPropType = {
  items: ItemType[];
};

const List = (props: ListPropType) => {
  return (
    <>
      {props.items.map((item, index: number) => (
        <Item item={item} index={index} key={item.id} />
      ))}
    </>
  );
};

export default List;
