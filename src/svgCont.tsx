import React from "react";

const SvgContainer = () => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 0,
      }}
    >
      <svg
        width="291"
        height="351"
        viewBox="0 0 291 351"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_1_1504)">
          <path
            d="M273.74 0.920044H234.74C227.467 0.943622 220.365 3.12713 214.334 7.19354C208.304 11.26 203.618 17.026 200.87 23.76C196.35 34.7647 188.66 44.1771 178.778 50.8012C168.895 57.4253 157.267 60.962 145.37 60.962C133.473 60.962 121.845 57.4253 111.963 50.8012C102.08 44.1771 94.3906 34.7647 89.8701 23.76C87.1222 17.026 82.4357 11.26 76.4055 7.19354C70.3753 3.12713 63.2731 0.943622 56 0.920044H17C12.4913 0.920044 8.16737 2.71111 4.97925 5.89923C1.79113 9.08735 0 13.4114 0 17.92V334C0 338.509 1.79113 342.833 4.97925 346.021C8.16737 349.209 12.4913 351 17 351H273.74C278.249 351 282.573 349.209 285.761 346.021C288.949 342.833 290.74 338.509 290.74 334V17.92C290.74 13.4114 288.949 9.08735 285.761 5.89923C282.573 2.71111 278.249 0.920044 273.74 0.920044Z"
            fill="url(#paint0_linear_1_1504)"
            fill-opacity="0.1"
          />
          <path
            d="M201.333 23.95L201.333 23.9489C204.044 17.3066 208.666 11.6191 214.614 7.60809C220.562 3.59722 227.567 1.44346 234.741 1.42004H273.74C278.116 1.42004 282.313 3.15843 285.407 6.25278C288.502 9.34714 290.24 13.544 290.24 17.92V334C290.24 338.376 288.502 342.573 285.407 345.667C282.313 348.762 278.116 350.5 273.74 350.5H17C12.6239 350.5 8.42715 348.762 5.3328 345.667C2.23845 342.573 0.5 338.376 0.5 334V17.92C0.5 13.544 2.23845 9.34714 5.3328 6.25278C8.42715 3.15843 12.6239 1.42004 17 1.42004H55.9992C63.173 1.44346 70.1781 3.59722 76.126 7.60809C82.074 11.6191 86.6967 17.3066 89.4072 23.949L89.4076 23.95C93.9657 35.0464 101.72 44.5372 111.684 51.2165C121.649 57.8958 133.374 61.462 145.37 61.462C157.366 61.462 169.091 57.8958 179.056 51.2165C189.021 44.5372 196.775 35.0464 201.333 23.95Z"
            stroke="url(#paint1_linear_1_1504)"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_1_1504"
            x="-100"
            y="-99.08"
            width="490.74"
            height="550.08"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="50" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_1_1504"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_1_1504"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1_1504"
            x1="145.37"
            y1="0.920044"
            x2="145.37"
            y2="377"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#626A88" />
            <stop offset="1" stop-color="#2E3149" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_1504"
            x1="145.37"
            y1="0.920044"
            x2="145.37"
            y2="377"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#ECF0FF" stop-opacity="0.1" />
            <stop offset="1" stop-color="#2E3149" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SvgContainer;
