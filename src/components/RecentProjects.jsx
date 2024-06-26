import { recentproject1, recentproject2, recentproject3 } from "../assets";
import Section from "./Section";

const RecentProjects = () => {
  return (
    <Section id="features">
      <div className="relative z-1 max-w-[50rem] mx-auto text-center mb-[1rem] md:mb-10 lg:mb-[2.25rem]">
        <h2 className="h2 text-center">
          Our recent <span className="text-[#6E9BFF]">projects</span>
        </h2>
      </div>

      <div className="flex w-screen relative z-2 p-5 md:p-0 mx-auto justify-center">
        <div className="flex-col md:flex-row grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 lg:gap-10 mb-10">
          <div className="block relative p-0.5 md:max-w-[25rem]">
            <div className="relative z-2 flex flex-col pointer-events-none">
              <img
                src={recentproject1}
                width={380}
                height={362}
                className="w-full h-full object-cover"
              />
            </div>

            <dl className="flex flex-auto flex-wrap gap-x-2 pt-5">
              <dt className="text-base text-[#6E9BFF] dark:text-zinc-400">
                Website, UI/UX
              </dt>
              <dd
                className="ml-auto text-base text-zinc-400 dark:text-zinc-500"
                aria-label="2019 until Present"
              >
                2023
              </dd>
            </dl>

            <div className="flex flex-auto flex-wrap gap-x-2 pt-5">
              <h3 className="h5 mb-3">Website Design</h3>
              <p className="leading-8">
                Information architecture and Home page design to optimise the
                better user experience.
              </p>
            </div>
          </div>

          <div className="block relative p-0.5 md:max-w-[25rem]">
            <div className="relative z-2 flex flex-col pointer-events-none">
              <img
                src={recentproject2}
                width={380}
                height={362}
                className="w-full h-full object-cover"
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2 pt-5">
              <dt className="text-base text-[#6E9BFF] dark:text-zinc-400">
                Package Design, Branding
              </dt>
              <dd
                className="ml-auto text-base text-zinc-400 dark:text-zinc-500"
                aria-label="2019 until Present"
              >
                2023
              </dd>
            </dl>

            <div className="flex flex-auto flex-wrap gap-x-2 pt-5">
              <h3 className="h5 mb-3">Packaging Design</h3>
              <p className="leading-8">
                Luxury and Premium creative Gift packaging design for this brand
                hail from Dubai.
              </p>
            </div>
          </div>

          <div className="block relative p-0.5 md:max-w-[25rem]">
            <div className="relative z-2 flex flex-col pointer-events-none">
              <img
                src={recentproject3}
                width={380}
                height={362}
                className="w-full h-full object-cover"
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2 pt-5">
              <dt className="text-base text-[#6E9BFF] dark:text-zinc-400">
                Illustration
              </dt>
              <dd
                className="ml-auto text-base text-zinc-400 dark:text-zinc-500"
                aria-label="2019 until Present"
              >
                2023
              </dd>
            </dl>

            <div className="flex flex-auto flex-wrap gap-x-2 pt-5">
              <h3 className="h5 mb-3">Storyboard</h3>
              <p className="leading-8">
                Luxury and Premium creative Gift packaging design for this brand
                hail from Dubai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default RecentProjects;
