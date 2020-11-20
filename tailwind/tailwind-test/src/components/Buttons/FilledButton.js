import React from "react";

const FilledButton = () => {
  return (
    <>
      <button
        type="button"
        class="focus:outline-none border-none pl-2 pr-2 h-10 rounded bg-blue-600 text-white hover:bg-blue-700 borderrounded"
      >
        Processing
      </button>
    </>
  );
};

export default FilledButton;

/*
 <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(1 1)" stroke-width="2">
              <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </g>
        </svg>
*/
