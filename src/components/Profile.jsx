import { Avatar } from "./Avatar";
import { Info } from "./Info";

export function Profile({ name, title, location, avatar }) {
	return (
		<div className="bg-white rounded-lg shadow p-6 flex gap-4 items-center">
			<Avatar/>
			<Info name="Muffin Man" title="Baker" location="Nairobi, Kenya" />
		</div>
	);
}
