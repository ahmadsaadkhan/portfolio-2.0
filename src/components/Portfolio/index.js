import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Loader from 'react-loaders'

const Portfolio = ({ data }) => {
    console.log(data)
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const styleLetter = () => {
            return setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 4000);
        }
        styleLetter()
    }, []);
    return (
        <>
            <div className="container main-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                            idx={15}
                        />
                    </h1>
                    {data && data.projects.map((project) => {
                        var projectImage = "images/portfolio/" + project.image;
                        return (
                            <div key={project.title} className="portfolio-item">
                                <div className="item-wrap">
                                    <a href={project.url} target="_blank" rel="noreferrer" title={project.title}>
                                        <img alt={project.title} src={projectImage} />
                                        <div className="link-icon">
                                            <i className="fa fa-link"></i>
                                        </div>
                                    </a>
                                </div>
                                <h6>{project.title}</h6>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;