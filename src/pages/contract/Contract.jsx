import React, { useEffect } from "react";
import Nav from "./component/nav/Nav";
import Search from "./component/search/Search";
import ListContract from "./component/list-contract/ListContract";

const Contract = () => {

  return (
    <div className="w-full h-full p-20">
      <div className="w-4/5 mx-auto">
        <Nav />
        <div className ="w-full my-10">
          <Search />
        </div>
        <div className ="w-full my-10">
          <ListContract/>
        </div>
      </div>
    </div>
  );
};

export default Contract;
