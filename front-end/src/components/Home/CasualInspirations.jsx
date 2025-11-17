import Cas from "./CasualInspirations.module.css";

function CasualInspirations() {
  return (
    <section className={Cas.casualSection}>
      <div className={Cas.leftContent}>
        <h1 className={Cas.chead}>Elevate Your Fitness</h1>
        <p className={Cas.cheadPa}>
          Push your limits with workouts, gear, and motivation designed to help you become stronger, faster, and healthier every day
        </p>
        <br />
        <button className={Cas.cheadbtn}>
          BROWSE INSPIRATIONS
        </button>
      </div>

      <div className={Cas.imageCard}>
        <img src="\assets\imagesmain\4.jpg" alt="Casual Inspiration" className={Cas.image4} />
      </div>

      <div className={Cas.imageCard}>
        <img src="\assets\imagesmain\5.jpg" alt="Casual Inspiration" className={Cas.image5} />
      </div>
    </section>
  );
}

export default CasualInspirations;
