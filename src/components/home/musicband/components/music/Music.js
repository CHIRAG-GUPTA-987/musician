

import React from 'react'
import "./music.css"

import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Headingline from '../../../musicartist/components/headingline/Headingline';

const Music = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className="Music">
      <div className="Music_heading"><Fade bottom duration={1500}>MUSIC<Headingline type='red'/></Fade></div>
    <Slider {...settings} >
    <div >
    <div className="Music_carousel1">
    <div className='MusicItem'>
                        <Link to='#'>
                            <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/music-album-01.jpg" alt="" />
                            <div className="MusicTitle">LIVE FORM LONDON</div>
                            <span><a href="">STORE  </a>|</span>
                            <span><a href="">ITUNES  </a>|</span>
                            <span><a href="">LISTEN</a></span>
                        </Link>
                    </div>
                    <div className='MusicItem'>
                        <Link to='#'>
                            <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/music-album-02.jpg" alt="" />
                            <div className="MusicTitle">ROCK STRAM VOL.1</div>
                            <span><a href="">STORE  </a>|</span>
                            <span><a href="">ITUNES  </a>|</span>
                            <span><a href="">LISTEN</a></span>
                        </Link>
                    </div>
                    <div className='MusicItem'>
                        <Link to='#'>
                            <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/music-album-03.jpg" alt="" />
                            <div className="MusicTitle">ROCKING STAR</div>
                            <span><a href="">STORE  </a>|</span>
                            <span><a href="">ITUNES  </a>|</span>
                            <span><a href="">LISTEN</a></span>
                        </Link>
                    </div>
                    <div className='MusicItem'>
                        <Link to='#'>
                            <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/music-album-04.jpg" alt="" />
                            <div className="MusicTitle">LIVE AT BERLIN</div>
                            <span><a href="">STORE  </a>|</span>
                            <span><a href="">ITUNES  </a>|</span>
                            <span><a href="">LISTEN</a></span>
                        </Link>
                    </div>
                    
           
        </div>
    </div>

    <div >
       <div className="Music_carousel2">
            
       <div className='MusicItem'>
                       <Link to='#'>
                           <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/music-album-03.jpg" alt="" />
                           <div className="MusicTitle">ROCKING STAR</div>
                           <span><a href="">STORE  </a>|</span>
                           <span><a href="">ITUNES  </a>|</span>
                           <span><a href="">LISTEN</a></span>
                       </Link>
                   </div>
                   <div className='MusicItem'>
                       <Link to='#'>
                           <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/music-album-04.jpg" alt="" />
                           <div className="MusicTitle">LIVE AT BERLIN</div>
                           <span><a href="">STORE  </a>|</span>
                           <span><a href="">ITUNES  </a>|</span>
                           <span><a href="">LISTEN</a></span>
                       </Link>
                   </div>
                   <div className='MusicItem'>
                       <Link to='#'>
                           <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/music-album-05.jpg" alt="" />
                           <div className="MusicTitle">BORN TO RPCK</div>
                           <span><a href="">STORE  </a>|</span>
                           <span><a href="">ITUNES  </a>|</span>
                           <span><a href="">LISTEN</a></span>
                       </Link>
                   </div>
                   <div className='MusicItem'>
                       <Link to='#'>
                           <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/music-album-06.jpg" alt="" />
                           <div className="MusicTitle">MUSICIAN PARTY</div>
                           <span><a href="">STORE  </a>|</span>
                           <span><a href="">ITUNES  </a>|</span>
                           <span><a href="">LISTEN</a></span>
                       </Link>
                   </div>

           
           
         </div>
      </div>
  
  </Slider>
   </div>
  )
}

export default Music

// import React from 'react'
// import "./music.css"
// import { Link } from 'react-router-dom'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// const Music = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };
//     return (
//         <div className='Music'>
//             <div className='Music_heading'>MUSIC</div>
//             <Slider {...settings} >
//                 <div id='slider'>
//                     <div className='MusicItem'>
//                         <Link to='#'>
//                             <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/music-album-01.jpg" alt="" />
//                             <div className="MusicTitle">LIVE FORM LONDON</div>
//                             <span><a href="">STORE  |</a>|</span>
//                             <span><a href="">ITUNES  </a>|</span>
//                             <span><a href="">LISTEN</a></span>
//                         </Link>
//                     </div>
//                     <div className='MusicItem'>
//                         <Link to='#'>
//                             <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/music-album-02.jpg" alt="" />
//                             <div className="MusicTitle">ROCK STRAM VOL.1</div>
//                             <span><a href="">STORE  </a>|</span>
//                             <span><a href="">ITUNES  </a>|</span>
//                             <span><a href="">LISTEN</a></span>
//                         </Link>
//                     </div>
//                     <div className='MusicItem'>
//                         <Link to='#'>
//                             <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/music-album-03.jpg" alt="" />
//                             <div className="MusicTitle">ROCKING STAR</div>
//                             <span><a href="">STORE  </a>|</span>
//                             <span><a href="">ITUNES  </a>|</span>
//                             <span><a href="">LISTEN</a></span>
//                         </Link>
//                     </div>
//                     <div className='MusicItem'>
//                         <Link to='#'>
//                             <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/music-album-04.jpg" alt="" />
//                             <div className="MusicTitle">LIVE AT BERLIN</div>
//                             <span><a href="">STORE  </a>|</span>
//                             <span><a href="">ITUNES  </a>|</span>
//                             <span><a href="">LISTEN</a></span>
//                         </Link>
//                     </div>
//                     </div>
//                     {/* <div id='slider'>
//                 <div className='MusicItem'>
//                         <Link to='#'>
//                             <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/music-album-01.jpg" alt="" />
//                             <div className="MusicTitle">LIVE FORM LONDON</div>
//                             <span><a href="">STORE  |</a>|</span>
//                             <span><a href="">ITUNES  </a>|</span>
//                             <span><a href="">LISTEN</a></span>
//                         </Link>
//                     </div>
//                     <div className='MusicItem'>
//                         <Link to='#'>
//                             <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/music-album-02.jpg" alt="" />
//                             <div className="MusicTitle">ROCK STRAM VOL.1</div>
//                             <span><a href="">STORE  </a>|</span>
//                             <span><a href="">ITUNES  </a>|</span>
//                             <span><a href="">LISTEN</a></span>
//                         </Link>
//                     </div>
//                     <div className='MusicItem'>
//                         <Link to='#'>
//                             <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/music-album-03.jpg" alt="" />
//                             <div className="MusicTitle">ROCKING STAR</div>
//                             <span><a href="">STORE  </a>|</span>
//                             <span><a href="">ITUNES  </a>|</span>
//                             <span><a href="">LISTEN</a></span>
//                         </Link>
//                     </div>
//                     <div className='MusicItem'>
//                         <Link to='#'>
//                             <img src="https://www.pixel-industry.com/html/musician/musician-html/img/pics/music-album-04.jpg" alt="" />
//                             <div className="MusicTitle">LIVE AT BERLIN</div>
//                             <span><a href="">STORE  </a>|</span>
//                             <span><a href="">ITUNES  </a>|</span>
//                             <span><a href="">LISTEN</a></span>
//                         </Link>
//                     </div>
//                     </div> */}
                
          
//                     </Slider>
//         </div>

//     )
// }

// export default Music
