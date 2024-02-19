import React, { useRef } from 'react';
import { RiMailLine, RiInstagramLine } from 'react-icons/ri';

const ClubMembers = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300; // Adjust scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300; // Adjust scroll amount as needed
    }
  };

  const teamMembers = [
    {
      name: 'President',
      imgUrl: 'images/image172.jpg',
      description: 'Vishnu Revanth Reddy',
    },
    {
      name: 'General Secretary',
      imgUrl: 'images/image173.jpg',
      description: 'Mansi',
    },
    {
      name: 'Pre Head',
      imgUrl: 'images/image174.jpg',
      description: 'Dhruv pechetty ',
    },
    {
      name: 'convenor',
      imgUrl: 'images/image175.jpg',
      description: 'Karthik reddy pesaru',
    },
    {
      name: 'convenor',
      imgUrl: 'images/image176.jpg',
      description: 'Karthik reddy pesaru',
    },
    {
      name: 'convenor',
      imgUrl: 'images/image177.jpg',
      description: 'Karthik reddy pesaru',
    },
    {
      name: 'convenor',
      imgUrl: 'images/image11.jpg',
      description: 'Karthik reddy pesaru',
    },
    {
      name: 'convenor',
      imgUrl: 'images/image12.jpg',
      description: 'Karthik reddy pesaru',
    },

    {
      name: 'convenor',
      imgUrl: 'images/image13.jpg',
      description: 'Karthik reddy pesaru',
    },
    {
      name: 'convenor',
      imgUrl: 'images/image14.jpg',
      description: 'Karthik reddy pesaru',
    },
    {
      name: 'convenor',
      imgUrl: 'images/image15.jpg',
      description: 'Karthik reddy pesaru',
    },
    {
      name: 'convenor',
      imgUrl: 'images/image16.jpg',
      description: 'Karthik reddy pesaru',
    },
    // Add more team members as needed
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center">Club Members</h2>
      <div className="row">
        <div
          className="col-md-12 d-flex overflow-hidden"
          style={{ maxWidth: '100%', overflowX: 'scroll', WebkitOverflowScrolling: 'touch' }}
          ref={scrollRef}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="member text-center"
              style={{
                flex: '0 0 auto',
                background: 'var(--team-card-bg)',
                borderRadius: '5px',
                margin: '0 10px',
              }}
            >
              <div className="team__img" style={{ height: '200px', overflow: 'hidden' }}>
                <img
                  src={member.imgUrl}
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="team__details" style={{ padding: '20px 15px' }}>
                <h4
                  style={{
                    color: 'var(--primary-color)',
                    fontWeight: '500',
                    fontSize: '1.2rem',
                    marginBottom: '0.4rem',
                  }}
                >
                  {member.name}
                </h4>
                <p style={{ color: 'var(--primary-color)', fontSize: '1rem', marginTop: '10px' }}>
                  {member.description}
                </p>
                <div className="team__member-social">
                  {/* Add your social icons here */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-12 d-flex justify-content-between mt-3">
          <button className="btn btn-primary" onClick={scrollLeft}>
            Scroll Left
          </button>
          <button className="btn btn-primary" onClick={scrollRight}>
            Scroll Right
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClubMembers;
