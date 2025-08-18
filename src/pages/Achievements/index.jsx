import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom'

const Achievements = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const teamMembers = [
    {
      name: 'Alina',
      role: '"This platform completely transformed the way I learn.I’ve gained real skills that helped me land my first internship!"',
      imgClass: 'alex',
    },
    {
      name: 'Gabriel',
      role: '"I’ve tried several online learning platforms, but none of them matched the depth and clarity of this one. The hands-on projects and real-world applications made everything click."',
      imgClass: 'gabriel',
    },
    {
      name: 'Marcus',
      role: '"This platform gave me the confidence to pursue my business ideas. I took courses on digital marketing and business development, and they were incredibly practical."',
      imgClass: 'marcus',
    },
  ];

  return (
    <>
      <div className='achieve-container'>
        <div className='achieve-section' data-aos='fade-up'>
          <div className='achieve-title'>
            <h1>Consulting Success</h1>
            <p>Through our platform, you can receive consulting in various fields from anywhere in the world and unlock your full potential. With flexible online access and personalized solutions tailored to your unique needs, we empower you to grow, adapt, and succeed—no matter where you are.</p>
          </div>
          <div className='achieve-cards'>
            <div className='cards-title'>
              <div>
                <AccountCircleIcon sx={{ fontSize: "30px", color: "white" }} />
                <p>Student</p>
              </div>
              <h1>575k+</h1>
            </div>
            <div className='cards-title'>
              <div>
                <EmojiEventsIcon sx={{ fontSize: "30px", color: "white" }} />
                <p>Global Certificate</p>
              </div>
              <h1>450k+</h1>
            </div>
            <div className='cards-title'>
              <div>
                <GroupsIcon sx={{ fontSize: "40px", color: "white" }} />
                <p>Instructor</p>
              </div>
              <h1>750</h1>
            </div>
            <div className='cards-title'>
              <div>
                <QueryBuilderIcon sx={{ fontSize: "30px", color: "white" }} />
                <p>Hours of Content</p>
              </div>
              <h1>700k+</h1>
            </div>
          </div>
        </div>


        <section className="team-section">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card" data-aos='fade-right'>
              <div className={`team-image ${member.imgClass}`} />
              <div className="team-info">
                <h3>{member.name}
                  <Link target='_blank' to={'https://github.com/'}>
                    <button className="github-tag">github</button>
                  </Link>
                </h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

export default Achievements
