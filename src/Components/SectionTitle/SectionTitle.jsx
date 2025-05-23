const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className=" md:w-4/12 mx-auto text-center">
      <h3 className="text-[#1A1423] font-extrabold text-4xl uppercase border-y-4 py-4 mb-2 mt-16">
        {heading}
      </h3>
      <p className=" text-yellow-600 mb-6">----{subHeading}----</p>
    </div>
  );
};

export default SectionTitle;
