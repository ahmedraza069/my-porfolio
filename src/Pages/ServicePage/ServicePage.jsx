import PageBanner from "../../Components/PageBanner/PageBanner";
import CodingStruture from "../Home/CodingStructure/CodingStruture";
import Services from "../Home/Services/Services";


const ServicePage = () => {
    return (
        <div>
             <PageBanner bannerTitle={'My Services'} page={'Services'}></PageBanner>
             <Services></Services>
             <CodingStruture></CodingStruture>
        </div>
    );
};

export default ServicePage;