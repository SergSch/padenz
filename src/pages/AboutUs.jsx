import classes from './AboutUs.module.css';

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
            <svg
              viewBox="0 0 400 500"
              xmlns="http://www.w3.org/2000/svg"
              className={classes.svg}
            >
              {/* Beige background */}
              <rect width="400" height="500" fill="#f5efe6" rx="16" />
              {/* Table */}
              <rect
                x="60"
                y="320"
                width="280"
                height="12"
                rx="6"
                fill="#c8a882"
              />
              <rect
                x="100"
                y="332"
                width="12"
                height="80"
                rx="4"
                fill="#c8a882"
              />
              <rect
                x="288"
                y="332"
                width="12"
                height="80"
                rx="4"
                fill="#c8a882"
              />
              {/* Person lying */}
              {/* Body */}
              <ellipse cx="200" cy="295" rx="110" ry="28" fill="#e8d5c0" />
              {/* Head */}
              <circle cx="90" cy="285" r="28" fill="#d4a574" />
              {/* Hair */}
              <ellipse cx="90" cy="268" rx="28" ry="14" fill="#5c3d1e" />
              {/* Arm of therapist */}
              <ellipse
                cx="200"
                cy="260"
                rx="60"
                ry="14"
                fill="#b8956a"
                transform="rotate(-15 200 260)"
              />
              <ellipse
                cx="240"
                cy="248"
                rx="40"
                ry="12"
                fill="#b8956a"
                transform="rotate(-25 240 248)"
              />
              {/* Therapist hands */}
              <circle cx="265" cy="238" r="14" fill="#c8a070" />
              <circle cx="248" cy="232" r="12" fill="#c8a070" />
              {/* Therapist standing figure (simplified) */}
              <ellipse
                cx="310"
                cy="200"
                rx="35"
                ry="45"
                fill="#7a9e6e"
                opacity="0.85"
              />
              <circle cx="310" cy="148" r="30" fill="#d4a574" />
              {/* Therapist hair */}
              <ellipse cx="310" cy="133" rx="30" ry="16" fill="#3d2b1a" />
              {/* Decorative circles */}
              <circle cx="340" cy="60" r="40" fill="#a5e08d" opacity="0.3" />
              <circle cx="60" cy="80" r="25" fill="#6a875b" opacity="0.2" />
              <circle cx="360" cy="420" r="30" fill="#c8a882" opacity="0.3" />
              {/* Text accent */}
              <text
                x="200"
                y="460"
                textAnchor="middle"
                fontFamily="Georgia, serif"
                fontSize="13"
                fill="#8a7060"
                opacity="0.7"
              >
                Physiotherapie mit Einfühlungsvermögen
              </text>
            </svg>
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
