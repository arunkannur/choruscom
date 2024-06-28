import { arunmandru } from "../assets";
import Section from "./Section";

const OurTeam = () => {
  return (
    <Section className="client-reviews bg-[#282828]">
      <div className="container ">
        <div className="relative z-1 max-w-[50rem] mb-[1rem] md:mb-10 lg:mb-[2.25rem]">
          <h2 className="h2">
            <span className="text-[#6E9BFF]">Reviews </span> from clients
          </h2>
        </div>

        <div className="max-w-[50rem] flex w-screen relative z-2 p-5 md:p-0">
          <div className="flex-col md:flex-row grid grid-cols-1 gap-2 md:gap-5 lg:gap-10 mb-10">
            <div className="block relative p-0.5 md:max-w-[35rem]">
              <div className="flex-auto flex-wrap gap-x-2 pt-5">
                <p className="leading-8 text-[#fff]">
                  Team ‘Chorus’ was a pleasure to work with on our new website.
                  They certainly knows their stuff but, as important, They
                  collaborates very sensitively. The result is a site that not
                  only looks terrific but delivers exactly what we need. I can’t
                  recommend her highly enough.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[50rem] flex w-screen relative z-2 p-5 md:p-0">
          <div className="flex flex-row gap-2 mb-10">
            <div className="block relative p-0.5 max-w-[15rem]">
              <div className="relative z-2 flex flex-col pointer-events-none max-w-[15rem]">
                <img
                  src={arunmandru}
                  width={80}
                  height={90}
                  className="h-full object-cover rounded-full"
                />
              </div>
            </div>

            <div className="block relative p-0.5 md:max-w-[35rem]">
              <div className="flex-auto flex-wrap gap-x-2">
                <p className="leading-8 text-[#6E9BFF]">Raj Kamal</p>
                <p className="text-[#fff] text-[14px]">
                  Founder & Master Yoga Teacher
                </p>
                <p className="text-[#acacac] text-[14px]">
                  Yoga Wellness Centre
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurTeam;
