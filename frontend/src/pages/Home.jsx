import React from 'react';
import icon01 from '../assets/images/icon01.png';
import icon03 from '../assets/images/icon03.png';
import faqImg from '../assets/images/faq-img.png';
import { Link } from 'react-router-dom';
import { BsArrowRight} from 'react-icons/bs';
import About from '../components/About/About';
import FaqList from '../components/Faq/FaqList';
import Testimonial from '../components/Testimonial/Testimonial';
import backgroundImage from '../assets/images/backgroundImage.jpg';


const Home = () => {
  return (
    <>

    {/* ======hero section======== */}

    <section className="relative py-16 text-black mx-auto max-w-screen-4xl">
  <div className="container relative z-10">
    <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

      {/* =========hero content======== */}

      <div>
        <div className="lg:w-[700px]">
        <div className="bg-black border border-solid border-black p-6">
  <h1 className="text-[36px] text-white font-[700] md:text-[40px] md:leading-[70px]">
    Empowering Healthy, Fulfilling Lives
  </h1>
  <p className="text__para text-white">Welcome to Doctrustcare Clinic – your dedicated platform for seamless healthcare management. Easily schedule appointments with our trusted healthcare professionals, effortlessly organize your health calendar, and enjoy streamlined access to expert medical care. Embark on your journey to optimal health with a simple click.</p>
  </div>
<Link to='/doctors'>
            <button className="btn">Schedule an Appointment</button>
          </Link>
        </div>

        {/*=====hero counter========*/}
        <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[50px]">
          <div>
            <h2 className="text-[36px] leading-[56px] lg:text-[40px] lg:leading-[54px] font-[900] text-white">
              96% 
            </h2>
            <span className="w-[160px] h-3 bg-purpleColor rounded-full block mt-[-10px]"></span>
            <p className="text__para text-white">Positive Feedback</p>
          </div>
          
          <div>
            <h2 className="text-[36px] leading-[56px] lg:text-[40px] lg:leading-[54px] font-[900] text-white">
              8+ yrs
            </h2>
            <span className="w-[170px] h-3 bg-yellowColor rounded-full block mt-[-10px]"></span>
            <p className="text__para text-white">Experienced Specialists</p>
          </div>

          <div>
            <h2 className="text-[36px] leading-[56px] lg:text-[40px] lg:leading-[54px] font-[900] text-white">
              1500+
            </h2>
            <span className="w-[160px] h-3 bg-irisBlueColor rounded-full block mt-[-10px]"></span>
            <p className="text__para text-white">Patient Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Background image */}
  <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
<br /></section>




<section className="relative bg-gradient-to-b from-gray-100 via-green-50 to-purple-100 py-16 text-black mx-auto max-w-screen-4xl">
<br /><br /><br />
{/* ======hero section end======== */}

{/* ======about us section start ======== */}

  <div className="about-us-container text-center">
    <div className="about-us-heading-container inline-block">
      <div className="line"></div>
      <h2 className="about-us-heading inline-block">About Our<span className="text-green-500"> Clinic</span></h2>
      <div className="line"></div>
    </div>
    <p className="key-features-heading">A One Stop Centre in your neighbourhood for all your healthcare needs</p>
    <br />
    <p className="about-us-paragraph">
      Our Doctrustcare Clinic provides affordable and quality healthcare. The organization implements an innovative family and rural 
      patient-centered healthcare model delivered through a chain of family clinics. We strive to make Our Family Clinic a place where patients can always feel confident 
      that they are receiving the best care in a friendly atmosphere. By understanding what is most important to you and your family, we’re able to deliver better quality 
      healthcare that is also convenient. Our Family Clinic offers primary care for individuals and families across all ages, genders, and diseases. We provide care for all members 
      of a family during all phases of life - infancy, adolescence, adulthood, and senior years. Our Family Clinic revives the age-old concept of a ‘Family Doctor’ who you can trust 
      and rely on for all your healthcare needs, be it advice, treatment, or even a minor surgical procedure.
    </p>
  </div>
</section>



      {/* ======about us section end ======== */}



<section className="bg-gradient-to-b from-purple-100 via-blue-100 to-purple-100 py-16 text-black mx-auto max-w-screen-4xl">
  <div className="container mx-auto">
    <div className="lg:w-[600px] mx-auto text-center">
      <h2 className="text-4xl font-extrabold mb-8 text-white-900 relative">
        Providing the Best clinic services
        <div className="h-1 w-20 bg-purple-900 mx-auto mt-2"></div>
      </h2>
      <p className="text-lg leading-7 text-gray-900">
      Exceptional care for everyone. Our clinic provides unparalleled, expert healthcare.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
      <div className="py-8 px-8 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-6">
          <img src={icon01} alt="Find a Doctor" />
        </div>
        <div className="text-center">
          <h2 className="text-2xl leading-9 text-headingColor font-bold mb-4">
            Find a Doctor
          </h2>
          <p className="text-base text-left leading-7 text-textColor">
            Unlock Your Wellness Journey: Navigate to 'Find a Doctor' and discover a world of expert healthcare tailored just for you. Your path to personalized care starts here.
          </p>
          <Link to="/doctors" className="inline-block mt-6 btn">
            <BsArrowRight className="w-6 h-5" />
          </Link>
        </div>
      </div>

      <div className="py-8 px-8 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-6">
          <img src={icon03} alt="Book Appointment" />
        </div>
        <div className="text-center">
          <h2 className="text-2xl leading-9 text-headingColor font-bold mb-4">
            Book Appointment
          </h2>
          <p className="text-base text-left leading-7 text-textColor">
            Seize Your Health Moment: Click 'Book Appointment' and effortlessly schedule your tailored healthcare experience. Your journey to wellness starts with a simple booking, putting your health in your hands.
          </p>
          <Link to="/doctors" className="inline-block mt-6 btn">
            <BsArrowRight className="w-6 h-5" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
<br />

<About />



{/* ======our great doctors start======== */}

<section>
<section className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900 text-white py-9 mx-auto max-w-screen-4xl">
      <div className="container mx-auto text-center">
        <div className="xl:w-[660px] mx-auto">
          <h2 className="text-4xl font-extrabold mb-6 text-yellow-400">Meet Our Exceptional Healing Heroes</h2>
          <p className="text-lg">
            Experience unparalleled care with our exceptional team of dedicated healthcare professionals. Trusted expertise, personalized attention — your well-being in the hands of excellence.
          </p>
        </div>
      </div>
    </section>
</section>

{/* ======our great doctors ends======== */}

{/* ======faq section start======== */}

<section>
  <div className="container">
    <div className="flex justify-between gap-[50px] lg:gap-0">
      <div className="w-1/3 hidden md:block">
        <img src={faqImg} alt="" />
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="heading"> Most questions by our beloved patients</h2>
<FaqList />
      </div>
      
    </div>
  </div>
</section>
<br />
<br />

{/* ======faq section end======== */}

{/* ======testimonial section start ======== */}
<section className="bg-gradient-to-b from-green-100 via-gray-150 to-gray-200 py-16 text-black mx-auto max-w-screen-2xl">
  <div className="container">
  <div className="xl:w-[470px] mx-auto">
  <h2 className="heading text-center">What our patient say</h2> 
<p className="text__para text-center">
Hear from Our Patients: Real stories, real experiences. Discover what our patients say about their journey with us. Your well-being is at the heart of our success stories.
</p> 
  </div>
<Testimonial />
<br/>
<br/>
 
  </div>

 
</section>

{/* ======testimonial section end======== */}



  </>
  )
}

export default Home;
