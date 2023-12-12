import { Helmet } from "react-helmet-async";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import PageBanner from "../../Components/PageBanner/PageBanner";


const Contact = () => {
  return (
    <div>
        {/* <Helmet>
        <title>My Portfolio | Contacts</title>
      </Helmet> */}
        <PageBanner bannerTitle={'Contacts'} page={'Contact'}></PageBanner>
        <ContactInfo></ContactInfo>
    </div>
  );
};

export default Contact;
