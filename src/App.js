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
  const featureMain = {
    title: "Future Chat: Smart Recommendations and Virtual Try-On",
    src: "https://www.youtube.com/embed/arve7wjUGnA?rel=0&modestbranding=1",
    description: "A high-level product demo that showcases the core shopper experience.",
  };

  const featureVideos = [
    {
      title: "Future Chat: Intelligent Discount Suggestions",
      src: "https://www.youtube.com/embed/Mf4yHmPktT8?rel=0&modestbranding=1",
      description: "See how the assistant recommends targeted offers to improve conversion.",
    },
    {
      title: "Future Chat: Image-Based Recommendations",
      src: "https://www.youtube.com/embed/sf8xyghfvls?rel=0&modestbranding=1",
      description: "Demonstrates visual search and product matching from customer-uploaded images.",
    },
  ];

  const setupVideos = [
    {
      title: "Future Chat: Configuration Walkthrough",
      src: "https://www.youtube.com/embed/MC-YGS3NOww?rel=0&modestbranding=1",
      description: "Step-by-step setup for brand tone, behavior, and business rules.",
    },
    {
      title: "Future Chat: Dashboard and Insights",
      src: "https://www.youtube.com/embed/qdRzM-orJPk?rel=0&modestbranding=1",
      description: "Overview of analytics, controls, and optimization opportunities.",
    },
  ];

  const appLink = "https://apps.shopify.com/future-chat";

  return html`
    <main className="reimagine-shell">
      <section className="hero-band">
        <p className="kicker">Future Chat Onboarding</p>
        <h1>See the product in action, validate it live, and launch with confidence.</h1>
        <p className="hero-copy"></p>
      </section>

      <section className="features-panel">
        <div className="features-head">
          <p className="section-tag">Step 1: Features</p>
          <h2>Product Feature Walkthroughs</h2>
          <p className="section-copy">Begin with the flagship experience, then review supporting capabilities.</p>
        </div>

        <article className="feature-card main-feature-card">
          <div className="feature-meta">
            <span>Main Feature</span>
            <h3>${featureMain.title}</h3>
            <p>${featureMain.description}</p>
          </div>
          <div className="video-card">
            <${EmbedFrame}
              title=${featureMain.title}
              src=${featureMain.src}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              loading="eager"
            />
          </div>
        </article>

        <div className="feature-grid">
          ${featureVideos.map(
            (feature) => html`
              <article className="feature-card">
                <div className="feature-meta">
                  <span>Feature</span>
                  <h3>${feature.title}</h3>
                  <p>${feature.description}</p>
                </div>
                <div className="video-card">
                  <${EmbedFrame}
                    title=${feature.title}
                    src=${feature.src}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  />
                </div>
              </article>
            `,
          )}
        </div>
      </section>

      <section className="chatbot-panel">
        <div className="chatbot-copy">
          <p className="section-tag">Step 2: Chatbot</p>
          <h2>Live Assistant Experience</h2>
          <p className="section-copy">Interact with the assistant in real time to evaluate quality and shopper guidance.</p>
          <div className="chatbot-points">
            <p><strong>Suggested prompt:</strong> "I need outfit recommendations for a summer wedding."</p>
            <p><strong>Validation tip:</strong> Upload a product image to test visual recommendations.</p>
          </div>
        </div>
        <article className="video-card chatbot-card">
          <${EmbedFrame}
            title="Future-Chat live assistant"
            src="https://www.chatbase.co/chatbot-iframe/O4qVhQe2IYhPivU38DSks"
          />
        </article>
      </section>

      <section className="configure-panel">
        <div className="features-head">
          <p className="section-tag">Step 3: Setup</p>
          <h2>Configuration and Dashboard Setup</h2>
          <p className="section-copy">Finalize configuration and learn how to track performance from day one.</p>
        </div>
        <div className="feature-grid setup-grid">
          ${setupVideos.map(
            (video) => html`
              <article className="feature-card">
                <div className="feature-meta">
                  <span>Setup</span>
                  <h3>${video.title}</h3>
                  <p>${video.description}</p>
                </div>
                <div className="video-card">
                  <${EmbedFrame}
                    title=${video.title}
                    src=${video.src}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  />
                </div>
              </article>
            `,
          )}
        </div>
      </section>

      <section className="app-link-panel">
        <p className="section-tag">Step 4: Open App</p>
        <h2>Ready to go live with Future Chat?</h2>
        <p className="section-copy">Open the app to complete onboarding and activate your AI shopping assistant.</p>
        <a href=${appLink} target="_blank" rel="noreferrer" className="app-link-btn">Launch Future Chat</a>
      </section>
    </main>
  `;
}
