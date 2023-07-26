import Input, { InputPros } from "../Input/Input";
import styles from "./FileInput.module.scss";

interface FileInputProps extends InputPros {
  label: string;
}

const FileInput: React.FC<FileInputProps> = ({ label, id, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <Input id={id} {...props} />
    </div>
  );
};

export default FileInput;
