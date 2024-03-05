// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Heart } from "lucide-react";

function HeartLikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <button onClick={() => setLiked(!liked)}>
        {liked ? (
          <Heart size={20} fill="#e07b67" color="#e07b67" />
        ) : (
          <Heart size={20} color="#e07b67" />
        )}
      </button>
    </div>
  );
}

export default HeartLikeButton;
