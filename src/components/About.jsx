import aboutImg from "../assets/about-img.jpg";

const About = () => {
  const info = [
    { text: "Years experience", count: "02" },
    { text: "Completed Projects", count: "14" },
    { text: "Companies Work", count: "02" },
  ];
  return (
    <section id="about" className="py-10 text-grey">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-grey-900">Me</span>
        </h3>
        <p className="text-gray-900 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-900 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto text-wrap">
                As a full stack intern at BitsGate, I&#39;ve honed my skills
                across both frontend and backend development, gaining practical
                experience in building robust web applications. My passion for
                web development drives me to continuously learn and innovate,
                seeking to contribute meaningfully to the ever-evolving digital
                landscape.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-black">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a
                href="https://drive.google.com/uc?export=download&id=1c1GAOO6gKBfxGcyKeizjhmXkSSg8Kwpu"
                download="Deepak_2113133.pdf"
              >
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
