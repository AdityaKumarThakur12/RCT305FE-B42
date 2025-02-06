import React, { useState } from "react";
import "./FeedbackForm.css"; // Import CSS for styling

// Define types for form state
interface FeedbackFormState {
  name: string;
  email: string;
  rating: number;
  feedback: string;
}

const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState<FeedbackFormState>({
    name: "",
    email: "",
    rating: 0,
    feedback: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  // Validate and submit form
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { name, email, rating, feedback } = formData;
    if (!name || !email || rating === 0 || !feedback) {
      alert("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
  };

  // Reset form
  const handleReset = () => {
    setFormData({ name: "", email: "", rating: 0, feedback: "" });
    setSubmitted(false);
  };

  return (
    <div className="form-container">
      {submitted ? (
        <div className="confirmation-box">
          <h2>Thank you for your feedback!</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Rating:</strong> {formData.rating}</p>
          <p><strong>Feedback:</strong> {formData.feedback}</p>
          <button className="reset-button" onClick={handleReset}>Submit Another Feedback</button>
        </div>
      ) : (
        <form className="feedback-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Rating:</label>
            <select name="rating" value={formData.rating} onChange={handleChange} required>
              <option value={0}>Select Rating</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <div className="form-group">
            <label>Feedback:</label>
            <textarea name="feedback" value={formData.feedback} onChange={handleChange} required />
          </div>
          <button className="submit-button" type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
