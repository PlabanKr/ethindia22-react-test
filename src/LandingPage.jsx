import { WorldIDWidget } from "@worldcoin/id";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-bg">
      <main className="landing-main">
        <section>
          <h1>Oil and Gas Dashboard</h1>
          <h3>A dashboard for field engineers</h3>
        </section>
        <section className="world-coin-container">
          <WorldIDWidget
            actionId="wid_staging_4f30f07cabc4d7a66dc6517289c658cf"
            signal="test_signal_01"
            enableTelemetry
            onSuccess={(verificationResponse) => console.log(verificationResponse)}
            onError={(error) => console.log(error)}
            debug={true}
          />
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
