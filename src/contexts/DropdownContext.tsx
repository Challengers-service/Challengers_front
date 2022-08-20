import Item from "components/@common/Select/Item";
import Menu from "components/@common/Select/Menu";
import Trigger from "components/@common/Select/Trigger";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface DropdownContextValue {
  isOpen: boolean;
  select: string;
  handleOpen: () => void;
  handleClose: () => void;
  handleSelctAndClose: (item: string) => void;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

interface Props {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export function Dropdown({
  value,
  children,
  onChange,
}: PropsWithChildren<Props>) {
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState(value);

  const firstMounded = useRef(true);
  useEffect(() => {
    if (!firstMounded.current) {
      onChange && onChange(select);
    }
    firstMounded.current = false;
  }, [select]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = (item?: string) => {
    setIsOpen(false);
  };
  const handleSelctAndClose = (item: string) => {
    handleClose();
    setSelect(item);
  };
  return (
    <DropdownContext.Provider
      value={{ isOpen, select, handleOpen, handleClose, handleSelctAndClose }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (context === null) {
    throw new Error(
      "useDropdownContext must be used within a DropdownProvider"
    );
  }
  return context;
};

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.Item = Item;
