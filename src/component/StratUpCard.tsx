
interface StartUP {
  img: string;
  name: string;
  MinInvestment: number; // Changed from MinInvvestment
  yeild: number;
  rating: string;
  onClick?: () => void; // Added onClick prop
}

function StratUpCard({ img, name, MinInvestment, yeild, rating, onClick }: StartUP) {
  return (
    <div
      className="bg-gray-300  w-[1000px] h-[300px] grid grid-cols-4 gap-2 p-2 pt-3 pb-3 cursor-pointer hover:scale-105 hover:bg-gray-400 transition duration-150 ease-in-out hover:text-white"
      onClick={onClick} // Added onClick handler
    >
      {/* Top Section (1 part of 1:3 ratio) */}
      <div className="col-span-1 flex flex-col justify-evenly items-center">
        <img src={img} width={150} alt="Startup Logo" className='rounded-xl' />
        <div className="text-xl ml-4">{name}</div>
      </div>

      {/* Bottom Section (3 parts of 1:3 ratio) */}
      <div className="col-span-3 flex flex-col">
        <div className="flex items-center justify-evenly w-[100%] h-[70%] text-xl">
          {/* Content for the bottom section */}
          <div className="w-[20%] h-[80%] flex flex-col justify-evenly items-center">
            <div>Investment</div>
            <div>₹{MinInvestment}</div>
          </div>
          <div className="w-[20%] h-[80%] flex flex-col justify-evenly items-center">
            <div>Payment</div>
            <div>Quarterly</div>
          </div>
          <div className="w-[20%] h-[80%] flex flex-col justify-evenly items-center">
            <div>Yield</div>
            <div>{yeild}%</div>
          </div>
          <div className="w-[20%] h-[80%] flex flex-col justify-evenly items-center">
            <div>Maturity Time</div>
            <div>5 Feb-2025</div>
          </div>
        </div>
        <div className="flex justify-end items-end text-xl mr-[5%]">
          <div className="rounded-md p-3 pl-4 pr-4 bg-teal-500">{rating}</div> {/* Changed to rating */}
        </div>
      </div>
    </div>
  );
}

export default StratUpCard;