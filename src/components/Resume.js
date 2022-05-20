function Resume() {
  return (
    <section className='resume'>
      <section className='main'>
        <h1 className='main--title'>Vinicius Pietscher</h1>
        <p className='main--subtitle'>Resume</p>
      </section>
      {/* <h2 className='about--title'>About me</h2> */}
      <section className='resume__section'>
        <h3 className='resume_h3'>Skills</h3>
        <p className='resume_paragraph'>
          Javascript, React, REST, SQL, Active Directory, User Identity
          Management, bash/shell scripting, Git, Linux, Windows
        </p>
        <h3 className='resume_h3'>Work Experience</h3>
        <p className='resume_paragraph'>
          <strong>
            Web Developer - Refcode Software Agency (2022 - current)
          </strong>
        </p>
        <p>
          Development of websites for clients and designing proof of concept
          websites and API's for potential clients.
        </p>
        <p className='resume_paragraph'>
          <strong>
            Information Security Consultant - Modulo Security Solutions (2011
            -2015)
          </strong>
        </p>
        <p>
          Implemented automated process for relevant data consolidation using
          bash and shell scripts.
        </p>
        <p>
          Created and implemented automated process to export custom reports
          using SQL
        </p>
        <p>
          Helped clients in the US and Brazil to manage IT risk using Modulo's
          Risk Manager tool by designing policies for information security
          incidents and compliance using the industry best standards and
          practices.
        </p>
        <h3 className='resume_h3'>Education</h3>
        <p className='resume_paragraph'>
          Universidade Federal do ABC - UFABC (Bachelor of Science in Science
          and Technology - halted)
        </p>
        <p className='resume_paragraph'>
          Faculdade de Tecnologia IBTA (Database Administration)
        </p>
        <h3 className='resume_h3'>Certifications</h3>
        <p className='resume_paragraph'>
          <a
            href='https://coursera.org/share/87c1eafe575195f4924510f4ed8d08df'
            target='_blank'
            rel='noreferrer'
          >
            Google IT Support Professional Certificate
          </a>
        </p>
        <p>
          <a
            href='https://coursera.org/share/6375c6be2573b60c36226f17e79c427c'
            target='_blank'
            rel='noreferrer'
          >
            An Introduction to Interactive Programming in Python (Part 1) - Rice
            University
          </a>
        </p>
        <p>
          <a
            href='https://coursera.org/share/4fd7b9f5faaa468c6b05aa47ae580a18'
            target='_blank'
            rel='noreferrer'
          >
            An Introduction to Interactive Programming in Python (Part 2) - Rice
            University
          </a>
        </p>
        <p>
          <a
            href='https://coursera.org/share/7be7d691ee0da3d216344565c1f0fe07'
            target='_blank'
            rel='noreferrer'
          >
            Ruby on Rails: An Introduction - Johns Hopkins University
          </a>
        </p>
        <p>
          <a
            href='https://coursera.org/share/bad25d86683a7bb466c92b6a5eb3ad59'
            target='_blank'
            rel='noreferrer'
          >
            Rails with Active Record and Action Pack - Johns Hopkins University
          </a>
        </p>
        <p>
          <a
            href='https://coursera.org/share/c62671624d9129cda96c16c6dc2ce1af'
            target='_blank'
            rel='noreferrer'
          >
            The Data Scientist's Toolbox - Johns Hopkins University
          </a>
        </p>
        <p>ITIL v3 Foundation - Exin</p>
        <p>MCRM (Modulo Certified Risk Manager) - Modulo Security Solutions</p>
        <h3 className='resume_h3'>Volunteering</h3>
        <p className='resume_paragraph'>
          <strong>Refcode (2021 - current)</strong> - Helping refugees and
          immigrants learn basic HTML, CSS and Javascript.
        </p>
      </section>
    </section>
  )
}

export default Resume
