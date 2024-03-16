import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import convertTime from "../../utils/convertTime"; 
import { BASE_URL, token } from './../../config';
import { toast } from 'react-toastify'; 

const SidePanel =({ doctorId, ticketPrice, timeSlots })=> {
  const [selectedDate, setSelectedDate] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const bookingHandler = async () => {
    if (!selectedDate) {
      setErrorMessage('Please select a date.');
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
        method: 'post',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message + "");
      }
      
      if (data.session.url) {
        window.location.href = data.session.url;
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text__para mt-0 font-semibold">Ticket Price:</p>
            <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
              Rs {ticketPrice} 
            </span>
          </div>
          <div className="mt-4">
            <p className="text__para mt-0 font-semibold text-headingColor">Available Time Slots:</p>
            <ul className="mt-3">
              {timeSlots?.map((item,index)=> (
                <li key={index} className="flex items-center justify-between mb-2"> 
                  <p className="text-[15px] leading-6 text-textColor font-semibold">
                    {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
                  </p>
                  <p className="text-[15px] leading-6 text-textColor font-semibold">
                    {convertTime(item.startingTime)} - {convertTime(item.endingTime)}
                  </p>
                </li>
              ))}
            </ul> 
          </div>
        </div>
        <div className="mt-0 flex flex-col md:flex-row md:items-start">
          <p className="text__para mt-11 font-semibold text-headingColor">Select Date:</p>
          <div className="mt-0 md:mt-0 md:ml-5"> {/* Adjusted margin */}
            <DatePicker
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                setErrorMessage(''); // Clear error message when date is selected
              }}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()} // Restrict to future dates
              className="btn px-2 w-full rounded-md"
            />
          </div>
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Display error message */}
        <button onClick={bookingHandler} className="btn mt-4 px-2 w-full rounded-md">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default SidePanel;
