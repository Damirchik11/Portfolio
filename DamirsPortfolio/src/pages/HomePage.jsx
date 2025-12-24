import NavBar from '../components/NavBar/NavBar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
const HomePage = () => {
    return (
        <>
            <NavBar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
export default HomePage