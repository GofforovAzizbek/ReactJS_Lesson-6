// Cards
import group1 from "../../../images/group1.png";
import group2 from "../../../images/group2.png";
import group3 from "../../../images/group3.png";
import group4 from "../../../images/group4.png";

// Hotel
import badroom from "../../../images/badroom.png";
import framelogo from "../../../images/framelogo.svg";

// Company Logos
import logo1 from "../../../images/logo1.svg";
import logo2 from "../../../images/logo2.svg";
import logo3 from "../../../images/logo3.svg";
import logo4 from "../../../images/logo4.svg";
import logo5 from "../../../images/logo5.svg";

// douther
import douther from "../../../images/douther.svg";

function EquipmentSection() {
  return (
    <>
      {/* Eqip Section */}
      <section className="bg-[#FBF8F5] py-[140px]">
        <div className="container">
          <div className="">
            <h2 className="font-['Roboto'] font-normal text-[36px] text-center leading-[44px] tracking-[0%] mb-[60px]">
              Shop our Bestsellers
            </h2>

            <div className="flex justify-center gap-[4px] mb-[55px]">
              <div className="cursor-pointer hover:border-[1px] hover:shadow-amber-200 hover:shadow">
                <img src={group1} alt="" className="" />
              </div>
              <div className="cursor-pointer hover:border-[1px] hover:shadow-amber-200 hover:shadow">
                <img src={group2} alt="" className="" />
              </div>
              <div className="cursor-pointer hover:border-[1px] hover:shadow-amber-200 hover:shadow">
                <img src={group3} alt="" className="" />
              </div>
              <div className="cursor-pointer hover:border-[1px] hover:shadow-amber-200 hover:shadow">
                <img src={group4} alt="" className="" />
              </div>
            </div>

            <a
              href=""
              className="block text-center font-['Roboto'] font-normal text-[18px] leading-[28px] text-[#E9672B] hover:underline"
            >
              Shop All Furniture
            </a>
          </div>
        </div>
      </section>

      {/* Badroom Section */}
      <section className="bg-[#FBF8F5] pb-[140px]">
        <div className="max-w-[1280px] w-[100%] mx-auto">
          <div className="flexses justify-between bg-[#E9672B]">
            <div className="w-full">
              <img src={badroom} alt="" className="" />
            </div>
            <div className="flexses flex-col">
              <a href="" className="mb-[24px]">
                <img src={framelogo} alt="" className="" />
              </a>
              <p className="mb-[32px] font-['Roboto'] font-normal text-[36px] leading-[44px] text-center text-[#fff]">
                Floyd Furniture Meets Feather Flexibility
              </p>
              <button className="py-[16px] px-[32px] rounded-full bg-[#fff] font-['Roboto'] font-normal text-[18px] leading-[28px]">
                Explore Floyd Furniture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Retings Section */}
      <section className="">
        <div className="container"></div>
      </section>

      {/* Company Sections */}
      <section className="pt-[40px] py-[100px] bg-[#F6CFCA]">
        <div className="container">
          <div className="">
            <h2 className="font-['Roboto'] font-normal text-[88px] leading-[100px] text-center mb-[40px] px-[200px]">
              Ease the pain of moving from apartment to apartment.
            </h2>
            <div className="flexses justify-between">
              <a href="" className="">
                <img src={logo1} alt="" className="" />
              </a>
              <a href="" className="">
                <img src={logo2} alt="" className="" />
              </a>
              <a href="" className="">
                <img src={logo3} alt="" className="" />
              </a>
              <a href="" className="">
                <img src={logo4} alt="" className="" />
              </a>
              <a href="" className="">
                <img src={logo5} alt="" className="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="pt-[160px] pb-[120px] bg-[#FBF8F5] border-b-[2px] border-b-[#CDD454]">
        <div className="container">
          <div className="flexses flex-col">
            <img src={douther} alt="" className="mb-[60px]" />
            <p className="font-['Roboto'] font-normal text-[24px] leading-[32px] mb-[40px] text-center">
              Feather is the stress-free <br /> way to furnish your home
            </p>
            <button className="font-['Roboto'] font-normal text-[18px] leading-[24px] py-[16px] px-[40px] rounded-full bg-[#E9672B] hover:opacity-[0.5]">
              Shop Furniture
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default EquipmentSection;
