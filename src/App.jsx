import { useState,useRef,useEffect } from 'react'
import gsap from 'gsap'
import Sidebar from './components/sidebar/Sidebar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
 const [isLoading, setIsLoading] = useState(false)
 const spinnerRef = useRef()

  useEffect(()=> {
    if (isLoading && spinnerRef.current) {
      const animation = gsap.to(spinnerRef.current, {
        rotation: 360,
        duration: 0.5,
        ease: "linear",
        repeat: -1,
      });
      
      // Cleanup function to kill animation when component unmounts or isLoading changes
      return () => animation.kill();
    }
  },[isLoading])

    useEffect(() => {
 document.body.style.overflow = isLoading ? "hidden" : "";
}, [isLoading]);

  return (
    <>
      <div className="">
      {isLoading && ( <div className="fixed z-50  w-full flex justify-center items-center min-h-dvh m-0 bg-white/30 backdrop-blur-md ">
                      <div ref={spinnerRef}
                        className="w-10 h-10 border-4 border-t-white rounded-full">    </div>
                    </div>)}



        <Sidebar/>
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
         <Contact setIsLoading={setIsLoading}/>
          <Footer/>
      </div>
    </>
  )
}

export default App
