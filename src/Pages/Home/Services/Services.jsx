import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ServicesCard from "../../../Components/ServicesCard/ServicesCard";

const Services = () => {
  return (
    <div className="container mx-auto">
      <SectionTitle
        subHeading={"MY"}
        animateSubHeading={" SERVICES"}
        heading={"I'm very passionate under about this services"}
      ></SectionTitle>
      <ServicesCard></ServicesCard>
    </div>
  );
};

export default Services;
