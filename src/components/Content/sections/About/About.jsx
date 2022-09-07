import useTranslation from "../../../customHooks/translations";
import './About.css';
import photo from '../../../../assets/photo.png';


export default function About() {
    const translation = useTranslation();
    return (
        <section className="About">
            
            <div className="about-container">
            <h1>{translation.about.title}</h1>
            <p>{translation.about.description}</p>
            <button>Contact Me</button>
            </div>
            <img src={photo} className='photo' alt="picture" />
        </section>
    );
}