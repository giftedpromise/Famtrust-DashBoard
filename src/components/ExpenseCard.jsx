import React from "react";

const ExpenseCard = () => {
  return (
    <div
      className="bg-white rounded-lg shadow-md"
      style={{
        width: "293px",
        height: "360px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 className="text-xl font-semibold mb-4">Expenses</h2>
      <div className="space-y-4 flex-grow">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-500">Income</span>
            <span className="text-blue-600">₦1000.00</span>
          </div>
          <div className="text-red-500">-10.00%</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-500">Foodstuff</span>
            <span className="text-red-600">₦2,500.00</span>
          </div>
          <div className="text-green-500">+8.00%</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-500">Electronics</span>
            <span className="text-blue-600">₦200.00</span>
          </div>
          <div className="text-green-500">+3.00%</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-500">Rent</span>
            <span className="text-blue-600">₦450.00</span>
          </div>
          <div className="text-green-500">+7.00%</div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
