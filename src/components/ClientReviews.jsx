import { ourteam1, ourteam2, ourteam3, ourteam4 } from "../assets";
import Section from "./Section";

const OurTeam = () => {
  return (
    <Section className="client-reviews">
      <div className="container">
        <div className="relative z-1 max-w-[50rem] mb-[1rem] md:mb-10 lg:mb-[2.25rem]">
          <h2 className="h2">
            <span className="text-[#6E9BFF]">Reviews </span> from clients
          </h2>
        </div>

        <div className="container flex w-screen relative z-2 p-5 md:p-0 mx-auto justify-center">
          <div className="flex-col md:flex-row grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 lg:gap-10 mb-10">
            <div className="block relative p-0.5 md:max-w-[25rem]">
              <div className="relative z-2 flex flex-col pointer-events-none">
                <img
                  src={ourteam1}
                  width={380}
                  height={362}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-auto flex-wrap gap-x-2 pt-5 text-center">
                <h5 className="h5 mb-1 font-thin">Arun Mandru</h5>
                <p className="leading-8 text-[#6E9BFF]">CEO</p>
              </div>
            </div>

            <div className="block relative p-0.5 md:max-w-[25rem]">
              <div className="relative z-2 flex flex-col pointer-events-none">
                <img
                  src={ourteam2}
                  width={380}
                  height={362}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-auto flex-wrap gap-x-2 pt-5 text-center">
                <h5 className="h5 mb-1 font-thin">Shinoj Kumar</h5>
                <p className="leading-8 text-[#6E9BFF]">Creative Director</p>
              </div>
            </div>

            <div className="block relative p-0.5 md:max-w-[25rem]">
              <div className="relative z-2 flex flex-col pointer-events-none">
                <img
                  src={ourteam3}
                  width={380}
                  height={362}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-auto flex-wrap gap-x-2 pt-5 text-center">
                <h5 className="h5 mb-1 font-thin">Joel</h5>
                <p className="leading-8 text-[#6E9BFF]">Animator</p>
              </div>
            </div>

            <div className="block relative p-0.5 md:max-w-[25rem]">
              <div className="relative z-2 flex flex-col pointer-events-none">
                <img
                  src={ourteam4}
                  width={380}
                  height={362}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-auto flex-wrap gap-x-2 pt-5 text-center">
                <h3 className="h5 mb-1 font-thin">Jayas</h3>
                <p className="leading-8 text-[#6E9BFF]">Jr. Graphic Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurTeam;
