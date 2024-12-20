import React from "react";
import "./PhilSection.css";
import Longino from "../images/helen.jpg";
import Mill from "../images/Stuart_Mill_G_F_Watts.jpg";

function PhilSection() {
  return (
    <div className="philosophy-container">
      <h1>The Impact of AI on Our Beliefs</h1>
      <h2 className="philosophy-subtitle">
        Explore how Artificial Intelligence shapes our beliefs and what key
        philosophers like Mill and Longino might think about it.
      </h2>

      <div className="philosophy-content">
        {/* Mill Section */}
        <div className="philosopher-section">
          <img
            src={Mill}
            alt="John Stuart Mill"
            className="philosopher-image"
          />
          <div className="philosopher-text">
            <h3>John Stuart Mill</h3>
            <p>
              Mill believed that exposure to diverse perspectives is crucial for
              truth and intellectual progress. He would view AI as a powerful
              tool to enhance belief formation by providing access to vast and
              varied information. However, I believe Mill would likely caution
              against over-reliance on AI, as it could reduce critical thinking
              and engagement with opposing views. He would likely express
              concerns about the risk of algorithmic "filter bubbles," where
              users are only exposed to information reinforcing their existing
              beliefs. Such selective exposure undermines the critical
              engagement Mill valued, potentially stunting intellectual
              progress.
            </p>
          </div>
        </div>

        {/* AI and Belief Formation */}
        <div className="philosopher-description">
          <h3>AI and Belief Formation</h3>
          <ul>
            <li>
              <strong> Reinforcement of Existing Beliefs: </strong>
              AI-powered recommendation algorithms can trap users in "filter
              bubbles," consistently presenting content that aligns with their
              preexisting beliefs. This selective exposure limits diverse
              perspectives, reinforcing biases and potentially polarizing
              communities further.
            </li>
            <li>
              <strong>Creation of Uncertainty: </strong>
              Interactions with generative AI systems can create doubt about
              real information, especially when users are unsure about the
              accuracy or intent of the responses.
            </li>
            <li>
              <strong>Bias Amplification: </strong> AI systems often mirror the
              biases in their training data. For instance, if historical data
              reflects societal inequalities​, these biases can be perpetuated,
              affecting decisions in areas like hiring, lending, or legal
              judgments. This not only influences individual beliefs about
              fairness but can also increase systemic inequalities
            </li>
            <li>
              <strong>Shaping Public Discourse: </strong> AI has the potential
              to flood social platforms with persuasive narratives or even
              misinformation. This capability can sway public opinion on
              critical issues, subtly altering collective beliefs and actions
              over time​
            </li>
            <li>
              <strong>Ethical Implications: </strong> The lack of standardized
              frameworks for ethical AI development can lead to unintended
              consequences. Transparency and fairness in AI design are vital to
              minimizing distortions in belief systems, as biased or opaque
              systems erode public trust in technology and its outputs​
            </li>
          </ul>
        </div>

        {/*  Longino Section */}
        <div className="philosopher-section">
          <img
            src={Longino}
            alt="Helen Longino"
            className="philosopher-image"
          />
          <div className="philosopher-text">
            <h3>Helen Longino</h3>
            <p>
              Longino would concentrate on the role of AI in promoting
              inclusivity and transparency in belief formation. She would see AI
              as a tool that can publicize access to diverse viewpoints, which
              aligns with her belief that knowledge is shaped by community
              interaction and critique. She'd believe AI can be used to identify
              patterns and biases, which may aid in addressing power imbalances
              in knowledge production. Nonetheless, Longino emphasizes the
              importance of ethical AI development. She would warn against
              systems that unintentionally promtote existing social biases,
              arguing that they may reinforce rather than challenge societal
              inequities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhilSection;
