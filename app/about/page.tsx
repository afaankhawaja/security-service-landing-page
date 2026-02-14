import { AboutUs } from '@/components/AboutUs'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const AboutPage = () => {
    return (
        <main className="min-h-screen flex flex-col relative">
            <Navbar />
            <div className="pt-20 h-[100vh]">
                {/* <AboutUs /> */}
            </div>
            <Footer />
        </main>
    )
}

export default AboutPage
