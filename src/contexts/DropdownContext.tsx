import Item from "components/@common/Select/Item";
import Menu from "components/@common/Select/Menu";
import Trigger from "components/@common/Select/Trigger";
import useOutsideClick from "hooks/useOutSideClick";
import {
  createContext,
  PropsWithChildren,
  useCallback,
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
  value?: string;
  initialValue?: string;
  onChange?: (newSelect: string) => void;
}

export function Dropdown({
  value,
  children,
  onChange,
  initialValue = "선택",
}: PropsWithChildren<Props>) {
  const [isOpen, setOpen] = useState(false);
  const [select, setSelect] = useState(initialValue);

  const getSelect = () => (isControlled ? value : select);

  const isControlled = value !== undefined && !!onChange;

  const firstMounded = useRef(true);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, setOpen);

  useEffect(() => {
    if (!firstMounded.current && !isControlled) {
      onChange && onChange(select);
    }
    firstMounded.current = false;
  }, [select, isControlled, onChange]);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleSelctAndClose = useCallback((item: string) => {
    handleSelectChange(item);
    handleClose();
  }, []);

  const handleSelectChange = (newValue: string) => {
    isControlled ? onChange(newValue) : setSelect(newValue);
  };

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        select: getSelect(),
        handleOpen,
        handleClose,
        handleSelctAndClose,
      }}
    >
      <div
        ref={ref}
        style={{
          position: "relative",
          width: "fit-content",
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
