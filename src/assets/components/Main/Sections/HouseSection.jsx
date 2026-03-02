// Houses
import house1 from "../../../images/house1.png";
import house2 from "../../../images/house2.png";
import house3 from "../../../images/house3.png";
import house4 from "../../../images/house4.png";

const sections = [
  {
    id: 1,
    title: "Enjoy a fully furnished space in less than week",
    desc: "Feather furniture is available to be delivered and assembled in New York City, Los Angeles and San Francisco.",
    link: "Explore Furniture",
    img: house1,
    reverse: false,
  },
  {
    id: 2,
    title: "Garage Sale - 40% & Up",
    desc: "Our Garage Sale is open! Savings start at 40% on favorite retired pieces. Find dressers, sofas, decor, and more to make the year one to remember.",
    // desc2: "Terms and conditions apply. View here.",
    link: "Shop Now",
    img: house2,
    reverse: true,
  },
  {
    id: 3,
    title: "Furniture for business, made simple.",
    desc: "Say goodbye to cost, complexity, and commitment of furniture. Feather makes it easy with affordable rental plans, white glove delivery and best-in-class account service.",
    link: "Visit Feather For Business",
    img: house3,
    reverse: false,
  },
  {
    id: 4,
    title: "Never assemble furniture again.",
    desc: "We move a lot. There are countless floor plans and roommates (oh, and your evolving tastes) between here and there. With Feather, furnish your space without breaking a sweat or reaching for a screwdriver.",
    link: "How Feather Works",
    img: house4,
    reverse: true,
  },
];

function HouseSection() {
  return (
    <>
      {/* House Section TOP */}
      <section className="pt-[130px] pb-[90px]">
        <div className="container">
          <h2 className="font-['Roboto'] font-normal text-[36px] leading-[44px] text-center mb-[16px]">
            “Keeping Furniture in Homes and out of Landfills."
          </h2>
          <p className="font-['Roboto'] font-normal text-[24px] leading-[32px] text-center max-w-[930px] mx-auto">
            This isn’t just another rental company - We’re elevating the future
            of furniture by replacing the commitment of ownership with a culture
            of sharing in a way that’s curated, convenient, and sustainable.
          </p>
        </div>
      </section>

      {/* House card Section */}
      <section className="pt-[30px] pb-[120px]">
        <div className="container flex flex-col gap-[100px]">
          {sections.map((item) => (
            <div
              key={item.id}
              className={`flex items-center justify-between gap-[40px] ${
                item.reverse ? "flex-row-reverse" : ""
              }`}
            >
              {/* TEXT */}
              <div className="max-w-[435px] w-[100%]">
                <h3 className="font-['Roboto'] font-normal text-[36px] leading-[44px] tracking-[0%] mb-[20px]">
                  {item.title}
                </h3>
                <p className="font-['Roboto'] font-normal text-[18px] leading-[28px] tracking-[0%] pb-[30px]">
                  {item.desc}
                </p>
                <a
                  href="#"
                  className="font-['Roboto'] font-normal text-[18px] leading-[28px] text-[#E9672B] hover:underline"
                >
                  {item.link}
                </a>
              </div>

              {/* IMAGE */}
              <div className="w-1/2">
                <img src={item.img} alt={item.title} className="" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HouseSection;
