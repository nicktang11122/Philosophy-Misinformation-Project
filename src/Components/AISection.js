import React, { useState } from "react";
import "./AISection.css";
import "../App.css";
import me from "../images/IMG_7073.jpg";
import AI1 from "../images/Gemini_Generated_Image_oguelxoguelxogue.jpg";
import AI2 from "../images/ai image.png";
import Sky from "../images/image0.jpg";

function AISection() {
  const [imageFile, setImageFile] = useState(null); // State to track uploaded image
  const [imagePreview, setImagePreview] = useState(null); // State to preview uploaded image
  const [analysisResult, setAnalysisResult] = useState(""); // State to display analysis result

  // Handlers for input changes
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImagePreview(file ? URL.createObjectURL(file) : null);
    setAnalysisResult(""); // Reset result when a new image is uploaded
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please upload an image to analyze.");
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const response = await fetch(
        "https://misinformation.vercel.app/api/predict",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json(); // Parse JSON response

      if (!response.ok) {
        alert(`Error: ${data.error}`);
        console.error("Server Response Error:", data);
        return;
      }

      // Update result state with analysis data
      setAnalysisResult(
        `Result: ${data.result}, Confidence: ${(data.confidence * 100).toFixed(
          2
        )}%`
      );
    } catch (error) {
      console.error("Error analyzing image:", error);
      alert("An error occurred while analyzing the image. Please try again.");
    }
  };

  return (
    <div className="AI-container">
      <h1>AI Detector</h1>
      <h2 className="AI-subtitle">Upload an image below to analyze.</h2>
      <form onSubmit={handleSubmit} className="AI-form">
        {/* File Input */}
        <div className="AI-input-group">
          <label htmlFor="imageInput">Upload an Image:</label>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="AI-file-input"
          />
        </div>

        {/* Image Preview */}
        {imagePreview && (
          <div className="image-preview">
            <img
              src={imagePreview}
              alt="Preview"
              style={{ maxWidth: "100%" }}
            />
          </div>
        )}

        {/* Submit Button */}
        <button type="submit" className="AI-submit-btn">
          Analyze
        </button>
      </form>

      {/* Display Analysis Result */}
      {analysisResult && (
        <div className="AI-result">
          <h2>Analysis Result:</h2>
          <p>{analysisResult}</p>
        </div>
      )}

      <div className="Explaination-Section">
        <h2>Why I Couldn't Implement AI Detector</h2>
        <div className="infos">
          <strong>
            Given the time constraint and my limited knowledge of AI Models, I
            was not able to implement a detection model at this time. When
            searching for open-sourced, pre-trained models, I was not able to
            find one that was accurate. Although many of these models produce a
            high accuracy score, models are trained under a certain dataset and
            my photos may not match them. For example, I tried multiple photos
            of me with different lighting, angles, and the results would vary.
            Since they aren't able to be trained with massive datasets like big
            companies could, it isn't possible for me to produce an accurate
            detector without training it myself. Like stated, due to the time
            constraint and my limited knowledge I was unable to do this.
          </strong>
        </div>
      </div>
      <div className="Explaination-Section">
        <h2>How Do AI Models Detect Fake Images?</h2>
        <div className="infos">
          <ul>
            <li>
              <strong>
                AI models detect fakes through the analysis of visual and
                structural anomalies in photos. Specifically, they examine
                images for subtle inconsistencies that are difficult for humans
                to spot. Techniques include analyzing lighting, shadows, and
                reflections to detect discrepancies that suggest editing or
                fabrication. For example, mismatched lighting across a scene or
                unnatural shadows might indicate tampering. Furthermore, models
                assess pixel-level details, looking for compression artifacts or
                irregularities in texture patterns, which often emerge during
                digital alterations.
              </strong>
            </li>
            <li>
              <strong>
                AI models for detecting fake images are trained using large
                datasets of both real and manipulated images. The training
                process involves feeding the model labeled data (real vs. fake)
                and using supervised learning techniques, where the model learns
                to distinguish between genuine and altered content.
                Convolutional Neural Networks (CNNs) are typically employed to
                extract features from images, such as edges, textures, and
                patterns. The model is then optimized with a loss function to
                minimize errors. Once trained, the model can classify new images
                as real or fake based on the patterns it has learned.
              </strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="Explaination-Section">
        <h2>How Can You Detect Fake Images?</h2>
        <div className="infos">
          <ul>
            <li>
              <strong>Unnatural Facial Movements: </strong>
              Look for inconsistencies in facial expressions or unnatural eye
              movements, which deepfakes often exhibit.
              <blockquote>
                “AI-generated faces can sometimes fail to replicate the full
                range of natural facial expressions.” — Matt Groh
              </blockquote>
            </li>
            <li>
              <strong>Examine Lighting and Shadows: </strong>
              Fake images may have unnatural lighting, with inconsistent shadows
              or reflections that don’t align with the rest of the image.
              <blockquote>
                “Inaccurate lighting and shadows are common giveaways in
                deepfake images.” — Matt Groh
              </blockquote>
            </li>
            <li>
              <strong>Analyze Image Artifacts: </strong>
              Inspect the edges around faces, especially where they meet the
              background, as deepfakes can leave visible artifacts or blurring.
              <blockquote>
                “Look for pixelation or distortion around the face, which can be
                a telltale sign of manipulation.” — Matt Groh
              </blockquote>
            </li>
            <li>
              <strong>Use Deepfake Detection Tools: </strong>
              Employ specialized software tools designed to analyze images and
              videos for signs of manipulation.
              <blockquote>
                “Using deepfake detection tools can help verify the authenticity
                of an image or video.” — Matt Groh
              </blockquote>
            </li>
          </ul>
          <a href="https://www.media.mit.edu/projects/detect-fakes/overview/">
            <button className="image-btn">Learn More</button>
          </a>
        </div>
      </div>
      {/* Photo Grid Section */}
      <div className="photo-grid">
        <h2>Few Example Images Experimented With</h2>
        <div className="grid">
          <div className="photo-item">
            <img src={AI2} alt="Fake AI Image" />
            <p>FAKE</p>
          </div>
          <div className="photo-item">
            <img src={me} alt="Photo of Me" />
            <p>REAL</p>
          </div>
          <div className="photo-item">
            <img src={AI1} alt="Fake AI Image" />
            <p>FAKE</p>
          </div>
          <div className="photo-item">
            <img src={Sky} alt="Sunset Photo" />
            <p>REAL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AISection;
