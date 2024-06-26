import Section from "./Section";
import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <Section className="bg-white">
      <div className={className}>
        <ul className=" flex-col md:flex-row grid grid-cols-2 md:grid-cols-5">
          {companyLogos.map((logo, index) => (
            <li
              className="flex items-center justify-center flex-1 h-[6.5rem]"
              key={index}
            >
              <img src={logo} width={134} height={28} alt={logo} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default CompanyLogos;
