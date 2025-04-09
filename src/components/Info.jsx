export function Info({ name, title, location }) {
	return (
		<div>
			<h2 className="text-xl font-bold">{name}</h2>
			<p className="text-gray-600">{title}</p>
			<p className="text-gray-500 text-sm">{location}</p>
		</div>
	);
}
