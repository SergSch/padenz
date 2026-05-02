import classes from './AboutUs.module.css';
import massageImg from '../images/massage.jpg';

const AboutUs = () => {
  return (
    <div className={classes.page}>
      {/* HERO */}
      <section className={classes.hero}>
        <div className={classes.heroText}>
          <h1 className={classes.heroTitle}>Physio an der Enz</h1>
          <p className={classes.heroSub}>Ruhig. Präzise. Individuell.</p>
          <div className={classes.heroContact}>
            <span className={classes.heroContactLabel}>
              Termin vereinbaren —
            </span>
            <a href="tel:+4972339426463" className={classes.contactLink}>
              07233 942 6463
            </a>
            <span>·</span>
            <a href="mailto:info@padenz.de" className={classes.contactLink}>
              info@padenz.de
            </a>
          </div>
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section className={classes.philosophie}>
        <div className={classes.philInner}>
          <div className={classes.philImage}>
            <img
              src={massageImg}
              alt="Physiotherapie"
              className={classes.philImg}
            />
          </div>
          <div className={classes.philText}>
            <h2 className={classes.philTitle}>
              Behandlung beginnt mit Verständnis.
            </h2>
            <p className={classes.philPara}>
              Nicht jedes Symptom entsteht dort, wo es spürbar ist.
            </p>
            <p className={classes.philPara}>
              Deshalb arbeite ich gezielt, ruhig und mit Blick für
              Zusammenhänge.
            </p>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section className={classes.leistungen}>
        <div className={classes.leistInner}>
          <h2 className={classes.leistTitle}>Leistungen</h2>
          <ul className={classes.leistList}>
            <li className={classes.leistItem}>
              <span className={classes.leistName}>
                Physiotherapie & Krankengymnastik
              </span>
              <span className={classes.leistDesc}>
                für Beweglichkeit, Stabilität und Koordination
              </span>
            </li>
            <li className={classes.leistItem}>
              <span className={classes.leistName}>Manuelle Therapie</span>
              <span className={classes.leistDesc}>
                zur gezielten Behandlung funktioneller Einschränkungen
              </span>
            </li>
            <li className={classes.leistItem}>
              <span className={classes.leistName}>Lymphdrainage</span>
              <span className={classes.leistDesc}>
                zur Unterstützung von Heilungs- und Entstauungsprozessen
              </span>
            </li>
            <li className={classes.leistItem}>
              <span className={classes.leistName}>Klassische Massage</span>
              <span className={classes.leistDesc}>
                zur Entlastung und Regulation muskulärer Spannungen
              </span>
            </li>
            <li className={classes.leistItem}>
              <span className={classes.leistName}>CMD & Kieferbehandlung</span>
              <span className={classes.leistDesc}>
                bei funktionellen Beschwerden im Kiefer- und Spannungsbereich
              </span>
            </li>
            <li className={classes.leistItem}>
              <span className={classes.leistName}>P-DTR</span>
              <span className={classes.leistDesc}>
                zur gezielten Beeinflussung neurologischer Fehlsteuerungen
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* PHILOSOPHIE 2 */}
      <section className={classes.phil2}>
        <p className={classes.phil2Text}>Jede Behandlung entsteht im Moment.</p>
        <p className={classes.phil2Sub}>
          Sie folgt keinem festen Ablauf, sondern wird auf das abgestimmt,
          <br />
          was Ihr Körper wirklich braucht.
        </p>

        <div className={classes.phil2Divider} />

        <p className={classes.phil2Sub}>
          Bei Bedarf wird die Behandlung durch ausgewählte Methoden ergänzt –
          <br />
          ruhig, präzise und nur dort, wo es sinnvoll ist.
        </p>

        <div className={classes.phil2Divider} />

        <p className={classes.phil2Claim}>Ich nehme mir Zeit.</p>
      </section>
    </div>
  );
};

export default AboutUs;
