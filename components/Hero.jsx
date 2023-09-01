import Image from "next/image";
import BuulionTrails from "./BuulionTrails";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="">
        <div className="flex justify-between p-6 cursor-pointer">
          <div className="flex justify-center items-center">
            <Image
              src="./assets/bull_trai.svg"
              width={200}
              height={200}
              alt="Logo"
            />{" "}
          </div>
          <div className="">
            <ul className="flex font-light text-[16px]">
              <li className="pr-14 hover:font-medium hover:border-b-2 hover:border-indigo-400">
                Maker
              </li>
              <li className="pr-14 hover:font-medium hover:border-b-2 hover:border-indigo-500">
                Seller
              </li>
              <li className="pr-14 hover:font-medium hover:border-b-2 hover:border-indigo-500">
                Buyer
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-[130px]">
          <p className="font-bold text-[40px] text-center flex justify-center">
            Blockchain solution enabling gold supply <br /> chain transparency
            and efficiency
          </p>

          <p className="pt-[25px] font-medium flex justify-center text-[18px] text-center">
            Gold supply chain management system Blockchain-based system for
            end-to-end tracking of gold
          </p>
        </div>
      </div>
      <div className="mt-[200px]">
        <div className="">
          <BuulionTrails />
        </div>
      </div>
    </section>
  );
};

export default Hero;
