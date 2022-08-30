import React from "react";
import InnerPageBanner from "../components/Common/InnerPageBanner";
import PageError from "../components/Common/PageError";
const ImageUrl = "./images/errorpage-bg.jpg"

const Page404 = () => {
  return (
    <>
      <InnerPageBanner PageTitle="404 Error" LinkText="404 Error" backgroundImage={ImageUrl} />
      <PageError />
    </>
  );
};

export default Page404;
