import Image from "next/image";


const TableBody = ({ data }) => {

  const formatNumber = (num) => {
    return num?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <tr className="divide-x divide-gray-200 ">

      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900 align-top text-left">
        # {data?.id}
      </td>
      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900 align-top text-left relative" >
        {data?.featured == true && <div className="h-8 w-20 absolute bg-red-500 -top-2 left-20 rounded-full text-white flex justify-center items-center mb-4"> featured </div>}
        <div>
          <div className="flex gap-2  items-start">
            <Image
              src={data?.image}
              width={30}
              height={30}
              alt=""
              className="mt-2"
            />
            <div>
              <div className=" text-[#50BED9]">
                {data?.name}
              </div>
              <div className="text-xs text-gray-700 mb-2">
                {data?.address}
              </div>
              {data?.cutoff && <div className="inline-block bg-[#fffae1] text-[#ff933b]  border-l-2 border-red-500 pl-2 pr-4 rounded-l rounded-full py-0.5">
                <div className="flex mb-1 ">
                  {data?.Type}
                  <Image
                    src={require("../../../public/down-red.svg")}
                    width={10}
                    height={10}
                    alt=""
                    className="mt-1"
                  />
                </div>
                <div className="text-gray-600">{data?.cutoff}</div>
              </div>}

            </div>

          </div>
          <div className="flex justify-between mt-2">
            <div className="flex ">
              {" "}
              <Image
                src={require("../../../public/right.svg")}
                width={10}
                height={10}
                alt=""
                className="mt-1"
              />
              <div className="text-[#ff9f56]">Apply Now</div>
            </div>
            <div className="flex ">
              {" "}
              <Image
                src={require("../../../public/download.svg")}
                width={10}
                height={10}
                alt=""
                className="mt-1"
              />
              <div className="text-[#2eb89a]">Download Brochure</div>
            </div>
            <div className="flex ">
              <input
                type="checkbox"
                className="form-checkbox mt-0.5 mr-0.5 text-green-500"
              />
              <div>Add to Compare</div>
            </div>
          </div>
        </div>
      </td>
      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900 align-top text-left">
        <div className="text-[#27b89b]">₹ {formatNumber(data?.fee)}</div>
        <div className="text-gray-600">BE/B.tech</div>
        <div className="text-gray-600">- 1st Year Fees</div>
        <div className="text-[#ff9f56] flex gap-2 items-center ">
          <Image
            src={require("../../../public/compare.svg")}
            width={15}
            height={15}
            alt=""
            className="mt-1"
          />
          Compare Fees
        </div>
      </td>
      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900 align-top text-left">
        <div className="text-[#27b89b]">₹ {formatNumber(data?.avgpack)}</div>
        <div className="text-gray-600">Average Package</div>
        <div className="text-[#27b89b]">₹ {formatNumber(data?.highpack)}</div>
        <div className="text-gray-600">Highest Package</div>
        <div className="text-[#ff9f56] flex gap-2 items-center ">
          <Image
            src={require("../../../public/compare.svg")}
            width={15}
            height={15}
            alt=""
            className="mt-1"
          />
          Compare Placement
        </div>
      </td>
      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-600 align-top text-left space-y-1">
        <div className="flex gap-2 ">
          <Image
            src={require("../../../public/dot.svg")}
            width={10}
            height={10}
            alt=""
            className="mt-1"
          />
          <div className="tracking-wide">{data?.rating}/10</div>
        </div>
        <div className="tracking-wide ">
          Based on {data?.user} User <div>Reviews</div>
        </div>
        <div className=" bg-[#fffae1] inline-block px-2 rounded-full">
          <div className="flex text-[#d76e82] items-center">
            <Image
              src={require("../../../public/tick.svg")}
              width={20}
              height={20}
              alt=""
              className="mt-1"
            />
            Best in the social life
            <Image
              src={require("../../../public/down-red.svg")}
              width={15}
              height={15}
              alt=""
              className="mt-1"
            />
          </div>
        </div>
      </td>
      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900 align-top text-left">
        <div className="flex text-gray-600">#99<span className="-mt-1">th</span>/<span className="text-[#ff9f56]">147</span> in India</div>
        <div className="text-gray-600 mt-1">2023</div>
        <div className="inline-block bg-[#e6faff] text-sky-500  border-l-2 border-sky-500 pl-2 pr-4 rounded-l rounded-full py-0.5 mt-2">
                <div className="flex mb-1 justify-center items-center">
                 
                  <Image
                    src={require("../../../public/times.png")}
                    width={20}
                    height={20}
                    alt=""
                    className="mt-1 rounded-full"
                  />
                   + 10 more
                </div>
                
              </div>
      </td>
    </tr>
  );
}

export default TableBody;