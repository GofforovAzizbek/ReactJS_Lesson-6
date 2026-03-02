// Icons
import mail from "../../images/mail.svg";
import pinsert from "../../images/pinsert.svg";
import twitter from "../../images/twitter.svg";
import ins from "../../images/ins.svg";
import lin from "../../images/lin.svg";
import face from "../../images/face.svg";

import box from "../../images/box.svg";

const footerNav = [
  {
    title: "Furniture",
    links: [
      "Packages",
      "Living Room",
      "Bedroom",
      "Dining",
      "Home Office",
      "Decor",
      "Lighting",
      "Outdoor",
      "All Furniture",
      "Sample Sale",
    ],
  },
  {
    title: "About",
    links: [
      "How it Works",
      "About Feather",
      "Feather Furniture",
      "Reviews",
      "Feather for WeWork",
      "Feather for Business",
      "Feather for Staging",
      "Affiliate Program",
      "Careers",
      "In Your Area",
    ],
  },
  {
    title: "Help",
    links: [
      "FAQs",
      "Contact us",
      "Privacy Policy",
      "Terms",
      "FloorFound Terms",
    ],
  },
  {
    title: "Feather on Social Media",
    links: [
      { img: mail, alt: "Mail" },
      { img: pinsert, alt: "Pinterest" },
      { img: twitter, alt: "Twitter" },
      { img: ins, alt: "Instagram" },
      { img: lin, alt: "LinkedIn" },
      { img: face, alt: "Facebook" },
    ],
  },
];

function Footer() {
  return (
    <footer className="pt-[80px] pb-[160px] bg-[#F3F0EC]">
      <div className="container relative">
        <nav className="flex justify-between">
          {footerNav.map((section, index) => (
            <div key={index}>
              <h4 className="font-['Roboto'] font-normal text-[16px] leading-[24px] tracking-[1.28px] uppercase mb-[24px]">
                {section.title}
              </h4>

              {section.title === "Feather on Social Media" ? (
                <div className="grid grid-cols-6 gap-[16px]">
                  {section.links.map((icon, i) => (
                    <a key={i} href="#" className="">
                      <img src={icon.img} alt={icon.alt} className="" />
                    </a>
                  ))}
                </div>
              ) : (
                <ul className="flex flex-col">
                  {section.links.map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="font-['Roboto'] font-normal text-[16px] leading-[24px] block mb-[10px] hover:underline"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
        <img src={box} className="absolute right-[-120px]" />
      </div>
    </footer>
  );
}

export default Footer;
