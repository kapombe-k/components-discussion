export function Info(props) {
  return (
    <div>
      <h2 className="text-xl font-bold">{props.name}</h2>
      <p className="text-gray-600">{props.title}</p>
      <p className="text-gray-500 text-sm">{props.location}</p>
    </div>
  );
};
