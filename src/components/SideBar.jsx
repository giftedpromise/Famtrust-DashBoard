import React, { useState } from "react";
import Logo from "../assets/dashboardImages/logo.png";
import { FaHome } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const SideBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-[328px] h-[1092px] fixed bg-custom-bg text-white  flex-shrink-0">
      <div className="flex flex-shrink-0 pt-6 pr-[59px] pl-8">
        <img src={Logo} alt="FamTrust Logo" className="w-[237px] h-[49px]" />
      </div>
      <div className="pt-4">
        <hr className="border-white" />
      </div>
      <div>
        <a
          href="#"
          className="flex items-center justify-between rounded-sm hover:bg-blue-800 mx-[26px] mt-[61px]"
          style={{
            borderRadius: "var(--radius-rounded-sm, 4px)",
            backgroundColor:
              "var(--Color-Style-Primary-Roles-Pri-color, #4567F7)",
            padding: "9px 10px",
          }}
          onClick={toggleDropdown}
        >
          <div className="flex items-center">
            <svg
              className="inline-block w-[20px] h-[20px] mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.5892 1.91098L18.0892 9.41098C18.6142 9.93598 18.2426 10.8335 17.5001 10.8335H16.6667V15.8335C16.6667 16.4965 16.4033 17.1324 15.9345 17.6012C15.4657 18.0701 14.8298 18.3335 14.1667 18.3335H13.3334V12.5001C13.3334 11.8625 13.0898 11.2489 12.6523 10.7849C12.2149 10.321 11.6166 10.0417 10.9801 10.0043L10.8334 10.0001H9.16674C8.5037 10.0001 7.86781 10.2635 7.39897 10.7324C6.93013 11.2012 6.66674 11.8371 6.66674 12.5001V18.3335H5.83341C5.17037 18.3335 4.53448 18.0701 4.06564 17.6012C3.5968 17.1324 3.33341 16.4965 3.33341 15.8335V10.8335H2.50007C1.75841 10.8335 1.38591 9.93598 1.91091 9.41098L9.41091 1.91098C9.56718 1.75475 9.7791 1.66699 10.0001 1.66699C10.221 1.66699 10.433 1.75475 10.5892 1.91098ZM10.8334 11.6668C11.0544 11.6668 11.2664 11.7546 11.4227 11.9109C11.5789 12.0672 11.6667 12.2791 11.6667 12.5001V18.3335H8.33341V12.5001C8.33343 12.296 8.40837 12.099 8.544 11.9465C8.67964 11.794 8.86653 11.6965 9.06924 11.6726L9.16674 11.6668H10.8334Z"
                fill="#F9F8FF"
              />
            </svg>
            <span
              style={{
                color: "var(--Color-Style-Primary-Roles-On-Pri-color, #F9F8FF)",
                fontFamily: "Lato, sans-serif",
                fontSize: "14px",
                fontWeight: "700",
                lineHeight: "20px",
                letterSpacing: "0.25px",
              }}
            >
              Home
            </span>
          </div>
          <FaChevronDown
            className={`inline-block w-[20px] h-[20px] transition-transform duration-200 ${
              isDropdownOpen ? "transform rotate-180" : ""
            }`}
          />
        </a>
        {isDropdownOpen && (
          <ul className="ml-[26px] mt-2">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:bg-blue-800 pt-[10px] pl-[66.5px]  rounded"
                style={{
                  color:
                    "var(--Color-Style-Primary-Roles-On-Pri-Container, #14183B)",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "20px",
                  letterSpacing: "0.25px",
                }}
              >
                <svg
                  className="inline-block w-[17px] h-[16px] ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M8.97144 1.5282L14.9714 7.5282C15.3914 7.9482 15.0941 8.6662 14.5001 8.6662H13.8334V12.6662C13.8334 13.1966 13.6227 13.7053 13.2477 14.0804C12.8726 14.4555 12.3639 14.6662 11.8334 14.6662H11.1668V9.99953C11.1668 9.48939 10.9719 8.99852 10.6219 8.62736C10.2719 8.25619 9.79337 8.03279 9.28411 8.00287L9.16677 7.99953H7.83344C7.30301 7.99953 6.7943 8.21025 6.41923 8.58532C6.04415 8.96039 5.83344 9.4691 5.83344 9.99953V14.6662H5.16677C4.63634 14.6662 4.12763 14.4555 3.75256 14.0804C3.37749 13.7053 3.16677 13.1966 3.16677 12.6662V8.6662H2.50011C1.90677 8.6662 1.60877 7.9482 2.02877 7.5282L8.02877 1.5282C8.15379 1.40322 8.32333 1.33301 8.50011 1.33301C8.67688 1.33301 8.84642 1.40322 8.97144 1.5282ZM9.16677 9.33287C9.34358 9.33287 9.51315 9.4031 9.63818 9.52813C9.7632 9.65315 9.83344 9.82272 9.83344 9.99953V14.6662H7.16677V9.99953C7.1668 9.83624 7.22674 9.67864 7.33525 9.55662C7.44376 9.43459 7.59327 9.35664 7.75544 9.33753L7.83344 9.33287H9.16677Z"
                    fill="#14183B"
                  />
                </svg>
                Overview
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex gap-2 items-center  hover:bg-blue-800 pt-[10px] pl-[66.5px] rounded"
                style={{
                  color:
                    "var(--Color-Style-Primary-Roles-On-Pri-Container, #14183B)",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "20px",
                  letterSpacing: "0.25px",
                }}
              >
                <svg
                  className="inline-block w-[17px] h-[16px] ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M8.97144 1.5282L14.9714 7.5282C15.3914 7.9482 15.0941 8.6662 14.5001 8.6662H13.8334V12.6662C13.8334 13.1966 13.6227 13.7053 13.2477 14.0804C12.8726 14.4555 12.3639 14.6662 11.8334 14.6662H11.1668V9.99953C11.1668 9.48939 10.9719 8.99852 10.6219 8.62736C10.2719 8.25619 9.79337 8.03279 9.28411 8.00287L9.16677 7.99953H7.83344C7.30301 7.99953 6.7943 8.21025 6.41923 8.58532C6.04415 8.96039 5.83344 9.4691 5.83344 9.99953V14.6662H5.16677C4.63634 14.6662 4.12763 14.4555 3.75256 14.0804C3.37749 13.7053 3.16677 13.1966 3.16677 12.6662V8.6662H2.50011C1.90677 8.6662 1.60877 7.9482 2.02877 7.5282L8.02877 1.5282C8.15379 1.40322 8.32333 1.33301 8.50011 1.33301C8.67688 1.33301 8.84642 1.40322 8.97144 1.5282ZM9.16677 9.33287C9.34358 9.33287 9.51315 9.4031 9.63818 9.52813C9.7632 9.65315 9.83344 9.82272 9.83344 9.99953V14.6662H7.16677V9.99953C7.1668 9.83624 7.22674 9.67864 7.33525 9.55662C7.44376 9.43459 7.59327 9.35664 7.75544 9.33753L7.83344 9.33287H9.16677Z"
                    fill="#14183B"
                  />
                </svg>
                Sub Account List
              </a>
            </li>
          </ul>
        )}
      </div>
      <ul>
        <li className="mb-6 px-9 flex items-center justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
            >
              <path
                d="M3.4 5.125C3.4 5.125 1.3428 5.87495 1 8.49977M14.6 5.125C14.6 5.125 16.6572 5.87495 17 8.49977M6.6 5.125C6.6 5.125 8.52 5.5626 9 7.74982C9.48 5.5626 11.4 5.125 11.4 5.125M7.4 10.7496C7.4 10.7496 5.72 11.0309 5 12.9995M10.6 10.7496C10.6 10.7496 12.28 11.0309 13 12.9995"
                stroke="#14183B"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M9 11.4997C10.1046 11.4997 11 10.6603 11 9.62487C11 8.58941 10.1046 7.75 9 7.75C7.89543 7.75 7 8.58941 7 9.62487C7 10.6603 7.89543 11.4997 9 11.4997Z"
                stroke="#14183B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.9996 5.4997C14.3251 5.4997 15.3996 4.49241 15.3996 3.24985C15.3996 2.00729 14.3251 1 12.9996 1C11.6741 1 10.5996 2.00729 10.5996 3.24985C10.5996 4.49241 11.6741 5.4997 12.9996 5.4997Z"
                stroke="#14183B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.99961 5.4997C6.32509 5.4997 7.39961 4.49241 7.39961 3.24985C7.39961 2.00729 6.32509 1 4.99961 1C3.67413 1 2.59961 2.00729 2.59961 3.24985C2.59961 4.49241 3.67413 5.4997 4.99961 5.4997Z"
                stroke="#14183B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a
              href="#"
              className="hover:bg-blue-800 p-2 rounded block nav-text"
            >
              Family Management
            </a>
          </div>
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="cursor-pointer"
          >
            <FaChevronDown
              style={{
                color:
                  "var(--Color-Style-Primary-Roles-On-Pri-Container, #14183b)",
              }}
              className={`inline-block w-[20px] h-[20px] transition-transform duration-200 ${
                isDropdownOpen ? "transform rotate-180" : "transform rotate-0"
              }`}
            />
          </div>
        </li>
        <li className="mb-6 px-9 flex items-center justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6.66667 11.3753V5.00033H9.16667V11.3753L7.91667 10.2087L6.66667 11.3753ZM10.8333 12.6253V1.66699H13.3333V10.1253L10.8333 12.6253ZM2.5 15.5003V8.33366H5V13.0003L2.5 15.5003ZM2.5 17.542L7.875 12.167L10.8333 14.7087L15.5 10.042H14.1667V8.37533H18.3333V12.542H16.6667V11.2087L10.9167 16.9587L7.95833 14.417L4.83333 17.542H2.5Z"
                fill="#14183B"
              />
            </svg>
            <a
              href="#"
              className="hover:bg-blue-800 p-2 rounded block nav-text"
            >
              Finance Management
            </a>
          </div>
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="cursor-pointer"
          >
            <FaChevronDown
              style={{
                color:
                  "var(--Color-Style-Primary-Roles-On-Pri-Container, #14183b)",
              }}
              className={`inline-block w-[20px] h-[20px] transition-transform duration-200 ${
                isDropdownOpen ? "transform rotate-180" : "transform rotate-0"
              }`}
            />
          </div>
        </li>
        <li className="mb-6 px-9 flex items-center justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_3001_4229)">
                <path
                  d="M3.33 8L10 12L20 6L10 0L0 6H10V8H3.33ZM0 8V16L2 13.78V9.2L0 8ZM10 20L5 17L3 15.8V9.8L10 14L17 9.8V15.8L10 20Z"
                  fill="#14183B"
                />
              </g>
              <defs>
                <clipPath id="clip0_3001_4229">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <a
              href="#"
              className="hover:bg-blue-800 p-2 rounded block nav-text"
            >
              Notification
            </a>
          </div>
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="cursor-pointer"
          >
            <FaChevronDown
              style={{
                color:
                  "var(--Color-Style-Primary-Roles-On-Pri-Container, #14183b)",
              }}
              className={`inline-block w-[20px] h-[20px] transition-transform duration-200 ${
                isDropdownOpen ? "transform rotate-180" : "transform rotate-0"
              }`}
            />
          </div>
        </li>
        <li className="mb-6 px-9 flex items-center justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 3H18C16.8954 3 16 3.89543 16 5V19C16 20.1046 16.8954 21 18 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                fill="#14183B"
              />
              <path
                d="M12.5 9H11.5C10.3954 9 9.5 9.89543 9.5 11V19C9.5 20.1046 10.3954 21 11.5 21H12.5C13.6046 21 14.5 20.1046 14.5 19V11C14.5 9.89543 13.6046 9 12.5 9Z"
                fill="#14183B"
              />
              <path
                d="M6 16H5C3.89543 16 3 16.8954 3 18V19C3 20.1046 3.89543 21 5 21H6C7.10457 21 8 20.1046 8 19V18C8 16.8954 7.10457 16 6 16Z"
                fill="#14183B"
              />
            </svg>
            <a
              href="#"
              className="hover:bg-blue-800 p-2 rounded block nav-text"
            >
              Setting
            </a>
          </div>
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="cursor-pointer"
          >
            <FaChevronDown
              style={{
                color:
                  "var(--Color-Style-Primary-Roles-On-Pri-Container, #14183b)",
              }}
              className={`inline-block w-[20px] h-[20px] transition-transform duration-200 ${
                isDropdownOpen ? "transform rotate-180" : "transform rotate-0"
              }`}
            />
          </div>
        </li>
        <li className="mb-6 px-9 flex items-center justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 3H18C16.8954 3 16 3.89543 16 5V19C16 20.1046 16.8954 21 18 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                fill="#14183B"
              />
              <path
                d="M12.5 9H11.5C10.3954 9 9.5 9.89543 9.5 11V19C9.5 20.1046 10.3954 21 11.5 21H12.5C13.6046 21 14.5 20.1046 14.5 19V11C14.5 9.89543 13.6046 9 12.5 9Z"
                fill="#14183B"
              />
              <path
                d="M6 16H5C3.89543 16 3 16.8954 3 18V19C3 20.1046 3.89543 21 5 21H6C7.10457 21 8 20.1046 8 19V18C8 16.8954 7.10457 16 6 16Z"
                fill="#14183B"
              />
            </svg>
            <a
              href="#"
              className="hover:bg-blue-800 p-2 rounded block nav-text"
            >
              Help & Support
            </a>
          </div>
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="cursor-pointer"
          >
            <FaChevronDown
              style={{
                color:
                  "var(--Color-Style-Primary-Roles-On-Pri-Container, #14183b)",
              }}
              className={`inline-block w-[20px] h-[20px] transition-transform duration-200 ${
                isDropdownOpen ? "transform rotate-180" : "transform rotate-0"
              }`}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
