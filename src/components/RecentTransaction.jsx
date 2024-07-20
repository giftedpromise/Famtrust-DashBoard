import React from "react";

const RecentTransactions = () => {
  return (
    <div
      className="bg-purple-50 rounded-lg shadow-md"
      style={{
        width: "580px",
        height: "360px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <button
          className="flex items-center bg-white p-2 rounded-lg focus:outline-none"
          style={{ border: "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            className="mr-2"
          >
            <path
              d="M11.9531 8C11.9531 8.18648 11.879 8.36532 11.7472 8.49718C11.6153 8.62905 11.4365 8.70312 11.25 8.70312H3.75C3.56352 8.70312 3.38468 8.62905 3.25282 8.49718C3.12095 8.36532 3.04688 8.18648 3.04688 8C3.04688 7.81352 3.12095 7.63468 3.25282 7.50282C3.38468 7.37095 3.56352 7.29688 3.75 7.29688H11.25C11.4365 7.29688 11.6153 7.37095 11.7472 7.50282C11.879 7.63468 11.9531 7.81352 11.9531 8ZM13.5938 4.48438H1.40625C1.21977 4.48438 1.04093 4.55845 0.909066 4.69032C0.777204 4.82218 0.703125 5.00102 0.703125 5.1875C0.703125 5.37398 0.777204 5.55282 0.909066 5.68468C1.04093 5.81655 1.21977 5.89062 1.40625 5.89062H13.5938C13.7802 5.89062 13.9591 5.81655 14.0909 5.68468C14.2228 5.55282 14.2969 5.37398 14.2969 5.1875C14.2969 5.00102 14.2228 4.82218 14.0909 4.69032C13.9591 4.55845 13.7802 4.48438 13.5938 4.48438ZM8.90625 10.1094H6.09375C5.90727 10.1094 5.72843 10.1835 5.59657 10.3153C5.4647 10.4472 5.39062 10.626 5.39062 10.8125C5.39062 10.999 5.4647 11.1778 5.59657 11.3097C5.72843 11.4415 5.90727 11.5156 6.09375 11.5156H8.90625C9.09273 11.5156 9.27157 11.4415 9.40343 11.3097C9.5353 11.1778 9.60938 10.999 9.60938 10.8125C9.60938 10.626 9.5353 10.4472 9.40343 10.3153C9.27157 10.1835 9.09273 10.1094 8.90625 10.1094Z"
              fill="#4567F7"
            />
          </svg>
          <h1>Sort by</h1>
        </button>
      </div>
      <div className="space-y-4 flex-grow">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center text-white">
              I
            </div>
            <span className="ml-4">Internet</span>
          </div>
          <div>11 July, 2024</div>
          <div className="text-blue-600">₦1,000.00</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="h-8 w-8 rounded-full"
              src="https://via.placeholder.com/150"
              alt="Johnson LA"
            />
            <span className="ml-4">Johnson LA</span>
          </div>
          <div>10 July, 2024</div>
          <div className="text-blue-600">₦1,500.00</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-green-500 h-8 w-8 rounded-full flex items-center justify-center text-white">
              R
            </div>
            <span className="ml-4">Rent</span>
          </div>
          <div>08 July, 2024</div>
          <div className="text-green-600">₦2,450.00</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center text-white">
              W
            </div>
            <span className="ml-4">Water</span>
          </div>
          <div>06 July, 2024</div>
          <div className="text-blue-600">₦1,500.00</div>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
