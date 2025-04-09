export function Info({ name, title, location }) {
  return (
    <div>
      <h2 className="text-xl font-bold">
        {name}
        <p>Muffin Man</p>
      </h2>
      <p className="text-gray-600">{title}Baker</p>
      <p className="text-gray-500 text-sm">{location}Nairobi, Kenya</p>
    </div>
  );
}
