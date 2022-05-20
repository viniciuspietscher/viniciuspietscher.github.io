import photo from "../images/IMG_2411.jpg"

function About() {
  return (
    <section className='about'>
      <section className='main'>
        <h1 className='main--title'>Vinicius Pietscher</h1>
        <p className='main--subtitle'>Software Engineer</p>
        <img className='about__photo' src={photo} alt='Vini' />
      </section>
      {/* <h2 className='about--title'>About me</h2> */}
      <section className='paragraph'>
        <p>Hi, I'm Vini, a Software Engineer from São Paulo, Brasil.</p>
        <p>
          I develop Fullstack Web Applications, before that I worked as a
          Information Security Consultant for over 4 years
        </p>
        <p>I've been living in Atlanta, GA since 2019.</p>
        <p>
          On my free time I like going for hikes on the several parks around
          Atlanta, walk my dog "Blue", watch Formula 1, visit local breweries
          and drink craft{" "}
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
