

const SectionTitle = ({subHeading, heading, animateSubHeading}) => {
    return (
        <div className="text-center">
            <h4 className="text-gray spacing tracking-[.25em] uppercase font-semibold text-base pt-4">{subHeading} <span className="text-orange">{animateSubHeading}</span></h4>
        <div className="flex justify-center items-center">
        <h2 className="text-gray font-bold text-2xl lg:text-4xl px-4 lg:px-0 lg:max-w-xl py-4 lg:py-7">{heading}</h2>
        </div>
        </div>
    );
};

export default SectionTitle;