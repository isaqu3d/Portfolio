type ParagraphProps = {
  children: string;
  className?: string;
};

export function Paragraph({ children, className }: ParagraphProps) {
  return <p className={`text-justify indent-5 ${className}`}>{children}</p>;
}
