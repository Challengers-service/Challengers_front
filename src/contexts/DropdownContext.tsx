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

export type DropdownContextType = "default" | "button" | "home" | "radio";

interface DropdownContextValue {
  isOpen: boolean;
  select: string;
  handleOpen: () => void;
  handleClose: () => void;
  handleSelect: (item: string) => void;
  type: DropdownContextType;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

interface Props {
  value?: string;
  initialValue?: string;
  onChange?: (newSelect: string) => void;
  type?: DropdownContextType;
  isAlwaysOpen?: boolean;
  className?: string;
}

export function Dropdown({
  value,
  children,
  onChange,
  initialValue = "선택",
  type = "default",
  isAlwaysOpen = false,
  className,
}: PropsWithChildren<Props>) {
  const [isOpen, setOpen] = useState(false);
  const [select, setSelect] = useState(initialValue);

  /* value가 없으면서 onChange가 없으면 제어권 없음 */
  const isControlled = value !== undefined && !!onChange;

  /* 제어권이 있을때는 제어중인 value값을 제어권이 없을때는 Context가 제어중인 select를 반환 */
  const getSelect = () => (isControlled ? value : select);

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
    !isAlwaysOpen && setOpen(true);
  }, [isAlwaysOpen]);

  const handleClose = useCallback(() => {
    !isAlwaysOpen && setOpen(false);
  }, [isAlwaysOpen]);

  const handleSelect = useCallback(
    (item: string) => {
      isControlled ? onChange(item) : setSelect(item);
      handleClose();
    },
    [isControlled, isAlwaysOpen]
  );

  return (
    <DropdownContext.Provider
      value={{
        isOpen: isAlwaysOpen ? true : isOpen,
        select: getSelect(),
        handleOpen,
        handleClose,
        handleSelect,
        type,
      }}
    >
      <div
        ref={ref}
        style={{
          position: "relative",
          width: "fit-content",
        }}
        className={className}
        data-open={isOpen ? "open" : "close"}
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
