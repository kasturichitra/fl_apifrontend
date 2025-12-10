import "../styles/ui.css"

export const Heading = ({ level = 2, id, children }) => {
  const Tag = `h${level}`;
  return <Tag id={id} className={`heading h${level}`}>{children}</Tag>;
};

export const Paragraph = ({ children }) => <p className="paragraph">{children}</p>;

export const List = ({ children, ordered = false }) => {
  const Tag = ordered ? "ol" : "ul";
  return <Tag className="list">{children}</Tag>;
};

export const ListItem = ({ children }) => <li className="list-item">{children}</li>;

export const CodeBlock = ({ children }) => <pre className="code_block_docu">{children}</pre>;
