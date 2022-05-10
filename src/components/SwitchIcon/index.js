import { IoIosMusicalNotes, IoMdMusicalNote } from "react-icons/io";
import { BsPlayBtnFill, BsNewspaper } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import ReactIcon from "../ReactIcon";

function switchIcon(name) {
  switch (name) {
    case "music":
      return <IoIosMusicalNotes />;
    case "search":
      return <FaSearch />;
    case "news":
      return <BsNewspaper />;
    case "video":
      return <BsPlayBtnFill />;

    default:
      return <IoMdMusicalNote />;
  }
}

function SwitchIcon(props) {
  const { name, size, className } = props;
  return (
    <ReactIcon size={size} className={className}>
      {switchIcon(name)}
    </ReactIcon>
  );
}

export default SwitchIcon;
