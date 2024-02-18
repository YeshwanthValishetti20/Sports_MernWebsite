import React, { useState } from 'react';
import { RiMailLine, RiInstagramLine } from 'react-icons/ri';

const ClubMembers = () => {
  const [showIcons, setShowIcons] = useState(null);

  const teamMembers = [
    {
      name: 'President',
      imgUrl: 'images/presedent.jpg',
      description: 'Vishnu Revanth Reddy',
    },
    {
      name: 'General Secretary',
      imgUrl: 'images/secretary.jpg',
      description: 'Mansi',
    },
    {
      name: 'Pre Head',
      imgUrl: 'images/prehead.jpg',
      description: 'Dhruv pechetty ',
    },
    {
      name: 'convenor',
      imgUrl: 'images/convenor.jpg',
      description: 'Karthik reddy pesaru',
    },
  ];

  return (
    <div className="club-members-section mt-4">
      <h2 style={{ textAlign: 'center' }}>Club Members</h2>
      <br/>
      <div className="d-flex justify-content-around align-items-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="member text-center"
            style={{
              width: '25%',
              background: 'var(--team-card-bg)',
              borderRadius: '5px',
              position: 'relative',
              overflow: 'hidden',
              margin: '0 10px', // Added margin to create space between images
            }}
            onMouseEnter={() => setShowIcons(index)}
            onMouseLeave={() => setShowIcons(null)}
          >
            <div
              className="team__img"
              style={{
                width: '100%',
                height: '200px',
                borderRadius: '15px',
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.3s, backdropFilter 0.3s',
                backdropFilter: showIcons === index ? 'blur(5px)' : 'none', // Apply blur effect only on mouse enter
              }}
            >
              <img
                src={member.imgUrl}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '15px',
                  transform: showIcons === index ? 'translateY(20px)' : 'translateY(0)',
                }}
              />
              {showIcons === index && (
                <div
                  className="member-buttons"
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                  }}
                >
                  <a
                    href={`mailto:${member.name.toLowerCase().replace(' ', '')}@example.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Email"
                  >
                    <RiMailLine style={{ fontSize: '1.5rem', color: '#007bff' }} />
                  </a>
                  <a
  href="https://www.instagram.com/chaitanyakreeda/"
  target="_blank"
  rel="noopener noreferrer"
  title="Instagram"
>
  <RiInstagramLine style={{ fontSize: '1.5rem', color: '#e4405f' }} />
</a>

                </div>
              )}
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
              <div className='team__member-social'>
                <span><i className='ri-linkedin-line'></i></span>
                <span><i className='ri-twitter-line'></i></span>
                <span><i className='ri-facebook-line'></i></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubMembers;
