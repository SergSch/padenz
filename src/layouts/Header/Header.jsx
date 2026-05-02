import { MdPhone } from 'react-icons/md';
import { SiWhatsapp } from 'react-icons/si';
import { MdAlternateEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <div className={classes.header_body}>
      <div className="container">
        <div className={classes.header_high}>
          <Link to="/">
            <img src={logo} alt="Logo" className={classes.logo} />
          </Link>
          <a
            className={classes.text}
            href="tel:+4972339426463"
            target="_blank"
            rel="noreferrer"
          >
            <MdPhone className={classes.icon} />
            07233 942 6463
          </a>
          <a
            href="https://wa.me/+491729480898"
            className={`${classes.text} ${classes.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiWhatsapp className={classes.icon} />
          </a>
          <a
            href="mailto:info@padenz.de"
            className={`${classes.text} ${classes.email}`}
          >
            <MdAlternateEmail className={classes.icon} />
            info@padenz.de
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
