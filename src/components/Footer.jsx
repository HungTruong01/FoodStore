import React from "react";
import logo from "../assets/assets/logo.svg";
import { Link } from "react-router-dom";
import footer from "../assets/assets/footer.jpg";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from "../assets/assets/data";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const SOCIALs = {
    title: "Socials",
    links: [
      <FaFacebook />,
      <FaYoutube />,
      <FaInstagram />,
      <FaTwitter />,
      <FaLinkedin />,
    ],
  };

  return (
    <footer className="max-padd-container flexStart pb-14 pt-20 bg-pattern bg-cover bg-no-repeat rounded-2xl">
      {/* main container */}
      <div className="flex flex-col">
        {/* footer columns container */}
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row p-8 rounded-t-xl">
          <div className="flex flex-wrap gap-16 sm:justify-between">
            <div className="max-w-60">
              {/* logo */}
              <Link to={"/"} className="bold-24 flex flex-1 items-baseline">
                <img
                  src={logo}
                  alt="logo"
                  height={24}
                  width={24}
                  className="hidden sm:flex"
                />
                <span className="text-secondary pl-2">Food</span>ora
              </Link>
              <div>
                <p>
                  We server meals made from the frehest and finest ingredient
                  daily.
                </p>
                <img src={footer} alt="" className="rounded-md mt-6 w-44" />
              </div>
            </div>
            {FOOTER_LINKS.map((col) => (
              <FooterColumn key={col.title} title={col.title}>
                <ul className="flex flex-col gap-4 regular-14 text-gray-20">
                  {col.links.map((link, i) => (
                    <Link to={"/"} key={i}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, i) => (
                  <Link
                    to={"/"}
                    key={i}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p>{link.label}:</p>
                    <p className="bold-15">{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex">
              <FooterColumn title={SOCIALs.title}>
                <ul className="flex gap-4">
                  {SOCIALs.links.map((link, i) => (
                    <Link to={"/"} className="text-xl">
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
