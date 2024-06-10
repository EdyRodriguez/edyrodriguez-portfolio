import useTranslation from "../../../customHooks/translations";
import photo from "../../../../assets/photo.png";

export default function About() {
  const translation = useTranslation();
  return (
    <section className="About bg-bg-body flex flex-col items-center justify-center md:flex-row items-center justify-around text-text-color py-8">
      <div className="about-container w-full md:w-1/2 text-center md:text-center sm:text-left">
        <h1 className="title text-text-light text-3xl  md:text-4xl mb-4">{translation.about.title}</h1>
        <p className="paragraph text-base md:text-lg">{translation.about.description}</p>
        <button className="button bg-button-navbar-bg text-text-links text-lg md:text-xl font-semibold py-2 px-4 rounded-full mt-4 hover:bg-button-bg-hover hover:text-text-links-hover transition duration-500">{translation.about.button}</button>
      </div>
      <div className="photo-container w-full md:w-1/2 flex justify-center">
        <img src={photo} className="photo rounded-full " alt="picture" />
      </div>
    </section>
  );
}
