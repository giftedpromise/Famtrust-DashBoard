import React from "react";
import ProfileCard from "./ProfileCard";
import ProgressCard from "./ProgressCard";
import CardSection from "./cardsection/Cardsection";

import ExpenseCard from "./ExpenseCard";
import RecentTransactions from "./RecentTransaction";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:ml-[330px] p-6 space-y-6 lg:space-y-0 lg:space-x-6">
        <ProfileCard />
        <ProgressCard />
      </div>
      <div className="px-6">
        <CardSection />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:ml-[330px] m-6 pl-6">
        <RecentTransactions />
        <ExpenseCard />
      </div>
    </div>
  );
};

export default Dashboard;
