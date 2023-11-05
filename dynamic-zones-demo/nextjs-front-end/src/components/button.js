const Button = (props) => (
  <a
    href={props.href}
    className="inline-block bg-red-900 px-4 py-2 rounded hover:bg-red-950 transition"
  >
    {props.children}
  </a>
);

export default Button;
