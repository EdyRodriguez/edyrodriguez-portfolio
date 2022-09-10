import useTranslation from "../../../customHooks/translations";
import './About.css';
import photo from '../../../../assets/photo.png';


export default function About() {
    const translation = useTranslation();
    return (
        <section className="About">
            
            <div className="about-container">
            <h1 className="title">{translation.about.title}</h1>
            <p>{translation.about.description}</p>
            <button className="button">{translation.about.button}</button>
            </div>
            <img src={photo} className='photo' alt="picture" />
        </section>
    );
}