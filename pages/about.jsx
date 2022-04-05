import React from 'react'
import Navbar from '../components/Navbar'
import styles from "../styles/About.module.css"
import styleshome from "../styles/Home.module.css"

const About = () => {
    return (
        <>
            <div className={styleshome.container}>
                <Navbar />
            </div>

            <div className={styles.main}>
                <h1>Hello this is the About us page</h1>
            </div>

        </>
    )
}

export default About