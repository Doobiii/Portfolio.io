import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-3.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.png";
import project_person from "../assets/about-img.png";
import "swiper/css";
import "swiper/css/pagination";
const Project = () => {
  const projects = [
    {
      img: project1,
      name: "AI Summarizer",
      github_link: "https://github.com/Doobiii/ai-summarizer",
      live_link: "https://ai-summarizer-theta-ruby.vercel.app/",
    },
    {
      img: project2,
      name: "Fitness Web App",
      github_link: "https://github.com/Doobiii/Fitness-web-app",
      live_link: "#",
    },
    {
      img: project3,
      name: "NSS-NIT Silchar",
      github_link: "https://github.com/Doobiii/Project_1",
      live_link:
        "https://nss-prototype-7ir8bxvm1-dongo-morans-projects.vercel.app/",
    },
    {
      img: project4,
      name: "Advice App",
      github_link: "https://github.com/Doobiii/Quote_gen",
      live_link: "https://quote-gen-phi.vercel.app/",
    },
    {
      img: project5,
      name: "Le Catering",
      github_link: "https://github.com/Doobiii/Le-Catering",
      live_link: "https://doobiii.github.io/Le-Catering/",
    },
  ];
  return (
    <section id="project" className="py-10 text-grey">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-grey-900">Projects</span>
        </h3>
        <p className="text-gray-900 my-3 text-lg">My Awesome Work</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesperview={2}
            spaceBetween={10}
            breakpoints={{
              768: {
                slidesPerView: 2.5,
              },
              500: {
                slidesPerView: 2,
              },
              450: {
                slidesPerView: 1.5,
              },
            }}
            loop={true}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-zinc-400 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-200 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-100 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
