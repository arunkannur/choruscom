import { service1, service2, service3, service4 } from "../assets";
import Section from "./Section";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="flex w-screen relative z-2 p-1 mx-auto justify-center">
        <div className="flex-col md:flex-row grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 lg:gap-10 mb-10">
          <div className="block relative p-0.5 md:max-w-[25rem] transform transition duration-500 hover:scale-110">
            <div className="relative z-2 flex flex-col pointer-events-none">
              <img
                src={service1}
                width={380}
                height={362}
                className="h-full object-cover"
              />
            </div>
          </div>

          <div className="block relative p-0.5 md:max-w-[25rem] transform transition duration-500 hover:scale-110">
            <div className="relative z-2 flex flex-col pointer-events-none">
              <img
                src={service2}
                width={380}
                height={362}
                className="h-full object-cover"
              />
            </div>
          </div>

          <div className="block relative p-0.5 md:max-w-[25rem] transform transition duration-500 hover:scale-110">
            <div className="relative z-2 flex flex-col pointer-events-none">
              <img
                src={service3}
                width={380}
                height={362}
                className="h-full object-cover"
              />
            </div>
          </div>

          <div className="block relative p-0.5 md:max-w-[25rem] transform transition duration-500 hover:scale-110">
            <div className="relative z-2 flex flex-col pointer-events-none">
              <img
                src={service4}
                width={380}
                height={362}
                className="h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
