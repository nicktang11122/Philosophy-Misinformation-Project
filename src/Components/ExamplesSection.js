import React from "react";
import "./ExamplesSection.css";
import "../App.css";
import clickbaitImg from "../images/clickbait-example-1.jpeg";
import statImg from "../images/Infographics_Fake news - 3.png";

function ExamplesSection() {
  return (
    <div className="examples-container">
      <h1>Examples of Misinformation</h1>
      <h2 className="examples-subtitle">
        Misinformation spreads in various forms. Here are examples to help you
        recognize and counter it effectively.
      </h2>

      {/* Example Images Section */}
      <div className="examples-content">
        <div className="example">
          <iframe
            width="100%"
            height="150%"
            src="https://www.youtube.com/embed/B4jNttRvbpU"
            title="DeepFake Example Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="example-video"
          ></iframe>
          <p>DeepFakes: AI-generated media that looks real but is fake.</p>
          <a href="https://security.virginia.edu/deepfakes">
            <button className="image-btn">Learn More</button>
          </a>
        </div>
        <div className="example">
          <img
            src={clickbaitImg}
            alt="Clickbait Example"
            className="example-image"
          />
          <p>Clickbait: Misleading headlines to generate clicks.</p>
          <a href="https://neilpatel.com/blog/why-clickbait-works/">
            <button className="image-btn">Learn More</button>
          </a>
        </div>
        <div className="example">
          <img
            src={statImg}
            alt="Misleading Statistics"
            className="example-image"
          />
          <p>Misleading Statistics: Manipulated data to misinform.</p>
          <a href="https://www.ncsc.org/consulting-and-research/areas-of-expertise/communications,-civics-and-disinformation/disinformation/for-the-public">
            <button className="image-btn">Learn More</button>
          </a>
        </div>
      </div>

      {/* Quote/Textbox Section */}
      <div className="quotes-section">
        <h2>Challenges Misinformation Causes:</h2>
        <div className="quote">
          <ul>
            <li>
              <strong>
                Misinformation undermines confidence in critical institutions,
                such as governments, healthcare systems, and media outlets. When
                false narratives spread unchecked, the public may become
                skeptical of legitimate information, leading to reduced
                compliance with important policies, such as public health
                directives during pandemics or election integrity measures.
              </strong>
            </li>
            <li>
              <strong>
                The rapid spread of misinformation exacerbates societal
                divisions by creating echo chambers and amplifying biases. This
                increases polarization, making it difficult to foster
                constructive dialogue or consensus on pressing issues like
                climate change, education reform, and social justice. These
                divisions erode the fabric of communities and impede
                collaborative problem solving.
              </strong>
            </li>
            <li>
              <strong>
                Businesses must allocate substantial resources to monitor and
                counteract misinformation, such as employing fact-checking
                teams, deploying crisis communication strategies, or enhancing
                digital defenses against the spread of false information.
                Additionally, misinformation can lead to legal challenges,
                reduced consumer demand, or even regulatory scrutiny, creating
                unforeseen operational hurdles and financial losses.
              </strong>
            </li>
          </ul>
        </div>
        <div className="quote"></div>
      </div>
      <div className="quotes-section">
        <h2>How Does AI Stop the Spread of Misinformation?</h2>
        <div className="quote">
          <ul>
            <li>
              <strong>
                Detection and Monitoring of Misinformation: AI, particularly
                machine learning algorithms, significantly enhances the ability
                to detect and classify misinformation by analyzing large
                datasets and identifying patterns in real time. These systems
                excel in understanding context and differentiating between
                various types of false information, such as deepfakes or
                fabricated news, offering a scalable solution for monitoring
                global information streams. (Clark, 2024)
              </strong>
            </li>
            <li>
              <strong>
                Collaboration and Educational Impact: By combining AI-driven
                tools with human oversight, misinformation detection becomes
                more accurate and reliable. Additionally, AI insights can guide
                public education initiatives and policymaking, addressing the
                root causes of misinformation and preventing its spread. (Clark,
                2024)
              </strong>
            </li>
            <li>
              <strong>
                Proactive Content Verification: AI systems are employed to
                verify the authenticity of content before it is widely
                disseminated. By analyzing metadata, linguistic patterns, and
                image inconsistencies, these tools can flag potential
                disinformation early. This proactive approach reduces the spread
                of false narratives and helps maintain online trust. (Li et al.,
                2024)
              </strong>
            </li>
            <li>
              <strong>
                Customized Countermeasures: AI facilitates the creation of
                tailored counter-disinformation campaigns by analyzing the
                audience and the tactics used to spread false information. These
                insights allow for targeted responses, such as fact-checking,
                debunking myths, and amplifying credible sources, to effectively
                neutralize disinformation. (Li et al., 2024)
              </strong>
            </li>
          </ul>
        </div>
        <div className="quote"></div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta">
        <h3>Learn More About AI Models</h3>
        <p>
          Take the opportunity to try an AI-Detection model below and learn how
          they work!
        </p>
        <a href="/ai-detector">
          <button className="cta-button">TRY AI MODEL</button>
        </a>
      </div>
    </div>
  );
}

export default ExamplesSection;
