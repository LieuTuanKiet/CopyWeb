import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Research from '../components/Research'
import Project from '../components/Project'
import Team from '../components/Team'
import About from '../components/About'

export default function HomePage(){
    return(
        <>
        <Header />
        <Home />
        <Research />
        <Project />
        <Team />
        <About />
        <Footer />
        </>
    )
}
