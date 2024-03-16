import starIcon from '../../assets/images/Star.png';
import { Link } from 'react-router-dom';

const DoctorCard = ({doctor}) => {
  const {
    name,
    avgRating,
    totalRating,
    photo, 
    specialization, 
    experiences
  } = doctor;

  return (
    <div className='p-3 lg:p-8'> 
      <Link to={`/doctors/${doctor._id}`}>
        <div>
          <img src={photo} className='w-full rounded-lg' alt="" /> {/* Added rounded-lg class */}
        </div>
      </Link>

      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
        {name}
      </h2>

      <div className="mt-2 lg:mt-4 flex items-center justify-between"> 
        <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-bold rounded">
          {specialization}
        </span>

        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor"> 
            <img src={starIcon} alt=""/> {avgRating}
          </span> 
          <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[600] text-textColor">
            ({totalRating})
          </span>
        </div>
      </div>

      <div className="mt-[18px] lg:mt-1 flex items-center justify-between">  
        <div>
          {/*<h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor"> +{totalPatients} patients </h3> */}
          <p className="text-[14px] leading-6 font-[600] text-textColor">
            At {experiences && experiences[0]?.hospital} 
          </p>
        </div>
        <Link to={`/doctors/${doctor._id}`} className="inline-block mt-0 btn text-sm px-6 py-3 rounded-lg">
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
