import React, {useState, useEffect} from 'react';
import FaArrowCircleUp from '../../images/favicon.png';
import './style.scss';


const ScrollTopArrow = () =>{
  const siteArrow = FaArrowCircleUp
  const [showScroll, setShowScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    
        <siteArrow className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}} >
          <div id="toTop" class="just-scroll to-up color-black"><div class="mouse-icon"><div class="wheel"></div></div></div>
        </siteArrow>  
         
  );
}

export default ScrollTopArrow;