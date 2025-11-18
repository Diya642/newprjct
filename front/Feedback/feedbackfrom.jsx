import { useState } from "react";


export default function FeedbackForm() {
const [formData, setFormData] = useState({
name: "",
email: "",
message: "",
category: "Suggestion",
});


const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};


const handleSubmit = async (e) => {
e.preventDefault();


const res = await fetch("http://localhost:5000/api/feedback", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(formData),
});


const data = await res.json();
alert("Feedback Sent Successfully!");
};


return (
<form onSubmit={handleSubmit} style={styles.form}>
<h2>Feedback Form</h2>


<label>Name</label>
<input type="text" name="name" onChange={handleChange} required />


<label>Email</label>
<input type="email" name="email" onChange={handleChange} required />


<label>Category</label>
<select name="category" onChange={handleChange}>
<option value="Suggestion">Suggestion</option>
<option value="Bug">Bug</option>
<option value="Compliment">Compliment</option>
</select>


<label>Message</label>
<textarea name="message" rows="4" onChange={handleChange} required />


<button type="submit">Submit Feedback</button>
</form>
);
}


const styles = {
form: {
width: "320px",
margin: "20px auto",
display: "flex",
flexDirection: "column",
}
};