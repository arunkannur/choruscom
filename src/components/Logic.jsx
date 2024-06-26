import Section from "./Section";
import Heading from "./Heading";
import { logic } from "../assets";
import Button from "./Button";

const Logic = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <div className="relative">
          <div className="relative z-1 max-w-[50rem] mx-auto text-center mb-[3.875rem] md:mb-10 lg:mb-[2.25rem]">
            <h2 className="h2 mb-6 text-center">
              The perfect <span className="text-[#6E9BFF]">chorus</span> of{" "}
              <span className="block md:inline relative">logic & look</span>
            </h2>
          </div>

          <div className="relative z-1 flex items-center flex-col md:flex-row mb-5 p-0 rounded-3xl overflow-hidden lg:p-10 xl:h-[46rem]">
            <div className=" top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto max-lg:w-full">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="The perfect chorus of logic & look"
                height={730}
                src={logic}
              />
            </div>

            <div className="relative z-1 max-w-[27rem] mx-auto md:ml-auto text-center md:text-left">
              <p className="body-2 mb-[3rem] text-n-3">
                The look alone will not boost the sales or credibility of the
                brand. Likewise only logic will not make a brand loveable and
                memorable. We firmly believe that it’s the accurate combination
                of both make the big leap possible.
              </p>
              <ul className="body-2">
                <Button href="#">Know More</Button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Logic;
