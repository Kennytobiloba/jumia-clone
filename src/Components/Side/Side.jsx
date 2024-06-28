import { assets } from "../../assets/assets";

const Side = () => {
  return (
    <div className="h-[100%]  flex flex-col gap-2">
      <div className="bg-white px-4 h-full rounded-md justify-center capitalize flex flex-col gap-6">
        <div className="flex items-center gap-4 ">
          <div className="h-10 w-10 rounded-full border-orange-400 border flex justify-center items-center">
            <i className="fa-solid fa-phone text-[18px]"></i>
          </div>
          <div>
            <h3 className="lg:text-[18px] text-[16px] font-bold">call to order</h3>
            <h4>0700-600-0000</h4>
          </div>
        </div>

        <div className="flex items-center gap-4 ">
          <div className="h-10 w-10 rounded-full border-orange-400 border flex justify-center items-center">
            <i className="fa-solid fa-house text-[18px] text-orange-200"></i>
          </div>
          <div>
            <h3 className="lg:text-[18px] text-[16px] font-bold capitalize">Sell to jumia</h3>
          </div>
        </div>

        <div className="flex items-center gap-4 ">
          <div className="h-10 w-10 rounded-full border-orange-400 border flex justify-center items-center">
            <i className="fa-solid fa-phone text-[18px]"></i>
          </div>
          <div>
            <h3 className="lg:text-[18px] text-[16px] font-bold capitalize">best deals</h3>
          </div>
        </div>
      </div>

      <div className="w-full h-full">
        <img src={assets.shopearn} alt="" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default Side;
