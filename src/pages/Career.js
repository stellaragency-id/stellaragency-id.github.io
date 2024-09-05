import React, { useState } from "react";
import { FiInfo } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';
// Job listing data
const jobs = [
  {
    "title": "Talent Recruiter Associate",
    "location": "Remote / Hybrid",
    "description": "We are seeking a dedicated and organized **Talent Recruiter Associate** to join our team. In this role, you will be responsible for managing the end-to-end recruitment process, identifying top talent across various channels, and assisting in payroll-related tasks.\n\n### Key Responsibilities:\n- Source, screen, and recruit top candidates for various roles.\n- Manage the recruitment process from job posting to candidate offer.\n- Handle onboarding, payroll, and employment contracts.\n- Collaborate with hiring managers to understand talent needs and requirements.\n- Maintain candidate databases and recruitment records.\n\n### Qualifications:\n- 1-3 years of experience in recruitment, human resources, or a related field.\n- Experience handling payroll or HR-related tasks is a plus.\n- Excellent communication and interpersonal skills.\n- Ability to multitask, prioritize, and manage time effectively.\n- Self-motivated and able to work both independently and as part of a team."
  },
  {
    "title": "Livestream Host",
    "location": "Remote / Hybrid",
    "description": "We are looking for an energetic and charismatic **Livestream Host** to engage with audiences on livestream platforms. The ideal candidate will be below 30 years old, good-looking, and have a positive, cheerful attitude. Experience in livestreaming is preferred but not mandatory, as long as you have a passion for connecting with people and creating a lively, engaging atmosphere.\n\n### Key Responsibilities:\n- Host live sessions, interacting with audiences in a fun and engaging manner.\n- Keep the audience entertained and ensure they have a memorable experience.\n- Follow the livestream schedule and guidelines to maintain consistent quality.\n- Build a loyal fan base through regular engagement.\n- Collaborate with the team to improve content and audience reach.\n\n### Qualifications:\n- Below 30 years old with a friendly, approachable appearance.\n- Experience in livestreaming or hosting events is a plus.\n- Outgoing personality with excellent communication skills.\n- Ability to create a positive and energetic environment during livestreams.\n- Self-driven and able to follow the set schedule."
  },
  {
    "title": "Livestream Host (Full Time)",
    "location": "Remote / Hybrid",
    "description": "We are looking for an energetic and charismatic **Livestream Host** to engage with audiences on livestream platforms. The ideal candidate will be below 30 years old, good-looking, and have a positive, cheerful attitude. Experience in livestreaming is preferred but not mandatory, as long as you have a passion for connecting with people and creating a lively, engaging atmosphere.\n\n### Key Responsibilities:\n- Host live sessions, interacting with audiences in a fun and engaging manner.\n- Keep the audience entertained and ensure they have a memorable experience.\n- Follow the livestream schedule and guidelines to maintain consistent quality.\n- Build a loyal fan base through regular engagement.\n- Collaborate with the team to improve content and audience reach.\n\n### Qualifications:\n- Below 30 years old with a friendly, approachable appearance.\n- Experience in livestreaming or hosting events is a plus.\n- Outgoing personality with excellent communication skills.\n- Ability to create a positive and energetic environment during livestreams.\n- Self-driven and able to follow the set schedule."
  },
  {
    "title": "Livestream Host (Part Time)",
    "location": "Remote / Hybrid",
    "description": "We are looking for an energetic and charismatic **Livestream Host** to engage with audiences on livestream platforms. The ideal candidate will be below 30 years old, good-looking, and have a positive, cheerful attitude. Experience in livestreaming is preferred but not mandatory, as long as you have a passion for connecting with people and creating a lively, engaging atmosphere.\n\n### Key Responsibilities:\n- Host live sessions, interacting with audiences in a fun and engaging manner.\n- Keep the audience entertained and ensure they have a memorable experience.\n- Follow the livestream schedule and guidelines to maintain consistent quality.\n- Build a loyal fan base through regular engagement.\n- Collaborate with the team to improve content and audience reach.\n\n### Qualifications:\n- Below 30 years old with a friendly, approachable appearance.\n- Experience in livestreaming or hosting events is a plus.\n- Outgoing personality with excellent communication skills.\n- Ability to create a positive and energetic environment during livestreams.\n- Self-driven and able to follow the set schedule."
  },
  {
    "title": "Talent Manager",
    "location": "Remote / Hybrid",
    "description": "We are seeking an experienced **Talent Manager** to oversee and support our team of livestream hosts. In this role, you will be responsible for managing host performance, conducting regular KPI checks, and providing training and development to ensure high-quality engagements. You will also work closely with the team to develop strategies for talent growth and improvement.\n\n### Key Responsibilities:\n- Conduct regular performance reviews and KPI checks for livestream hosts.\n- Provide coaching and guidance to hosts to help them improve their performance.\n- Assist in developing content strategies and host engagement plans.\n- Ensure that hosts adhere to company guidelines and maintain a professional image.\n- Collaborate with the recruiting team to onboard new hosts and assess talent needs.\n\n### Qualifications:\n- 3+ years of experience in talent management, performance management, or a similar field.\n- Strong leadership skills with the ability to coach and mentor talent.\n- Excellent organizational and communication skills.\n- Proven ability to meet and exceed KPI goals.\n- Experience in the livestreaming or entertainment industry is a plus."
  },
]


function Career() {
  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (job) => {
    setSelectedJob(job);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  const handleClickOutside = (e) => {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <div className="flex flex-col items-center p-8 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-violet-900">Join our team</h1>
      <p className="text-center mb-8 text-slate-900">
        We are looking for a diverse range of skills and experiences to join our team. If you are looking to make a difference, we want to hear from you!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {jobs.map((job, index) => (
          <div key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
            <div>
              <h2 className="text-md font-semibold">{job.title}</h2>
              <p className="text-sm text-gray-500">{job.location}</p>
            </div>
            <button
              className="text-violet-900 text-l pl-2"
              onClick={() => openModal(job)}
            >
              <FiInfo />
            </button>
          </div>
        ))}
      </div>

      {selectedJob && (
        <div
          id="modal-overlay"
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 p-6"
          onClick={handleClickOutside}
        >
          <div className="relative bg-white p-8 rounded-lg mx-auto w-full max-w-lg " onClick={(e) => e.stopPropagation()}>
            {/* Close button with "X" icon */}
            <button
              className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 p-2"
              onClick={closeModal}
            >
              &times;
            </button>
            <h3 className="text-2xl text-violet-900 font-semibold">{selectedJob.title}</h3>
            <p className="text-violet-900 mb-4">{selectedJob.location}</p>
            {/* Render Markdown description */}
            
            <ReactMarkdown className="prose prose-sm text-gray-700 mb-4 overflow-y-auto max-h-[60vh]">
              {selectedJob.description}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}

export default Career;
