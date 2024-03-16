import { useState, useEffect } from 'react';
import useFetchData from '../../hooks/useFetchData';
import { BASE_URL } from '../../config';
import DoctorCard from './../../components/Doctors/DoctorCard';
import Loading from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';
import { formateDate } from '../../utils/formateDate';

const MyBookings = () => {
  const { data: appointments, loading, error } = useFetchData(
    `${BASE_URL}/users/appointments/my-appointments`
  );
  const [sortedAppointments, setSortedAppointments] = useState([]);

  useEffect(() => {
    if (appointments && appointments.length > 0) {
      const sorted = [...appointments].sort((a, b) => {
        return new Date(b.bookingDate) - new Date(a.bookingDate); // Assuming bookingDate field exists in your appointment object
      });
      setSortedAppointments(sorted);
    }
  }, [appointments]);

  // Function to convert MongoDB ObjectId to a numerical value
  const generateNumericToken = (id) => {
    // Extract only the numerical part from the hexadecimal string
    return parseInt(id.toString().substring(0, 8), 16);
  };

  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && sortedAppointments.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {sortedAppointments.map((appointment) => (
            <div
              key={appointment._id}
              className="bg-white rounded-md shadow-md p-6 mb-4"
            >
              <DoctorCard doctor={appointment} />
              <div className="mt-4">
                <h2 className="text-lg font-semibold">Confirmation Details</h2>
                <div className="confirmation-details">
                  <p>
                    <span className="font-semibold">Token ID:</span>{' '}
                    {generateNumericToken(appointment._id)}
                  </p>

                  <p>
                    <span className="font-semibold">Doctor:</span>{' '}
                    {appointment.doctorName} ({appointment.name})
                  </p>
                  <p>
                    <span className="font-semibold">Specialization:</span>{' '}
                    {appointment.doctorName} ({appointment.specialization})
                  </p>

                  <p>
                    <span className="font-semibold">Location:</span> Doctrustcare
                    Clinic
                  </p>
                  <p>
                    <span className="font-semibold">Payment Status:</span> Paid
                  </p>
                  <p>
                    <span className="font-semibold">Confirmation Status:</span>{' '}
                    Confirmed
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && sortedAppointments.length === 0 && (
        <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor">
          You did not book any doctor yet!
        </h2>
      )}
    </div>
  );
};

export default MyBookings;
