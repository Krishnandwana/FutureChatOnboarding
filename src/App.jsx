import { useState } from "react";

function EmbedFrame({ title, src, className = "", allow, loading = "lazy" }) {
  const [ready, setReady] = useState(false);

  return (
    <div className={`embed-shell ${ready ? "embed-ready" : "loading"} ${className}`.trim()}>
      <div className="loader" aria-hidden="true"></div>
      <iframe
        title={title}
        src={src}
        allow={allow}
        loading={loading}
        allowFullScreen
        onLoad={() => setReady(true)}
      />
    </div>
  );
}

function App() {
  const moveTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="app-shell">
      <section id="landing" className="screen screen-hero">
        <div className="brand-pill">Future-Chat</div>
        <h1>Turn your store into a personal shopping experience</h1>
        <p>See it live in 60 seconds</p>
        <button className="cta cta-primary" onClick={() => moveTo("demo")}>
          Start Demo
        </button>
      </section>

      <section id="demo" className="screen">
        <header className="section-head">
          <span className="step-chip">Step 1</span>
          <h2>Watch It in Action</h2>
        </header>
        <article className="card video-card">
          <EmbedFrame
            title="Future-Chat product demo"
            src="https://www.youtube.com/embed/aircAruvnKk?rel=0&modestbranding=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </article>
        <ul className="highlights">
          <li>Conversational product discovery</li>
          <li>AI recommendations</li>
          <li>Virtual Try-On</li>
          <li>Smart discounts</li>
        </ul>
        <button className="cta cta-primary" onClick={() => moveTo("try-live")}>
          Try It Yourself
        </button>
      </section>

      <section id="try-live" className="screen">
        <header className="section-head">
          <span className="step-chip">Step 2</span>
          <h2>Experience the AI Shopper Live</h2>
        </header>
        <p className="helper">Try asking for a product and upload a photo</p>
        <article className="card chat-card">
          <EmbedFrame
            title="Future-Chat live assistant"
            src="https://www.chatbase.co/chatbot-iframe/O4qVhQe2IYhPivU38DSks"
          />
        </article>
        <div className="sticky-cta-wrap">
          <button className="cta cta-primary" onClick={() => moveTo("setup")}>
            Continue Setup
          </button>
        </div>
      </section>

      <section id="setup" className="screen">
        <header className="section-head">
          <span className="step-chip">Step 3</span>
          <h2>Set Up in Minutes</h2>
        </header>
        <div className="progress">
          <span>Step 1 of 2</span>
          <div className="progress-track">
            <div className="progress-bar p50"></div>
          </div>
        </div>
        <article className="card video-card">
          <EmbedFrame
            title="How to install on Shopify"
            src="https://www.youtube.com/embed/5MgBikgcWnY?rel=0&modestbranding=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </article>
        <button className="cta cta-primary" onClick={() => moveTo("customize")}>
          Next: Customize
        </button>
      </section>

      <section id="customize" className="screen">
        <header className="section-head">
          <span className="step-chip">Step 4</span>
          <h2>Customize Your AI Assistant</h2>
        </header>
        <div className="progress">
          <span>Step 2 of 2</span>
          <div className="progress-track">
            <div className="progress-bar p100"></div>
          </div>
        </div>
        <article className="card video-card">
          <EmbedFrame
            title="Customization walkthrough"
            src="https://www.youtube.com/embed/bMknfKXIFA8?rel=0&modestbranding=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </article>
        <button className="cta cta-primary" onClick={() => moveTo("finish")}>
          Finish Setup
        </button>
      </section>

      <section id="finish" className="screen screen-final">
        <div className="success-mark" aria-hidden="true"></div>
        <h2>Your AI Personal Shopper is Ready</h2>
        <div className="final-actions">
          <button className="cta cta-secondary">Preview on Store</button>
          <button className="cta cta-primary">Go Live</button>
        </div>
      </section>
    </main>
  );
}

export default App;
