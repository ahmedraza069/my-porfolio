import { Helmet } from "react-helmet-async";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import CodingStruture from "../CodingStructure/CodingStruture";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import ContactInfo from "../../../Components/ContactInfo/ContactInfo";


const Home = () => {
    return (
        <div>
    <Helmet>
        <title>My-Portfolio </title>
      </Helmet>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Services></Services>
            <CodingStruture></CodingStruture>
            <Portfolio></Portfolio>
            <Skills></Skills>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Home;