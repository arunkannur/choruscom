import Section from "./Section";
import Heading from "./Heading";
import { logic } from "../assets";
import Button from "./Button";
import Accordian, { AccordianItem } from "./Accordion/";

const Logic = () => {
  return (
    <Section className="what-we-do bg-[#282828]">
      <div className="container">
        <div className="relative">
          <div className="relative z-1 max-w-[50rem] mx-auto text-left mb-[3.875rem] md:mb-10 lg:mb-[2.25rem]">
            <h2 className="h2 mb-6 text-center">
              What We <span className="text-[#6E9BFF]">Do</span>
            </h2>
          </div>

          <div>
            <div className="flex-col md:flex-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 lg:gap-10 mb-10">
              <div className="block relative p-0.5 md:max-w-[25rem]">
                <div className="p-4 rounded-lg">
                  <Accordian className="max-w-lg">
                    <AccordianItem value="1" trigger="UI/UX Design">
                      User Interface Design <br />
                      User Experience Design
                    </AccordianItem>

                    <AccordianItem value="2" trigger="SEO & Social Media">
                      Search Engine Optimization
                    </AccordianItem>

                    <AccordianItem
                      value="3"
                      trigger="Application Design & Development"
                    >
                      Application Design Application <br />
                      Development Test & Deploy Maintenance
                    </AccordianItem>

                    <AccordianItem
                      value="4"
                      trigger="Website Design & Development"
                    >
                      Website Design Website Development <br />
                      Plug-Ins Integration Test & Deploy <br />
                      Maintenance
                    </AccordianItem>

                    <AccordianItem value="5" trigger="Advertising">
                      Print ad campaigns <br />
                      Social Media Campaigns <br />
                      Digital Ads Google Ads Maintenance
                    </AccordianItem>
                  </Accordian>
                </div>
              </div>

              <div className="block relative p-0.5 md:max-w-[25rem]">
                <div className="p-4 rounded-lg">
                  <Accordian className="max-w-lg">
                    <AccordianItem value="6" trigger="Branding & Logo Design">
                      Brand Identity Design <br />
                      Logo Design <br />
                      Brand Guidelines <br />
                      Brand Spaces <br />
                      Collaterals <br />
                      Rebranding
                    </AccordianItem>

                    <AccordianItem value="7" trigger="Package Design">
                      Food Packaging <br />
                      Beverage Packaging <br />
                      Cosmetic Packaging <br />
                      Pharma Packaging <br />
                      Wine Packaging
                    </AccordianItem>

                    <AccordianItem
                      value="8"
                      trigger="Graphic Design & Illustrations"
                    >
                      Wayfinder Design <br />
                      Space Design <br />
                      Store Design <br />
                      Icon Sets & Pictograms <br />
                      Doodles <br />
                      Infographics <br />
                      3D Design <br />
                      Storyboarding
                    </AccordianItem>

                    <AccordianItem
                      value="9"
                      trigger="Wall Graphics & Key Visuals"
                    >
                      Store Wall Graphics <br />
                      Office Wall Graphics <br />
                      Key Visuals
                    </AccordianItem>

                    <AccordianItem
                      value="10"
                      trigger="Store Design & Visual Merchandising"
                    >
                      Store Design & Implementation <br />
                      Visual Merchandising <br />
                      Design & Implementation <br />
                      In-Store Fixtures Design & Implementation
                    </AccordianItem>
                  </Accordian>
                </div>
              </div>

              <div className="block relative p-0.5 md:max-w-[25rem]">
                <div className="p-4 rounded-lg">
                  <Accordian className="max-w-lg">
                    <AccordianItem value="11" trigger="Branding Strategy">
                      Brand Development <br />
                      Rebranding <br />
                      Customer journey and experience design <br />
                      Community design and foundation mapping <br />
                      Product functionality + experience design <br />
                      Website structuring and design, conversion optimisation{" "}
                      <br />
                      Sales process design, team set up and ops streamlining{" "}
                      <br />
                      Business ops team structuring and streamlining <br />
                      Founder brand building <br />
                      Employer brand building
                    </AccordianItem>

                    <AccordianItem value="12" trigger="Marketing Strategy">
                      Go-to-market strategy, <br />
                      plan Advertising, <br /> communications and content <br />
                      Customer journey and experience design <br />
                      Community design and foundation mapping <br />
                      Consumer research <br />
                      Product functionality + experience design <br />
                      Website structuring and design <br />
                      Conversion optimisation <br />
                      Sales process design <br />
                      Team set up and ops streamlining <br />
                      Business ops team structuring & streamlining
                    </AccordianItem>

                    <AccordianItem value="13" trigger="Photography">
                      Product Shoot <br />
                      Advertisement Photography
                    </AccordianItem>

                    <AccordianItem value="14" trigger="Video Production">
                      Infographic Video <br />
                      Explanatory Video <br />
                      2D Animated Video <br />
                      Whiteboard Animation Video
                    </AccordianItem>

                    <AccordianItem value="15" trigger="Animation">
                      2D Animation <br />
                      Motion Design
                    </AccordianItem>
                  </Accordian>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Logic;
