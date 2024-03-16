import React from "react";
import aboutImg from "../../assets/images/about.png"
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About =()=> {
return (
<section>
<div className="container">
<div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col 
lg:flex-row">

{/*==========about img =======*/}

<div className="relative w-3/4 lg:w-1/2 xl:w-[770px) z-10 order-2 lg:order-1">
<img src={aboutImg} alt="" />
<div className= "absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
<img src={aboutCardImg} alt="" />
</div>
</div>

{/*==========about content =======*/}
<div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
  <h2 className="heading">Committed to Exceptional Healthcare</h2>
  <p className="text__para">For 5 years, we've been acknowledged by Health Excellence Magazine as a premier healthcare facility, consistently ranking among the top public holding the #1 position in Silchar,India.</p>

  <p className="text__para mt-[30px]">Our commitment to excellence propels us forward every day. We focus on the well-being of our patients, always looking ahead to what more we can achieve tomorrow. Striving for the best in healthcare.</p>
  <Link to='/services'>
    <button className="btn">Discover Our Services</button>
  </Link>
</div>

</div>
</div>
</section>
);
};
export default About;