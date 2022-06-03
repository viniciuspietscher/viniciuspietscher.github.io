function About() {
  return (
    <section className='about'>
      <section className='main'>
        <h1 className='main--title'>Vinicius Pietscher</h1>
        <p className='main--subtitle'>Software Engineer</p>
      </section>
      <section className='paragraph'>
        <p>Hi! I'm Vini, a Software Engineer from São Paulo, Brasil.</p>
        <p>
          I develop Fullstack Web Applications. I previously worked as a
          Information Security Consultant for over 4 years.
        </p>
        <p>I've been living in Atlanta, GA since 2019.</p>
        <p>
          In my free time, I like going for hikes with my wife in various parks
          around Atlanta, walking my dog Blue, watching Formula 1, and visiting
          local breweries and drinking craft{" "}
          <a
            href='https://untappd.com/user/vpietscher'
            target='_blank'
            rel='noreferrer'
          >
            beer
          </a>
          .
        </p>
      </section>
    </section>
  )
}

export default About
