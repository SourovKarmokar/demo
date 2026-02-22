export default function ListItem({ name, text, image , style }) {
  return (
    <div>
      <div className="row" style={style}>
        <img  src={image} alt={name} />

        <div className="content">
          <div>{name}</div>
          <div>{text}</div>
        </div>
      </div>
    </div>
  );
}
