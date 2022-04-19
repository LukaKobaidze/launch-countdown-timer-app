import styles from 'styles/Heading.module.scss';

interface Props {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ level, children, className }: Props) => {
  const HeadingLevel: keyof JSX.IntrinsicElements = `h${level}`;
  return (
    <HeadingLevel className={`${styles.heading} ${className}`}>
      {children}
    </HeadingLevel>
  );
};

export default Heading;
