import Github from "../icons/github-brands.svg"
import Twitter from "../icons/twitter-brands.svg"
import Mail from "../icons/envelope-solid.svg"
import Linkedin from "../icons/linkedin-brands.svg"

function Footer() {
  return (
    <div className='footer'>
      <p>
        Designed by <em>Vinicius Pietscher</em>
      </p>
      <ul>
        <li>
          <a
            href='https://github.com/viniciuspietscher'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Github} alt='' />
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/vinipietscher'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Twitter} alt='' />
          </a>
        </li>
        <li>
          <a
            href='mailto:vinicius.pietscher@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Mail} alt='' />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/vinicius-pietscher/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Linkedin} alt='' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
