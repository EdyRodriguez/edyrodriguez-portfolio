import React, { useEffect, useState } from "react";
import useTranslation from "../../../customHooks/translations";
import skillsInfo from "./Skills-info";

export default function Skills() {
  const translation = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skillsInfo.length);
    }, 5000); // Change the carousel every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="skills flex flex-col items-center justify-center text-text-color">
      <h1 className="text-3xl mb-4 ">{translation.skills.title}</h1>
      <div className="logos group relative overflow-hidden whitespace-nowrap w-[80%]  py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div className="animate-slide-left-infinite group-hover:animation-pause w-max flex flex-wrap">
          {skillsInfo.concat(skillsInfo).map((skill, index) => (
            <div
              key={`${skill.id}-${index}`}
              className="skill flex flex-col items-center mx-4 h-16 justify-center p-4 rounded-full text-center bg-skills-background m-2">
              <a
                href={skill.link}
                target="_blank"
                rel="noreferrer"
                className="text-3xl">
                {skill.icon}
              </a>
              <p className="text-lg">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
