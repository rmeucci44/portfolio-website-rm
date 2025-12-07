import React from 'react';
import './WorkTimeline.css';
import heliumLogo from '../assets/logos/heliumLogo.jpg';
import johnsonBrothersLogo from '../assets/logos/johnsonBrothersLogo.png';
import depauwLogo from '../assets/logos/depauwLogo.jpg';
import doublemapLogo from '../assets/logos/doublemapLogo.jpg';
import wishLogo from '../assets/logos/wishLogo.jpg';


const workExperience = [
  {
    title: 'Account Executive — WISH-TV / Circulus Digital Media',
    date: '2023 – 2024',
    logo: wishLogo, // make sure you import wishLogo at the top
    description: [
      'Partnered with clients to align business goals with targeted marketing strategies that reached the right audiences.',
      'Leveraged analytics and performance data to drive measurable outcomes and optimization opportunities.',
    ],
  },
  {
    title: 'Usher/Server: Helium Comedy Club',
    date: 'September 2020 - December 2022',
    logo: heliumLogo,
    description: [
      'Organized and handled high volume sales while attending to customer service requests.',
      'Assisted in creating a pleasant viewing experience for customers and performers.',
    ],
  },
  {
    title: 'Sales Consultant: Johnson Brothers Incorporated',
    date: 'July 2019 - June 2020',
    logo: johnsonBrothersLogo,
    description: [
      'Obtained Sales Rep of the Month three different months.',
      'Managed 84 different accounts varying from chain grocery stores to local establishments.',
      'Created opportunities for grocery stores and independent accounts to allow for new points of revenue by using new products.',
    ],
  },
  {
    title: 'Career Services Data Intern: DePauw University',
    date: 'June 2018 - August 2018',
    logo: depauwLogo,
    description: [
      'Analyzed data from every internship DePauw provides to construct statistics which future students can utilize.',
      'Helped initiate a project which allows students to borrow business clothes for upcoming interviews.',
    ],
  },
  {
    title: 'Operations Development Fellow: DoubleMap Inc.',
    date: 'August 2017 - January 2018',
    logo: doublemapLogo,
    description: [
      'Produced eight troubleshooting documents for clients to follow when utilizing DoubleMap software.',
      'Utilized Jira and Trello to assist clients through software bugs and update issues.',
      'Worked alongside the CEO to redesign the company brochure marketed towards future clients.',
    ],
  },
];


const WorkTimeline = () => {
  return (
    <div className="timeline-container">
      {workExperience.map((item, index) => (
        <div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
        >
          <div className="job-date">{item.date}</div>

          <div className="logo-wrapper">
            <img src={item.logo} alt={`${item.title} logo`} className="company-logo" />
          </div>

          <div className="job-info">
            <h3>{item.title}</h3>
            <ul>
              {item.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkTimeline;
