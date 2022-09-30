import { memo, useContext, useState } from "react";
import { UserContext } from "../App";
import { AiFillCaretDown } from "react-icons/ai";
import cities from "./cityData";

// console.log(zz);

const Cities = () => {
  const [show, setShow] = useState(false);
  const { name,dispatch } = useContext(UserContext);

  // console.log(show);
  // console.log(name)
  return (
    <>
      <div className="relative">
        <div className="flex  justify-around items-center">
          {name.currentCity}
          <button
            onClick={() => (show ? setShow(false) : setShow(true))}
            className="text-sm"
          >
            <AiFillCaretDown className="text-[20px]"/>
          </button>
        </div>

        {show && (
          <div className=" bg-[#ebebeb] flex flex-col absolute top-[33px] ml-3 overflow-hidden  cShadow3 left-0 rounded-md">
            {cities.map((i) => (
              <p
                key={i.id}
                onClick={() => {
                  dispatch(`${i.name}`);
                  setShow(false);
                }}
                className="text-[18px] px-7 py-2 cursor-pointer duration-400 hover:bg-[#cacaca]"
              >
                {i.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default memo(Cities);
