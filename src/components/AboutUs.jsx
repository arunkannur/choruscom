import Section from "./Section";

const AboutUs = () => {
  return (
    <Section>
      <div className="relative z-1 max-w-2xl mx-auto text-center mb-[3.875rem] md:mb-10 lg:mb-[2.25rem] lg:px-8">
        <h2 className="h2 mb-6 text-center">
          We are the <span className="text-[#6E9BFF]">creation</span> tool your
          brand needs
        </h2>
      </div>

      <div className="flex w-screen relative z-2 px-2 mx-auto justify-center lg:px-8">
        <div className="flex-col md:flex-row grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 lg:gap-10 mb-10">
          <div className="block relative p-0.5 md:max-w-[25rem]">
            <div className="flex flex-auto flex-wrap gap-x-2 pt-5">
              <h3 className="h5 mb-3">What we do</h3>
              <p className="leading-8">
                We’re an independent creative agency built around people who
                love to create. Helping them build and connect their brands with
                their audience through strategy, design, and communication.
              </p>
            </div>
          </div>

          <div className="block relative p-0.5 md:max-w-[25rem]">
            <div className="flex flex-auto flex-wrap gap-x-2 pt-5">
              <h3 className="h5 mb-3">Our goals</h3>
              <p className="leading-8">
                Driving brand success through innovative campaigns. Our goal is
                simple: to elevate your brand and exceed expectations.
              </p>
            </div>
          </div>

          <div className="block relative p-0.5 md:max-w-[25rem]">
            <div className="flex flex-auto flex-wrap gap-x-2 pt-5">
              <h3 className="h5 mb-3">The studio</h3>
              <p className="leading-8">
                Transforming visions into captivating content. Our studio merges
                creativity with strategy to craft compelling ads that make an
                impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
