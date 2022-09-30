import { memo, useContext } from "react";
import { UserContext } from "../App";
import moment from "moment";
import Cities from "./Cities";

const Body = () => {
  const { data } = useContext(UserContext);
  // console.log(data);
  return (
    <>
      <div className="w-[100%] min-h-screen bg-[#eee] flex items-center justify-center select-none">
        <div className="bg-white cShadow min-w-[90%] sm:min-w-[500px]  rounded-xl overflow-hidden">
          {data.error === "" ? (
            data.loading ? (
              <h1 className="text-green-500 px-3 py-3 rounded">
                Loading please wait...
              </h1>
            ) : (
              <>
                <div className="bg-gray-400 py-3 px-4 flex flex-row justify-between items-center">
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-medium">
                      <Cities />
                    </h1>
                    <p className="font-nor pt-1 italic text-sm">
                      {moment().format("dddd")}, {moment().format("LL")}
                    </p>
                  </div>
                  <div className="text-xl font-medium pr-1">
                    {moment().format("LT")}
                  </div>
                </div>
                <div className="py-3 px-6">
                  <div className="flex justify-between">
                    <p className="py-2">Weather Condition : </p>
                    <p className="font-bold">
                      {data.value.weather?.map((i) => i?.main)}
                    </p>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center">
                    <p className="py-2">Average Temperature :</p>
                    <p className="font-bold">{data.value.main?.temp} &deg;C</p>
                  </div>
                  <hr />{" "}
                  <div className="flex justify-between items-center">
                    <p className="py-2">Maximum Temperature :</p>
                    <p className="font-bold">
                      {data.value.main?.temp_max} &deg;C
                    </p>
                  </div>
                  <hr />{" "}
                  <div className="flex justify-between items-center">
                    <p className="py-2">Description :</p>
                    <p className="font-bold">
                      {data.value.weather?.map((i) => i?.description)}
                    </p>
                  </div>
                  <hr />{" "}
                  <div className="flex justify-between items-center">
                    <p className="py-2">Wind speed :</p>
                    <p className="font-bold">{data.value.wind?.speed} mph</p>
                  </div>
                </div>
              </>
            )
          ) : (
            <h1 className="text-red-500 px-3 py-3 rounded">{data.error}!</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(Body);
