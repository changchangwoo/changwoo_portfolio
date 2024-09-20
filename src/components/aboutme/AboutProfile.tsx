import React from "react";
import HighlightText from "../common/HighlightText";
import { FaUser } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";

const profileData = [
  {
    icon: <FaUser />,
    data: "2000.01.19",
  },
  {
    icon: <MdCall />,
    data: "010-8539-2067",
  },
  {
    icon: <MdEmail />,
    data: "changchangwoo119@gmail.com",
  },
];

const AboutProfile = () => {
  return (
    <div
      className="w-full max-w-[750px]  flex
      lg:flex-row lg:gap-28 lg:min-h-64
      md:flex-row md:gap-28 md:min-h-64
      flex-col gap-5 h-auto mt-10">
      <img className="
      lg:w-[250px] lg:h-auto
      md:w-[250px] md:h-auto
      w-[200px] h-[200px]
      
      bg-pureWhite border-solid rounded-lg border-white"></img>
      <div className="flex flex-col justify-between">
        <div>
          <h1
            className="font-medium text-pureWhite
        lg:text-3xl
        md:text-2xl
        text-2xl
          "
          >
            정말 반갑습니다!
          </h1>
          <h1
            className="font-medium text-pureWhite
        lg:text-3xl
        md:text-3xl
        text-2xl
          
          "
          >
            <HighlightText>프론트엔드 개발자 이창우</HighlightText>입니다
          </h1>
        </div>
        <ul
          className="font-semibold text-pureWhite
        lg:my-0 lg:text-base
        md:my-0 md:text-base
        my-5 text-sm
        "
        >
          <li className="flex gap-3">
            <FaUser />
            2000.01.19
          </li>
          <li className="flex gap-3">
            <MdCall />
            010-8539-2067
          </li>
          <li className="flex gap-3">
            <MdEmail />
            changchangwoo119@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutProfile;
