import React from "react";
import htm from "htm";

const html = htm.bind(React.createElement);

function EmbedFrame({ title, src, className = "", allow, loading = "lazy" }) {
  const [ready, setReady] = React.useState(false);

  return html`
    <div className=${`embed-shell ${ready ? "embed-ready" : "loading"} ${className}`.trim()}>
      <div className="loader" aria-hidden="true"></div>
      <iframe
        title=${title}
        src=${src}
        allow=${allow}
        loading=${loading}
        allowFullScreen=${true}
        onLoad=${() => setReady(true)}
      ></iframe>
    </div>
  `;
}

export function App() {
  const steps = [
    { id: "landing", label: "Start" },
    { id: "demo", label: "Demo" },
    { id: "try-live", label: "Try" },
    { id: "setup", label: "Setup" },
    { id: "finish", label: "Finish" },
  ];

  const [active, setActive] = React.useState("landing");

  const moveTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const topEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (topEntry) {
          setActive(topEntry.target.id);
        }
      },
      { threshold: [0.35, 0.6, 0.9] },
    );

    steps.forEach((step) => {
      const element = document.getElementById(step.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return html`
    <header className="topbar">
      <div className="topbar-inner">
        <button className="brand" onClick=${() => moveTo("landing")}>Future-Chat</button>
        <nav className="topnav">
          ${steps.map(
            (step) => html`
              <button
                className=${`topnav-item ${active === step.id ? "is-active" : ""}`.trim()}
                onClick=${() => moveTo(step.id)}
              >
                ${step.label}
              </button>
            `,
          )}
        </nav>
      </div>
    </header>

    <main className="app-shell desktop-first">
      <section id="landing" className="screen section-frame">
        <div className="hero-grid">
          <div>
            <span className="badge">Next-Gen AI Shopping</span>
            <h1 className="headline-xl">Turn your store into a <span className="text-primary">personal</span> shopping experience</h1>
            <p className="subhead">See it live in 60 seconds</p>
            <button className="cta cta-primary" onClick=${() => moveTo("demo")}>Start Demo</button>
          </div>
          <div className="glass-stage card">
            <div className="chat-bubble ai">I am looking for a sustainable winter coat for city and hiking.</div>
            <div className="chat-bubble user">Based on your style, Nordic Apex Parka would be a great fit.</div>
            <div className="mini-product">
              <div className="mini-thumb"></div>
              <div>
                <strong>Nordic Apex Parka</strong>
                <p>$249.00 - Eco-Tech Fabric</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="screen section-frame">
        <header className="section-head">
          <span className="step-chip">Step 1</span>
          <h2>Watch It in Action</h2>
        </header>
        <div className="demo-grid">
          <article className="card video-card">
            <${EmbedFrame}
              title="Future-Chat product demo"
              src="https://www.youtube.com/embed/aircAruvnKk?rel=0&modestbranding=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </article>
          <aside className="value-column">
            <ul className="highlights">
              <li>Conversational product discovery</li>
              <li>AI recommendations</li>
              <li>Virtual Try-On</li>
              <li>Smart discounts</li>
            </ul>
            <button className="cta cta-primary" onClick=${() => moveTo("try-live")}>Try It Yourself</button>
          </aside>
        </div>
      </section>

      <section id="try-live" className="screen section-frame">
        <header className="section-head">
          <span className="step-chip">Step 2</span>
          <h2>Experience the AI Shopper Live</h2>
        </header>
        <div className="try-grid">
          <div>
            <p className="helper">Try asking for a product and upload a photo</p>
            <div className="feature-stack">
              <div className="feature-item">
                <strong>Visual Understanding</strong>
                <p>The AI recognizes textures and patterns from uploaded photos.</p>
              </div>
              <div className="feature-item">
                <strong>Seamless Checkout</strong>
                <p>Products discovered in chat can move directly into purchase flow.</p>
              </div>
            </div>
          </div>
          <article className="card chat-card">
            <${EmbedFrame}
              title="Future-Chat live assistant"
              src="https://www.chatbase.co/chatbot-iframe/O4qVhQe2IYhPivU38DSks"
            />
          </article>
        </div>
        <div className="sticky-cta-wrap desktop-bar">
          <button className="cta cta-primary" onClick=${() => moveTo("setup")}>Continue Setup</button>
        </div>
      </section>

      <section id="setup" className="screen section-frame">
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
        <div className="demo-grid">
          <article className="card video-card">
            <${EmbedFrame}
              title="How to install on Shopify"
              src="https://www.youtube.com/embed/5MgBikgcWnY?rel=0&modestbranding=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </article>
          <aside className="card setup-side">
            <h3>Installation Steps</h3>
            <ol>
              <li>Click Install App in Shopify admin</li>
              <li>Grant permissions and sync catalog</li>
            </ol>
            <button className="cta cta-primary" onClick=${() => moveTo("customize")}>Next: Customize</button>
          </aside>
        </div>
      </section>

      <section id="customize" className="screen section-frame">
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
        <div className="demo-grid">
          <article className="card video-card">
            <${EmbedFrame}
              title="Customization walkthrough"
              src="https://www.youtube.com/embed/bMknfKXIFA8?rel=0&modestbranding=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </article>
          <aside className="card setup-side">
            <h3>What You Configure</h3>
            <ol>
              <li>Persona setup</li>
              <li>Discount configuration</li>
              <li>Policy and escalation rules</li>
            </ol>
            <button className="cta cta-primary" onClick=${() => moveTo("finish")}>Finish Setup</button>
          </aside>
        </div>
      </section>

      <section id="finish" className="screen screen-final section-frame">
        <div className="success-mark" aria-hidden="true"></div>
        <h2>Your AI Personal Shopper is Ready</h2>
        <p className="subhead">The future of conversational commerce is now live on your storefront.</p>
        <div className="final-actions">
          <button className="cta cta-secondary">Preview on Store</button>
          <button className="cta cta-primary">Go Live</button>
        </div>
      </section>
    </main>
  `;
}
