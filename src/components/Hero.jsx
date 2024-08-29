
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'
import { useState } from 'react'
import { useEffect } from 'react'
const Hero = () => {

const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)


const handleSrcSet = () =>{
  if (window.innerWidth < 760)
  {setVideoSrc(smallHeroVideo)}
  else{
    setVideoSrc(heroVideo)
  }
}

useEffect( () => {
  window.addEventListener('resize' , handleSrcSet)

  return() =>
  {
    window.removeEventListener('resize' , handleSrcSet)
  }
}, [])
useGSAP(() => {
gsap.to('#hero' , {
  opacity:1 ,  delay: 2
})
gsap.to('#cta' , {
  y:0 , 
  opacity: 1,
  delay:2 
})



},[])



  return (<>
  <section className="w-full nav-height bg-black">
    <div className="h-5/6 w-full flex-center flex-col ">
      <p id='hero' className="hero-title" key='title'>iPhone 15 Pro</p>
      <div className='md:w-10/12 w-9/12 sm:8/12'>
        <video autoPlay muted playsInline={true}
        key={videoSrc}>
          <source src={videoSrc} type='video/mp4'/>
        </video>
      </div>
    </div>
    <div id='cta' className='flex flex-col opacity-0 items-center translate-y-20'>
        <a href="#highlight" className='btn'>
        buy
        </a>
        <p className='font-normal text-xl'> From $199/month or $999</p>
    </div>

  </section>
  </>
  )
}

export default Hero