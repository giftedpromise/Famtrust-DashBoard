import React from "react";
import userImage from "../assets/dashboardImages/userimg.png"; // Replace with your actual image path

const ProfileCard = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "245px",
        padding: "24px",
        paddingLeft: "24px",
        paddingTop: "24px",
        flexDirection: "column",
        justifyContent: "center",

        alignItems: "start",

        borderRadius: "16px",
        border:
          "1px solid var(--Color-Style-Surface-Roles-Surface-container-highest, #E2E2E2)",
        background: "var(--Color-Style-Primary-Roles-On-Pri-color, #F9F8FF)",
        "@media (maxWidth: 640px)": {
          width: "100%" /* Full width on small screens */,
        },
      }}
      className="relative z-10"
    >
      <div className="flex gap-4">
        <img src={userImage} alt="Profile" className="w-16 h-16 rounded-full" />
        <div>
          {" "}
          <p
            className="text-lg font-semibold"
            style={{
              color: "#000",
              fontFamily: "Lato, sans-serif",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "24px",
              letterSpacing: "0.5px",
            }}
          >
            Ritji Ishaku
          </p>
          <p
            style={{
              color: "#ABABAB",
              fontFamily: "Lato, sans-serif",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "20px",
              letterSpacing: "0.25px",
            }}
          >
            Main Account
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col">
          <p className="mt-4">Total Savings</p>
          <p className="custom-text-style">₦1000.00</p>{" "}
        </div>

        <div className="flex items-center justify-between mr-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <g opacity="0.9">
              <path
                d="M20.2005 11.5302C20.1308 11.6 20.0481 11.6553 19.9571 11.693C19.866 11.7308 19.7684 11.7502 19.6699 11.7502C19.5713 11.7502 19.4737 11.7308 19.3826 11.693C19.2916 11.6553 19.2089 11.6 19.1392 11.5302L13.6699 6.05993V20.7496C13.6699 20.9485 13.5908 21.1393 13.4502 21.2799C13.3095 21.4206 13.1188 21.4996 12.9198 21.4996C12.7209 21.4996 12.5302 21.4206 12.3895 21.2799C12.2489 21.1393 12.1698 20.9485 12.1698 20.7496V6.05993L6.70048 11.5302C6.55974 11.671 6.36887 11.75 6.16985 11.75C5.97083 11.75 5.77996 11.671 5.63923 11.5302C5.4985 11.3895 5.41943 11.1986 5.41943 10.9996C5.41943 10.8006 5.4985 10.6097 5.63923 10.469L12.3892 3.71899C12.4589 3.64926 12.5416 3.59394 12.6326 3.55619C12.7237 3.51845 12.8213 3.49902 12.9198 3.49902C13.0184 3.49902 13.116 3.51845 13.2071 3.55619C13.2981 3.59394 13.3808 3.64926 13.4505 3.71899L20.2005 10.469C20.2702 10.5386 20.3255 10.6214 20.3633 10.7124C20.401 10.8035 20.4204 10.9011 20.4204 10.9996C20.4204 11.0982 20.401 11.1958 20.3633 11.2868C20.3255 11.3779 20.2702 11.4606 20.2005 11.5302Z"
                fill="#00710B"
              />
            </g>
          </svg>
          <p className="text-green-600">80.06%</p>
        </div>

        <div className="flex items-center justify-between gap-1">
          <p class="small-body-text">8327642732</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
          >
            <g clip-path="url(#clip0_1418_28751)">
              <path
                opacity="0.3"
                d="M5.30396 4.17871H11.3356V11.8554H5.30396V4.17871Z"
                fill="#4567F7"
              />
              <path
                d="M9.69083 0.888672H3.11083C2.50766 0.888672 2.01416 1.38217 2.01416 1.98534V9.66201H3.11083V1.98534H9.69083V0.888672ZM11.3358 3.08201H5.30416C4.70099 3.08201 4.20749 3.57551 4.20749 4.17867V11.8553C4.20749 12.4585 4.70099 12.952 5.30416 12.952H11.3358C11.939 12.952 12.4325 12.4585 12.4325 11.8553V4.17867C12.4325 3.57551 11.939 3.08201 11.3358 3.08201ZM11.3358 11.8553H5.30416V4.17867H11.3358V11.8553Z"
                fill="#4567F7"
              />
            </g>
            <defs>
              <clipPath id="clip0_1418_28751">
                <rect
                  width="13.16"
                  height="13.16"
                  fill="white"
                  transform="translate(0.919922 0.339844)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M9.01733 8.62467C8.74633 8.62459 8.47807 8.67888 8.22843 8.78434C7.97878 8.88979 7.75284 9.04427 7.56397 9.23862L5.22296 7.73397C5.4071 7.26176 5.4071 6.73759 5.22296 6.26538L7.56397 4.76073C7.91561 5.12093 8.38847 5.33773 8.89087 5.3691C9.39328 5.40047 9.88943 5.24418 10.2831 4.93051C10.6769 4.61685 10.9401 4.16817 11.0218 3.67146C11.1035 3.17476 10.9978 2.66541 10.7253 2.24217C10.4528 1.81893 10.0329 1.51195 9.54687 1.38075C9.06088 1.24956 8.54349 1.30348 8.09501 1.53208C7.64653 1.76068 7.29891 2.14767 7.11954 2.61801C6.94017 3.08835 6.94183 3.60854 7.12421 4.07772L4.78319 5.58237C4.50129 5.29295 4.13948 5.09418 3.74403 5.01146C3.34857 4.92873 2.93742 4.96582 2.56315 5.11797C2.18888 5.27013 1.86848 5.53044 1.64292 5.86563C1.41736 6.20082 1.29688 6.59566 1.29688 6.99967C1.29687 7.40369 1.41736 7.79853 1.64292 8.13372C1.86848 8.46891 2.18888 8.72922 2.56315 8.88137C2.93742 9.03353 3.34857 9.07061 3.74403 8.98789C4.13948 8.90517 4.50129 8.70639 4.78319 8.41698L7.12421 9.92163C6.96738 10.3261 6.94417 10.7702 7.05799 11.1888C7.1718 11.6074 7.41665 11.9786 7.75669 12.248C8.09673 12.5174 8.51409 12.6709 8.94765 12.686C9.38122 12.701 9.80821 12.5768 10.1661 12.3316C10.524 12.0865 10.794 11.7331 10.9365 11.3234C11.0791 10.9137 11.0867 10.469 10.9583 10.0547C10.8299 9.64028 10.5722 9.27789 10.2229 9.02057C9.87364 8.76325 9.45116 8.62451 9.01733 8.62467ZM9.01733 2.12467C9.25838 2.12467 9.49401 2.19615 9.69443 2.33007C9.89486 2.46399 10.0511 2.65433 10.1433 2.87703C10.2356 3.09973 10.2597 3.34478 10.2127 3.58119C10.1656 3.8176 10.0496 4.03477 9.87912 4.20521C9.70868 4.37566 9.49152 4.49173 9.2551 4.53876C9.01869 4.58578 8.77364 4.56165 8.55094 4.4694C8.32824 4.37716 8.1379 4.22095 8.00398 4.02052C7.87006 3.8201 7.79858 3.58447 7.79858 3.34342C7.79858 3.02019 7.92699 2.7102 8.15555 2.48164C8.38411 2.25308 8.6941 2.12467 9.01733 2.12467ZM3.32983 8.21842C3.08879 8.21842 2.85316 8.14695 2.65273 8.01303C2.45231 7.87911 2.2961 7.68877 2.20386 7.46607C2.11161 7.24337 2.08748 6.99832 2.1345 6.76191C2.18153 6.52549 2.2976 6.30833 2.46805 6.13789C2.63849 5.96744 2.85565 5.85137 3.09207 5.80434C3.32848 5.75732 3.57353 5.78145 3.79623 5.8737C4.01893 5.96594 4.20927 6.12215 4.34319 6.32257C4.47711 6.52299 4.54858 6.75863 4.54858 6.99967C4.54858 7.32291 4.42018 7.6329 4.19162 7.86146C3.96306 8.09002 3.65307 8.21842 3.32983 8.21842ZM9.01733 11.8747C8.77629 11.8747 8.54066 11.8032 8.34023 11.6693C8.13981 11.5354 7.9836 11.345 7.89136 11.1223C7.79911 10.8996 7.77498 10.6546 7.822 10.4182C7.86903 10.1817 7.9851 9.96458 8.15555 9.79414C8.32599 9.62369 8.54315 9.50762 8.77957 9.46059C9.01598 9.41357 9.26103 9.4377 9.48373 9.52995C9.70643 9.62219 9.89677 9.7784 10.0307 9.97882C10.1646 10.1792 10.2361 10.4149 10.2361 10.6559C10.2361 10.9792 10.1077 11.2892 9.87912 11.5177C9.65056 11.7463 9.34057 11.8747 9.01733 11.8747Z"
              fill="#4567F7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
