import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import Friend from "./Friend";

import testFriendImage1 from "../../../../assets/images/UTH.png"; // 임시
import testFriendImage2 from "../../../../assets/images/KJG.png"; // 임시
import testFriendImage3 from "../../../../assets/images/CGS.png"; // 임시
import axios from "axios";

function FriendList() {
  const [friendList, setFriendList] = useState([
    { name: "엄태혁", statusMessage: "test", profileImage: testFriendImage1 },
    { name: "김정국", statusMessage: "test", profileImage: testFriendImage2 },
    { name: "차광성", statusMessage: "test", profileImage: testFriendImage3 },
  ]);

  const getFriendList = async () => {
    axios
      .get("/user_info")
      .then((response) => {
        let userInfo = response.data.user_info;
        if (userInfo.id) {
          // user_info에 정보(id)가 담겨있을 경우
          // store에 저장 후 MainPage로
          console.log("유저 정보 조회", userInfo);
          dispatch(setUser(userInfo));
          setIsLoading(false);
          if (userInfo.name) {
            // name 임시
            // user_info에 세부 정보(name)가 담겨있을 경우(최초 Register단계를 거친 경우)
            history.push(`${root}/`);
          } else {
            // Register단계를 거치지 않은 경우
            history.push(`${root}/register`);
          }
        } else {
          // user_info에 정보(id)가 담겨있지 않을 경우(로그인 실패 또는 로그 아웃) 경우
          // store에서 유저 정보 삭제 후 LoginPage로
          console.log("유저 정보 없음", response);
          dispatch(clearUser());
          history.push(`${root}/login`);
        }
      })
      .catch(function (error) {
        // '/user_info'로 유저 정보 요청이 실패한 경우
        alert(`유저 정보 요청 실패
      ${error}`);
        history.push(`${root}/login`);
      });
  };

  const renderFriends = () => {
    let friendArray = [];
    friendList.map((friend, index) => {
      friendArray.push(<Friend key={index} friend={friend} />);
    });
    return friendArray.sort((a, b) => {
      return a.props.friend.name > b.props.friend.name ? 1 : -1;
    });
  };

  return (
    <div>
      <h5
        style={{
          fontSize: "0.8rem",
          color: "#777",
          textAlign: "left",
        }}
      >
        친구 {friendList.length}
      </h5>
      {renderFriends()}
    </div>
  );
}

export default FriendList;
