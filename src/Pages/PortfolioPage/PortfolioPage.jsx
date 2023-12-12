import PageBanner from "../../Components/PageBanner/PageBanner";
import CodingStruture from "../Home/CodingStructure/CodingStruture";
import Portfolio from "../Home/Portfolio/Portfolio";


const PortfolioPage = () => {
    return (
        <div>
             <PageBanner bannerTitle={"My Portfolio"} page={'Portfolio'}></PageBanner>
             <Portfolio></Portfolio>
             <CodingStruture></CodingStruture>
        </div>
    );
};

export default PortfolioPage;