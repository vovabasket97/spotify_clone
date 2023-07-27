import { UseFormRegisterReturn } from "react-hook-form";
import Input, { InputPros } from "../Input/Input";
import styles from "./FileInput.module.scss";

interface FileInputProps extends InputPros {
  label: string;
  register: UseFormRegisterReturn;
}

const FileInput: React.FC<FileInputProps> = ({ label, id, register, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <Input id={id} {...props} {...register} />
    </div>
  );
};

export default FileInput;
