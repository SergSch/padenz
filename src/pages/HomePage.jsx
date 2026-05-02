import img from '../images/converted_image.jpg';
import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      <div className={classes.titleSection}>
        <h1 className={classes.mainTitle}>Physio an der Enz</h1>
        <p className={classes.subtitle}>
          Ihre Physiotherapiepraxis in Niefern-Öschelbronn
        </p>
      </div>
      <div className={classes.hero}>
        <img src={img} alt="Physiopraxis" className={classes.heroImg} />
      </div>
    </div>
  );
};

export default HomePage;
