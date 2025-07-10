import { TrashBinIcon } from "@/src/shared/icons";
import s from "./styles.module.css";
import { Button } from "@/src/shared/ui";

const Clear = ({ remove }: ClearProps) => {
  return (
    <Button
      variant="secondary"
      icon={<TrashBinIcon />}
      onClick={remove}
      className={s.clear}
    >
      Очистить
    </Button>
  );
};

interface ClearProps {
  remove: () => void;
}

export default Clear;
