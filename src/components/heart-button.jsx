import { Heart } from "lucide-react";
import { useState } from "react";

export function HeartButton() {
	const [liked, setLiked] = useState(false);

	return (
		<button onClick={() => setLiked(!liked)}>
			{liked ? (
				<Heart size={20} fill="#e07b67" color="#e07b67" />
			) : (
				<Heart size={20} color="#e07b67" />
			)}
		</button>
	);
}
