

const About = () => {
  return (
    <div className="min-h-[79.8vh] w-full">
      <div className="flex flex-col w-full px-[2%] pt-[40px]">
        <div className="flex flex-col w-full rounded-lg border-[0.4px] border-gray-700 h-max bg-navbar_bg pt-[40px] px-[30px]">
          <h1 className="text-white text-[32px] font-[500]">
            About of Github Finder project
          </h1>
          <p className="md:text-[24px] sm:text-[18px] text-[16px] text-white mt-[20px] w-[77%] h-max">
            This project was created in order to search for any person with his
            nick name on github and get acquainted with his projects and to
            create convenience for the user. is sure to be able to provide and
            quickly find the user you are looking for.
          </p>
          <div className="pt-[40px] md:text-[22px] sm:text-[19px] text-[17px] text-white mb-[30px] mt-auto font-[500]">
            If you have any ideas about the project, contact
            <a
              href="https://t.me/xojiakbar_dev"
              className="text-[22px] text-blue-600 ml-[7px]"
            >
              "Author"
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
