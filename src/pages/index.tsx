import { NextPageWithLayout } from "@simple-quicks/app/interface/main.interface";
import MainPages from "@simple-quicks/app/page-modules/main-pages";
import React from "react";

const Dashboard: NextPageWithLayout = () => {

  return (
    <MainPages />
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <>{page}</>;
};
