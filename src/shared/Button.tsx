interface ButtonProps {
  title: string;
  type: "button" | "submit" | "reset";
  classname: string;
  trigger: () => void;
}

export default function Button({
  title,
  trigger,
  type,
  classname,
}: ButtonProps) {
  return (
    <button onClick={trigger} type={type} className={classname}>
      {title}
    </button>
  );
}
