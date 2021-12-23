interface Props {
  className?: string;
  children: React.ReactNode;
}

const Heading = (props: Props) => {
  return <h1 className={props.className}>{props.children}</h1>
}

export default Heading;