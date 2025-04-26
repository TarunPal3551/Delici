import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bg5 from '../../assets/images/background/bg-5.png';
import bg6 from '../../assets/images/background/bg-6.png';
import toronto from '../../assets/images/resource/toronto.png';
import paris from '../../assets/images/resource/paris.png';
import dubai from '../../assets/images/resource/dubai.png';
import ny from '../../assets/images/resource/ny.png';

function Book() {
  // Step 1: State variables for controlled form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [person, setPerson] = useState('1 Person');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('08 : 00 am');
  const [loading, setLoading] = useState(false); // Loading state to indicate when the request is being processed
  const [error, setError] = useState(null); // To handle any errors

  // Step 2: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Step 3: Validate the form (optional, but a good practice)
    if (!name || !email || !date || !time) {
      setError('Please fill out all the fields.');
      return;
    }

    // Step 4: Set loading state to true while sending the data
    setLoading(true);

    // Step 5: Prepare the data to be sent to the backend
    const formData = {
      name,
      email,
      person,
      date,
      time,
    };

    try {
      const response = await fetch('http://localhost:5000/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      // Step 6: Handle the response from the backend
      const data = await response.json();

      if (response.ok) {
        // Successful submission
        alert('Reservation successful!');
      } else {
        // Handle any errors from the backend
        setError(data.error || 'An error occurred while submitting your reservation.');
      }
    } catch (error) {
      // Catch network or other errors
      setError('Network error, please try again later.');
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <>
      <section className="online-reservation inner-page">
        <div className="left-bg"><img src={bg5} alt="" title="" /></div>
        <div className="right-bg"><img src={bg6} alt="" title="" /></div>
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle"><span>Reservation</span></div>
            <div className="pattern-image">
              <img src={require('../../assets/images/icons/separator.svg').default} alt="" title="" />
            </div>
            <h2>Book Table</h2>
            <div className="text desc">Restaurant will be open for all days, Sunday night will be closed...</div>
            <div className="text request-info">Booking request <Link to="#">+(974) 7711 1504‬</Link> or fill out the order form</div>
          </div>

          <div className="default-form reservation-form">
            <form onSubmit={handleSubmit}>
              <div className="row clearfix">

                {/* Name Field */}
                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                  <div className="field-inner">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                  <div className="field-inner">
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Person Select */}
                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                  <div className="field-inner">
                    <select value={person} onChange={(e) => setPerson(e.target.value)}>
                      <option>1 Person</option>
                      <option>2 Person</option>
                      <option>3 Person</option>
                      <option>4 Person</option>
                      <option>5 Person</option>
                      <option>6 Person</option>
                      <option>7 Person</option>
                    </select>
                  </div>
                </div>

                {/* Date Field */}
                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                  <div className="field-inner">
                    <input
                      type="text"
                      placeholder="DD-MM-YYYY"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Time Select */}
                <div className="form-group col-lg-4 col-md-12 col-sm-12">
                  <div className="field-inner">
                    <select value={time} onChange={(e) => setTime(e.target.value)}>
                      <option>08 : 00 am</option>
                      <option>09 : 00 am</option>
                      <option>10 : 00 am</option>
                      <option>11 : 00 am</option>
                      <option>12 : 00 pm</option>
                      <option>01 : 00 pm</option>
                      <option>02 : 00 pm</option>
                      <option>03 : 00 pm</option>
                      <option>04 : 00 pm</option>
                      <option>05 : 00 pm</option>
                      <option>06 : 00 pm</option>
                      <option>07 : 00 pm</option>
                      <option>08 : 00 pm</option>
                      <option>09 : 00 pm</option>
                      <option>10 : 00 pm</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="theme-btn btn-style-one clearfix" disabled={loading}>
                <span className="btn-wrap">
                  <span className="text-one">book a table</span>
                  <span className="text-two">book a table</span>
                </span>
              </button>
            </form>
            <div className="powered-by">*Powered by OpenTable</div>
          </div>
        </div>

        {/* Display error or success message */}
        {error && <p className="error">{error}</p>}
      </section>
    </>
  );
}

export default Book;
