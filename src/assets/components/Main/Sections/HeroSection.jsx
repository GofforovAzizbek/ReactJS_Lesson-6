import heroimg from "../../../images/heroimg.png";

// Cards
import living from "../../../images/card1.png";
import bedroom from "../../../images/card2.png";
import office from "../../../images/card3.png";
import dining from "../../../images/card4.png";

const rooms = [
  {
    id: 1,
    title: "Living Room",
    img: living,
    border: "border-[#E9672B]",
    shadow: "hover:shadow-[8px_8px_0px_0px_#CBC6F4]",
  },
  {
    id: 2,
    title: "Bedroom",
    img: bedroom,
    border: "border-[#225DCA]",
    shadow: "hover:shadow-[8px_8px_0px_0px_#E7CB43]",
  },
  {
    id: 3,
    title: "Home Office",
    img: office,
    border: "border-[#242947]",
    shadow: "hover:shadow-[8px_8px_0px_0px_#A2D4C5]",
  },
  {
    id: 4,
    title: "Dining Room",
    img: dining,
    border: "border-[#DE4333]",
    shadow: "hover:shadow-[8px_8px_0px_0px_#AF4920]",
  },
];

function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-[80px] pl-[60px] bg-[#FBF8F5]">
        <div className="container">
          <div className="flexses justify-around">
            <div className="max-w-[520px] w-[100%]">
              <h1 className="font-['Roboto'] font-normal text-[64px] leading-[76px] text-black mb-[16px]">
                Curated and Convenient
              </h1>
              <p className="font-['Roboto'] font-normal text-[18px] leading-[28px] text-black mb-[44px]">
                We've built our offerings on the principle that everyone
                deserves high-quality design without the high cost. We offer
                elevated rental inventory, to transform your space. Reuse and
                recycle - we make the decision as light as a “feather”
              </p>
              <button className="py-[16px] px-[32px] bg-[#E9672B] rounded-full font-['Roboto'] font-normal text-[18px] leading-[28px] tracking-[0] text-black hover:opacity-[0.6]">
                Get Started
              </button>
            </div>
            <div className="">
              <img src={heroimg} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section className="pb-[70px] bg-[#FBF8F5]">
        <div className="container">
          <h2 className="font-['Roboto'] font-normal text-[48px] text-center leading-[54px] tracking-[0] text-black mb-[40px]">
            Shop by Room
          </h2>

          <div className="grid grid-cols-4 gap-[40px] px-[44px]">
            {rooms.map((room) => (
              <div
                key={room.id}
                className={`border-[2px] ${room.border} rounded-[4px] bg-white text-black transition-shadow duration-300 ${room.shadow}`}
              >
                <div className="">
                  <img src={room.img} alt={room.title} className="w-full" />
                </div>

                <p className="py-[15px] font-['Roboto'] font-normal text-[18px] text-black leading-[28px] tracking-[0] text-center">
                  {room.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
