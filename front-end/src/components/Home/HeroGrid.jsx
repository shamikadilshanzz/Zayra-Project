import main from "./HeroGrid.module.css";
function HeroGrid() {
    return (
      <section className={main.hero}>
        <div className={main.firstClass}>
          <img
            src="/assets/Images/banner1.jpg"
            className={main.mainIm}
            alt="hero"
          />
        </div>
        <div className={main.secondClass}>
            <div className={main.Feature1}>Featured Products</div>
            <div className={main.FeatureSec}>
                <div className={main.FeatureCard}>
                    <img src="/assets/Images/Feature-1.jpg" alt="Featured 1" />
                    <div className={main.FeatureText}> Liquid Cooling Setup</div>
                </div>
                <div className={main.FeatureCard}>
                    <img src="/assets/Images/Feature-2.jpg" alt="Featured 2" />
                    <div className={main.FeatureText}>Gaming PC Setup</div>
                </div>
                <div className={main.FeatureCard}>
                    <img src="/assets/Images/Feature-3.jpg" alt="Featured 3" />
                    <div className={main.FeatureText}>Rocs Pro Steup</div>
                </div>
                <div className={main.FeatureCard}>
                    <img src="/assets/Images/Feature-4.jpg" alt="Featured 3" />
                    <div className={main.FeatureText}>High Performance Pc</div>
                </div>

            </div>
        </div>
      </section>
    );
  }
  
  export default HeroGrid;
  