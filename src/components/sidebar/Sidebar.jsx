import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
  return (
    // sidebar for single movie page
    <div className="w-[226px] hidden lg:block bg-white border-r rounded-r-[45px]">
      <Link href="/">
        <div className="flex space-x-4 px-4 items-center my-8 cursor-pointer">
          <Image src="/tv.png" alt="logo" height={50} width={50} />
          <h1 className="text-black font-semibold text-[24px] pt-2 hidden sm:flex">
            MovieBox
          </h1>
        </div>
      </Link>
      <div className="my-8">
        <ul className="block py-6">
          <Link href="/">
            <div className="pb-3 px-8 mb-6">
              <li className="relative cursor-pointer h-[48px] flex space-x-3 px-6">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g filter="url(#filter0_d_1320_684)">
                    <rect
                      x="2"
                      y="1"
                      width="25"
                      height="25"
                      fill="url(#pattern0)"
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1320_684"
                      x="0"
                      y="0"
                      width="29"
                      height="29"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1320_684"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1320_684"
                        result="shape"
                      />
                    </filter>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1">
                      <use
                        xlinkHref="#image0_1320_684"
                        transform="scale(0.01)"
                      />
                    </pattern>
                    <image
                      id="image0_1320_684"
                      width="100"
                      height="100"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
                <span className="font-semibold">Home</span>
              </li>
            </div>
          </Link>
          <div className="bg-[#be123c1a] border border-r-[#be123c] border-r-[3px] pt-4 px-8 mb-6">
            <li className="relative cursor-pointer h-[48px] flex space-x-3 px-6">
              <svg
                viewBox="0 -2 32 32"
                version="1.1"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlnssketch="http://www.bohemiancoding.com/sketch/ns"
                fill="#a0a0a0">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <title>movie-recorder</title>
                  <desc>Created with Sketch Beta.</desc> <defs> </defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd">
                    <g
                      id="Icon-Set"
                      transform="translate(-204.000000, -517.000000)"
                      fill="#a0a0a0">
                      <path
                        d="M234,543 L228,538 L228,535 L234,531 L234,543 L234,543 Z M223,529.012 C220.232,529.012 217.989,526.768 217.989,524 C217.989,521.232 220.232,518.989 223,518.989 C225.768,518.989 228.011,521.232 228.011,524 C228.011,526.768 225.768,529.012 223,529.012 L223,529.012 Z M226,541 C226,542.104 225.104,543 224,543 L208,543 C206.896,543 206,542.104 206,541 L206,533 C206,531.896 206.896,531 208,531 L224,531 C225.104,531 226,531.896 226,533 L226,541 L226,541 Z M206,525 C206,522.791 207.791,521 210,521 C212.209,521 214,522.791 214,525 C214,527.209 212.209,529 210,529 C207.791,529 206,527.209 206,525 L206,525 Z M234,529 L228,533 C228,531.786 227.448,530.712 226.594,529.979 C228.626,528.753 230,526.546 230,524 C230,520.134 226.866,517 223,517 C219.134,517 216,520.134 216,524 C216,525.962 216.812,527.729 218.111,529 L214.443,529 C215.4,527.937 216,526.544 216,525 C216,521.687 213.313,519 210,519 C206.687,519 204,521.687 204,525 C204,526.809 204.816,528.41 206.082,529.511 C204.847,530.191 204,531.49 204,533 L204,541 C204,543.209 205.791,545 208,545 L224,545 C226.209,545 228,543.209 228,541 L228,540 L234,545 C235.104,545 236,544.104 236,543 L236,531 C236,529.896 235.104,529 234,529 L234,529 Z"
                        id="movie-recorder"></path>
                    </g>
                  </g>
                </g>
              </svg>

              <span className="font-semibold">Movies</span>
            </li>
          </div>
          <div className="pt-4 px-8 mb-6">
            <li className="relative cursor-pointer h-[48px] flex space-x-3 px-6">
              <svg
                fill="#a0a0a0"
                height="25"
                width="25"
                viewBox="0 -6 46 46"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    id="_24.TV"
                    d="M46,37H2a1,1,0,0,1-1-1V8A1,1,0,0,1,2,7H46a1,1,0,0,1,1,1V36A1,1,0,0,1,46,37ZM45,9H3V35H45ZM21,16a.975.975,0,0,1,.563.2l7.771,4.872a.974.974,0,0,1,.261,1.715l-7.974,4.981A.982.982,0,0,1,21,28a1,1,0,0,1-1-1V17A1,1,0,0,1,21,16ZM15,39H33a1,1,0,0,1,0,2H15a1,1,0,0,1,0-2Z"
                    transform="translate(-1 -7)"></path>
                </g>
              </svg>
              <span className="font-semibold">Tv shows</span>
            </li>
          </div>

          <div className="pt-4 px-8 mb-6">
            <li className="relative cursor-pointer h-[48px] flex space-x-3 px-6">
              <svg
                fill="#a0a0a0"
                height="25"
                width="25"
                viewBox="0 0 100.353 100.353"
                id="Layer_1"
                version="1.1"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M32.286,42.441h-9.762c-0.829,0-1.5,0.671-1.5,1.5v9.762c0,0.828,0.671,1.5,1.5,1.5h9.762c0.829,0,1.5-0.672,1.5-1.5 v-9.762C33.786,43.113,33.115,42.441,32.286,42.441z M30.786,52.203h-6.762v-6.762h6.762V52.203z"></path>
                    <path d="M55.054,42.441h-9.762c-0.829,0-1.5,0.671-1.5,1.5v9.762c0,0.828,0.671,1.5,1.5,1.5h9.762c0.828,0,1.5-0.672,1.5-1.5 v-9.762C56.554,43.113,55.882,42.441,55.054,42.441z M53.554,52.203h-6.762v-6.762h6.762V52.203z"></path>
                    <path d="M77.12,42.441h-9.762c-0.828,0-1.5,0.671-1.5,1.5v9.762c0,0.828,0.672,1.5,1.5,1.5h9.762c0.828,0,1.5-0.672,1.5-1.5v-9.762 C78.62,43.113,77.948,42.441,77.12,42.441z M75.62,52.203h-6.762v-6.762h6.762V52.203z"></path>
                    <path d="M32.286,64.677h-9.762c-0.829,0-1.5,0.672-1.5,1.5v9.762c0,0.828,0.671,1.5,1.5,1.5h9.762c0.829,0,1.5-0.672,1.5-1.5 v-9.762C33.786,65.349,33.115,64.677,32.286,64.677z M30.786,74.439h-6.762v-6.762h6.762V74.439z"></path>
                    <path d="M55.054,64.677h-9.762c-0.829,0-1.5,0.672-1.5,1.5v9.762c0,0.828,0.671,1.5,1.5,1.5h9.762c0.828,0,1.5-0.672,1.5-1.5 v-9.762C56.554,65.349,55.882,64.677,55.054,64.677z M53.554,74.439h-6.762v-6.762h6.762V74.439z"></path>
                    <path d="M77.12,64.677h-9.762c-0.828,0-1.5,0.672-1.5,1.5v9.762c0,0.828,0.672,1.5,1.5,1.5h9.762c0.828,0,1.5-0.672,1.5-1.5v-9.762 C78.62,65.349,77.948,64.677,77.12,64.677z M75.62,74.439h-6.762v-6.762h6.762V74.439z"></path>
                    <path d="M89,13.394h-9.907c-0.013,0-0.024,0.003-0.037,0.004V11.4c0-3.268-2.658-5.926-5.926-5.926s-5.926,2.659-5.926,5.926v1.994 H56.041V11.4c0-3.268-2.658-5.926-5.926-5.926s-5.926,2.659-5.926,5.926v1.994H33.025V11.4c0-3.268-2.658-5.926-5.926-5.926 s-5.926,2.659-5.926,5.926v1.995c-0.005,0-0.01-0.001-0.015-0.001h-9.905c-0.829,0-1.5,0.671-1.5,1.5V92.64 c0,0.828,0.671,1.5,1.5,1.5H89c0.828,0,1.5-0.672,1.5-1.5V14.894C90.5,14.065,89.828,13.394,89,13.394z M70.204,11.4 c0-1.614,1.312-2.926,2.926-2.926s2.926,1.312,2.926,2.926v8.277c0,1.613-1.312,2.926-2.926,2.926s-2.926-1.312-2.926-2.926V11.4z M50.115,8.474c1.613,0,2.926,1.312,2.926,2.926v8.277c0,1.613-1.312,2.926-2.926,2.926c-1.614,0-2.926-1.312-2.926-2.926v-4.643 c0.004-0.047,0.014-0.092,0.014-0.141s-0.01-0.094-0.014-0.141V11.4C47.189,9.786,48.501,8.474,50.115,8.474z M24.173,11.4 c0-1.614,1.312-2.926,2.926-2.926c1.613,0,2.926,1.312,2.926,2.926v8.277c0,1.613-1.312,2.926-2.926,2.926 c-1.614,0-2.926-1.312-2.926-2.926V11.4z M87.5,91.14H12.753V16.394h8.405c0.005,0,0.01-0.001,0.015-0.001v3.285 c0,3.268,2.659,5.926,5.926,5.926s5.926-2.658,5.926-5.926v-3.283h11.164v3.283c0,3.268,2.659,5.926,5.926,5.926 s5.926-2.658,5.926-5.926v-3.283h11.163v3.283c0,3.268,2.658,5.926,5.926,5.926s5.926-2.658,5.926-5.926V16.39 c0.013,0,0.024,0.004,0.037,0.004H87.5V91.14z"></path>
                  </g>
                </g>
              </svg>
              <span className="font-semibold">Upcoming</span>
            </li>
          </div>
        </ul>
        <div className="my-4 mx-8 px-3 py-3 border rounded-md">
          <h1 className="font-semibold">
            Play movie quizes and earn free tickets
          </h1>
          <p className="py-3 text-gray-500 text-xs">
            50k people are playing now
          </p>
          <button className="px-4 mx-4 py-2 font-semibold text-[#be123c] text-xs rounded-full bg-[#be123c33]">
            Start playing
          </button>
        </div>

        <div className="py-6 px-8 my-24">
          <li className="relative cursor-pointer h-[48px] flex space-x-3 px-6">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              width="29"
              height="29"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M21 12L13 12"
                  stroke="#a0a0a0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9"
                  stroke="#a0a0a0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19"
                  stroke="#a0a0a0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
              </g>
            </svg>
            <span className="font-semibold">Log Out</span>
          </li>
        </div>
      </div>
    </div>
  );
};
