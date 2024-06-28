import React from "react";
import Section from "../Section";
import { socials } from "../../constants";

const Footer = () => {
  return (
    <Section crosses className="footer !px-0 !py-10">
      <div className="container sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        {/* <div className="flex relative z-2 px-2 mx-auto justify-center lg:px-0">
          <div className="flex-col md:flex-row grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 lg:gap-10 mb-10">
            <div className="block relative p-0.5 md:max-w-[25rem]">
              <div className="flex flex-auto flex-wrap gap-x-2 pt-5">
                <h3 className="h5 mb-3">What we do</h3>
                <p className="leading-8">
                  5M, 126, Lal Bahadur Nagar, East of NGEF Layout, Kasturi
                  Nagar, Bengaluru Urban, Karnataka 560043. India.
                </p>
              </div>
            </div>

            <div className="block relative p-0.5 md:max-w-[25rem]">
              <div className="flex flex-auto flex-wrap gap-x-2 pt-5">
                <h3 className="h5 mb-3">Our goals</h3>
                <p className="leading-8">
                  Driving brand success through innovative campaigns. Our goal
                  is simple: to elevate your brand and exceed expectations.
                </p>
              </div>
            </div>

            <div className="block relative p-0.5 md:max-w-[25rem]">
              <div className="flex flex-auto flex-wrap gap-x-2 pt-5">
                <h3 className="h5 mb-3">The studio</h3>
                <p className="leading-8">
                  Transforming visions into captivating content. Our studio
                  merges creativity with strategy to craft compelling ads that
                  make an impact.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="flex justify-between">
          <p className="caption text-n-4 lg:block">
            © {new Date().getFullYear()}. All rights reserved.
          </p>

          <ul className="flex gap-5 flex-wrap">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 border border-solid border-white rounded-full transition-colors hover:bg-n-6"
              >
                <img
                  src={item.iconUrl}
                  width={16}
                  height={16}
                  alt={item.title}
                />
              </a>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
