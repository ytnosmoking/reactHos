import React from "react";

import { Link } from "react-router-dom";
import LiStyle from "./liStyle";

function Li(props) {
  let { status } = props;
  status = 1;
  return (
    <LiStyle>
      <div className="location">
        <div className="shop">shop</div>
        <div className="time">time</div>
      </div>
      <div className="user">
        <div className="userInfo">
          <div>
            <span className="userName">name</span>
            <span className="userWant">正在邀请你视频问诊......</span>
          </div>
          <div className="userDetail">
            <span className="sex">sex</span>
            <span className="age">age</span>
            <span className="kg">weight</span>
          </div>
        </div>
        <div className="userCtr">
          {status === 1 ? (
            <Link
              to={{
                pathname: "/reciple",
                query: { id: "234123", detail: "{id:1,name:2,sex:3}" }
              }}
            >
              linkTo234123
            </Link>
          ) : (
            <button className={status}>statusText</button>
          )}
        </div>
      </div>
    </LiStyle>
  );
}

export default Li;
