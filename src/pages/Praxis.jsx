import { useState } from 'react';
import leistungenImg from '../images/leistungen_haupt.jpg';
import classes from './Praxis.module.css';

const leistungen = [
  {
    id: 1,
    title: 'Physiotherapie & Krankengymnastik',
    short: 'für Beweglichkeit, Stabilität und Koordination',
    desc: 'Gezielte therapeutische Übungen zur Wiederherstellung und Verbesserung von Beweglichkeit, Stabilität und Koordination. Die Behandlung wird individuell auf Ihre Bedürfnisse und Ihre aktuelle Situation abgestimmt.',
    img: null,
  },
  {
    id: 2,
    title: 'Manuelle Therapie',
    short: 'zur gezielten Behandlung funktioneller Einschränkungen',
    desc: 'Spezialisierte Handgrifftechniken zur Untersuchung und Behandlung von Funktionsstörungen des Bewegungsapparates. Gelenke, Muskeln und Nerven werden gezielt mobilisiert und in ihrer Funktion verbessert.',
    img: null,
  },
  {
    id: 3,
    title: 'Lymphdrainage',
    short: 'zur Unterstützung von Heilungs- und Entstauungsprozessen',
    desc: 'Sanfte, rhythmische Massagetechnik zur Aktivierung des Lymphsystems. Fördert den Abtransport von Gewebsflüssigkeit, unterstützt Heilungsprozesse und wirkt entstauend bei Schwellungen.',
    img: null,
  },
  {
    id: 4,
    title: 'Klassische Massage',
    short: 'zur Entlastung und Regulation muskulärer Spannungen',
    desc: 'Klassische Massagetechniken zur gezielten Lockerung verspannter Muskulatur, Verbesserung der Durchblutung und Förderung der Entspannung. Wohltuend und therapeutisch zugleich.',
    img: null,
  },
  {
    id: 5,
    title: 'CMD & Kieferbehandlung',
    short: 'bei funktionellen Beschwerden im Kiefer- und Spannungsbereich',
    desc: 'Behandlung von craniomandibulären Dysfunktionen – Beschwerden im Bereich des Kiefergelenks und der umliegenden Muskulatur. Häufig verbunden mit Kopfschmerzen, Nackenverspannungen oder Tinnitus.',
    img: null,
  },
  {
    id: 6,
    title: 'P-DTR',
    short: 'zur gezielten Beeinflussung neurologischer Fehlsteuerungen',
    desc: 'Proprioceptive Deep Tendon Reflex – eine präzise neurologische Methode zur Identifikation und Korrektur von Fehlinformationen im Nervensystem. Wirkungsvoll bei chronischen Schmerzen und Bewegungseinschränkungen.',
    img: null,
  },
];

const Praxis = () => {
  const [active, setActive] = useState(null);

  return (
    <div className={classes.page}>

      {/* HERO */}
      <section className={classes.hero}>
        <h1 className={classes.heroTitle}>Therapie, die weiter geht.</h1>
        <p className={classes.heroSub}>Individuell. Präzise. Nachhaltig.</p>
        <p className={classes.heroText}>
          Wir behandeln nicht nur Symptome – wir suchen die Ursache.<br />
          Für eine Therapie, die wirklich wirkt.
        </p>
      </section>

      {/* IMAGE */}
      <div className={classes.imgWrap}>
        <img src={leistungenImg} alt="Physiotherapie" className={classes.mainImg} />
      </div>

      {/* LEISTUNGEN */}
      <section className={classes.leistungen}>
        <div className={classes.leistInner}>
          {leistungen.map((item) => (
            <div
              key={item.id}
              className={classes.card}
              onClick={() => setActive(item)}
            >
              <div className={classes.cardNum}>0{item.id}</div>
              <div className={classes.cardBody}>
                <h3 className={classes.cardTitle}>{item.title}</h3>
                <p className={classes.cardShort}>{item.short}</p>
              </div>
              <span className={classes.cardArrow}>→</span>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {active && (
        <div className={classes.modalOverlay} onClick={() => setActive(null)}>
          <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
            <button className={classes.modalClose} onClick={() => setActive(null)}>✕</button>
            <div className={classes.modalImgWrap}>
              {active.img
                ? <img src={active.img} alt={active.title} className={classes.modalImg} />
                : <div className={classes.modalImgPlaceholder}>
                    <span>Foto kommt bald</span>
                  </div>
              }
            </div>
            <div className={classes.modalContent}>
              <h2 className={classes.modalTitle}>{active.title}</h2>
              <p className={classes.modalShort}>{active.short}</p>
              <p className={classes.modalDesc}>{active.desc}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Praxis;
