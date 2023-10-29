import React from "react";

export default function Arrow({ direction, type, toSlide }) {
  return (
    <button
      className={`${direction}-${type}-arrow`}
      type="button"
      onClick={() => toSlide(direction === "left" ? "prev" : "next")}
    >
      {direction === "left" ? "\u2329" : "\u232a"}
    </button>
  );
}
