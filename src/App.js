import React from "react"

import UserToken from "./components/User/UserToken";
import UserInfo from "./components/User/UserInfo";
import Commits from "./components/Commit/CommitList"
function App() {
  return (
    <div >
      <UserToken />
      <UserInfo />
      <Commits />
    </div>
  );
}

export default App;
