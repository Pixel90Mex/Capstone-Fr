import React from "react";
import UserNavigationBar from "../components/UserArea/UserNavigationBar";
import UserHome from "../components/UserArea/UserHome";

const UserArea = () => {
    return (
      <>
          <UserNavigationBar />      
          <UserHome/>
      </>
    );
  }
  
  export default UserArea;