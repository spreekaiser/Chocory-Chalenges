import React from "react";

export default function Pet({ animal, icon, color, cuteness }) {
  return (
    <div>
      <span>
        {animal} {icon} {color} {cuteness}
      </span>
    </div>
  );
}
