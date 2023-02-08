import { useState } from "react";
import { excerpt } from "../../utils/helperFunctions";

const ReviewItem = ({ comment }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  return (
    <div>
      <p>
        {isReadMore && comment.length > 2 ? excerpt(comment, 120) : comment}{" "}
        &nbsp;
        <span
          onClick={() => setIsReadMore(!isReadMore)}
          className="fw-bolder"
          role="button"
        >
          {isReadMore ? "Read more..." : "Read less"}
        </span>
      </p>
    </div>
  );
};

export default ReviewItem;
