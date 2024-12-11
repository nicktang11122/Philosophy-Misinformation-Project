import React from "react";
import "./BibSection.css";

function BibliographyPage() {
  return (
    <div className="bibliography-container">
      <h1>Bibliography</h1>
      <ul className="bibliography-list">
        <li>
          Clark, Christine. “How AI Can Help Stop the Spread of Misinformation.”
          Ucsd.edu, 2024,
        </li>
        <li>
          Groh, Matt. “Detect DeepFakes: How to Counteract Misinformation
          Created by AI.” MIT Media Lab, 2023
        </li>
        <li>
          "How AI Can Distort Human Beliefs," World Summit AI Blog. Accessed
          December 2024. Discusses the impact of AI on belief formation,
          including biases and ethical considerations.
        </li>
        <li>
          Li, Cathy, et al. “How AI Can Also Be Used to Combat Online
          Disinformation.” World Economic Forum, 14 June 2024,
        </li>
        <li>
          Sperling, Jonathan . “AI-Driven Misinformation: Challenges and
          Solutions for Businesses | Columbia Business School.” Columbia
          Business School, 5 Aug. 2024,
        </li>
        <li>
          Patel, Neil. “Why Clickbait Works (and Why You Should Do More of It).”
          Neil Patel, 15 Feb. 2019
        </li>
        <li>
          University of Virginia. “What the Heck Is a Deepfake? | Information
          Security at UVA, U.Va.” Security.virginia.edu, 2023
        </li>
      </ul>
    </div>
  );
}

export default BibliographyPage;
