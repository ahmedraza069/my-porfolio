import PageBanner from "../../Components/PageBanner/PageBanner";
import ResumePage from "../../Components/ResumePage/ResumePage";

const Resume = () => {
    return (
        <div>
            <PageBanner bannerTitle={'My Resume'} page={'Resume'}></PageBanner>
            <ResumePage></ResumePage>
        </div>
    );
};

export default Resume;