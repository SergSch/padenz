import { useState } from 'react';
import leistungenImg from '../images/leistungen_haupt.jpg';
import imgKranken from '../images/krankengymnastik.jpg';
import imgMT from '../images/mt.jpg';
import imgLymph from '../images/lymphdrainage.jpg';
import imgMassage from '../images/massagen.jpg';
import imgCMD from '../images/CMD.jpg';
import imgPDTR from '../images/P-DTR.jpg';
import classes from './Praxis.module.css';

const leistungen = [
  {
    id: 1,
    title: 'Physiotherapie & Krankengymnastik',
    short: 'für Beweglichkeit, Stabilität und Koordination',
    desc: 'Durch gezielte Bewegungstherapie fördern wir Ihre Mobilität, lösen Spannungen und stärken Ihren Körper nachhaltig. Unter Berücksichtigung von Feldenkrais und Spiraldynamik® unterstützen wir Sie dabei, Bewegungen bewusster zu erleben und Ihre natürliche Balance zu finden. Jede Behandlung ist individuell auf Ihre Ziele und Möglichkeiten abgestimmt – für mehr Lebensqualität im Alltag, Beruf und Sport.',
    img: imgKranken,
  },
  {
    id: 2,
    title: 'Manuelle Therapie',
    short: 'zur gezielten Behandlung funktioneller Einschränkungen',
    desc: 'Die Manuelle Therapie ist ein spezielles Behandlungskonzept der Physiotherapie, das Funktionsstörungen des Bewegungsapparates gezielt untersucht und behandelt. Im Mittelpunkt steht die Wiederherstellung und Verbesserung der Beweglichkeit von Gelenken, Muskeln und Nerven. Durch spezielle Handgriffe, Mobilisationstechniken und gezielte Übungen werden Schmerzen gelindert, Blockaden gelöst und die Bewegungsfunktion nachhaltig verbessert.',
    img: imgMT,
  },
  {
    id: 3,
    title: 'Lymphdrainage',
    short: 'zur Unterstützung von Heilungs- und Entstauungsprozessen',
    desc: 'Die Manuelle Lymphdrainage unterstützt den Abfluss der Lymphflüssigkeit, fördert die Entstauung von Gewebe und stärkt das Immunsystem. Mit sanften, rhythmischen Grifftechniken helfen wir Ihrem Körper, ins Gleichgewicht zu kommen und sich zu regenerieren. Ideal bei Schwellungen, Lymphödemen und nach Operationen – für mehr Leichtigkeit und ein besseres Körpergefühl.',
    img: imgLymph,
  },
  {
    id: 4,
    title: 'Klassische Massage',
    short: 'zur Entlastung und Regulation muskulärer Spannungen',
    desc: 'Massagen sind ein bewährter Bestandteil der Therapie zur Lösung von Verspannungen, Förderung der Durchblutung und Unterstützung der Regeneration. In unserer Praxis verbinden wir klassische Techniken mit individuell abgestimmten Anwendungen – für eine Behandlung, die sowohl therapeutisch wirkt als auch spürbare Entlastung bringt.',
    img: imgMassage,
  },
  {
    id: 5,
    title: 'CMD & Kieferbehandlung',
    short: 'bei funktionellen Beschwerden im Kiefer- und Spannungsbereich',
    desc: 'Die CMD-Behandlung (Craniomandibuläre Dysfunktion) richtet sich auf Funktionsstörungen im Kiefergelenk und deren Auswirkungen auf den gesamten Körper. Ein ganzheitlicher Ansatz für mehr Beweglichkeit und Wohlbefinden. Typische Beschwerden: Kieferknacken, Zähneknirschen, Kopf- und Nackenschmerzen, Verspannungen im Schulter-Nacken-Bereich.',
    img: imgCMD,
  },
  {
    id: 6,
    title: 'P-DTR',
    short: 'zur gezielten Beeinflussung neurologischer Fehlsteuerungen',
    desc: 'P-DTR (Propriozeptive Deep Tendon Reflex Methode) setzt gezielt am Nervensystem an, um gestörte Reizverarbeitungen zu erkennen und neu zu regulieren. Die Behandlung kann helfen, Schmerzen zu reduzieren, Bewegungsabläufe zu verbessern und den Körper wieder in ein funktionelles Gleichgewicht zu bringen. Gezielt. Präzise. Wirksam.',
    img: imgPDTR,
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
          Wir behandeln nicht nur Symptome – wir suchen die Ursache.
          <br />
          Für eine Therapie, die wirklich wirkt.
        </p>
      </section>

      {/* IMAGE */}
      <div className={classes.imgWrap}>
        <img
          src={leistungenImg}
          alt="Physiotherapie"
          className={classes.mainImg}
        />
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
          <div className={classes.modalWrapper}>
            <button
              className={classes.modalClose}
              onClick={() => setActive(null)}
            >
              ✕
            </button>
            <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
              <div className={classes.modalImgWrap}>
                <img
                  src={active.img}
                  alt={active.title}
                  className={classes.modalImg}
                />
              </div>
              <div className={classes.modalContent}>
                <h2 className={classes.modalTitle}>{active.title}</h2>
                <p className={classes.modalShort}>{active.short}</p>
                <p className={classes.modalDesc}>{active.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Praxis;
