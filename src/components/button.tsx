interface buttonProps {
  text: string;
  type?: "primary" | "secondary" | "third" | "fourth";
}

function Button(props: buttonProps) {
  const buttonType = props.type ? `button-${props.type}` : "button-primary";

  return <button className={`button ${buttonType}`}>{props.text}</button>;
}
export default Button;
