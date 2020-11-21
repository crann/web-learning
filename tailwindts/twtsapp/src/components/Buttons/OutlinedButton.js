import React, { useState } from "react";

const OutlinedButton = () => {
  const [isBusy, setisBusy] = useState(false);

  return (
    <>
      <button
        type="button"
        disabled={isBusy}
        class={`focus:outline-none border border-blue-600 pl-2 pr-2 h-10 rounded ${
          isBusy
            ? "text-gray-400 hover:text-gray-400"
            : "text-black hover:text-gray-800"
        } hover:border-blue-700 borderrounded`}
      >
        <div class="flex">
          {isBusy ? (
            <svg
              class="h-5 w-5 mt-1 stroke-current text-black"
              viewBox="0 0 50 50"
            >
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
          ) : null}
          Processing
        </div>
      </button>
    </>
  );
};

export default OutlinedButton;

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
