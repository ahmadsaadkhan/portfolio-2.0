import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Loader from 'react-loaders'

const Contact = () => {
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
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Please enter form to send me message and i will get back to you asap. Thanks
                    </p>
                    <div className="contact-form">
                        <form>
                            <ul>
                                <li className="half">
                                    <input type="text" name='name' placeholder='name' />
                                </li>
                                <li className="half">
                                    <input type="email" name='email' placeholder='email' />
                                </li>
                                <li>
                                    <input type="text" name='subject' placeholder='subject' />
                                </li>
                                <li>
                                    <textarea name="message" id="" cols="30" rows="10"></textarea>
                                </li>
                                <li>
                                    <input className='flat-button' type="submit" value="Send" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Contact;