import { assets } from "../../assets/assets"



const Side = () => {
  return (
    <div className="grid grid-cols-1 gap-2 px-2  ">
        <div className='bg-white px-4 py-10 rounded-md capitalize flex flex-col gap-6'>
       <div className="flex items-center gap-4">
       <div className="h-10 w-10 rounded-[50%] border-orange-400 border-1 border flex justify-center items-center ">
    <i className="fa-solid fa-phone text-[18px]"></i>
    </div>
            <div> 
                <h3 className="lg:text-[18px] text-[16px] font-bold">call to order</h3>
                <h4>0700-600-0000</h4>
            </div>
       </div>


       {/* sell to jumia */}

       
    
       <div className="flex items-center gap-4">
       <div className="h-10 w-10 rounded-[50%] border-orange-400 border-1 border flex justify-center items-center ">
       <i className="fa-solid  fa-house text-[18px] text-orange-200"></i>
  
          </div>
            <div> 
                <h3 className="lg:text-[18px] text-[16px] font-bold capitalize">Sell to jumia</h3>
                
            </div>
          </div>

    {/* best deals */}

    <div className="flex items-center gap-4">
       <div className="h-10 w-10 rounded-[50%] border-orange-400 border-1 border flex justify-center items-center ">
    <i className="fa-solid fa-phone text-[18px]"></i>
          </div>
            <div> 
                <h3 className="lg:text-[18px] text-[16px] font-bold capitalize">best deals</h3>
                
            </div>
          </div>



        </div>

        <div className="w-full h-[32vh]">
            <img src={assets.shopearn} alt="" className="w-full h-full object-cover rounded-lg" />
        </div>

    </div>
  )
}

export default Side