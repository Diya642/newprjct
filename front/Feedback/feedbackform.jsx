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
<form
onSubmit={handleSubmit}
className="w-96 mx-auto mt-8 flex flex-col gap-4 p-6 border border-gray-300 rounded-xl shadow"
>
<h2 className="text-xl font-bold text-center">Feedback Form</h2>


<label className="font-medium">Name</label>
<input
type="text"
name="name"
onChange={handleChange}
required
className="border p-2 rounded w-full"
/>


<label className="font-medium">Email</label>
<input
type="email"
name="email"
onChange={handleChange}
required
className="border p-2 rounded w-full"
/>


<label className="font-medium">Category</label>
<select
name="category"
onChange={handleChange}
className="border p-2 rounded"
>
<option value="Suggestion">Suggestion</option>
<option value="Bug">Bug</option>
<option value="Compliment">Compliment</option>
</select>


<label className="font-medium">Message</label>
<textarea
name="message"
rows="4"
onChange={handleChange}
required
className="border p-2 rounded w-full"
/>


<button
type="submit"
className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
>
Submit Feedback
</button>
</form>
);
}
const styles = {
form: {
width: "320px",
margin: "20px auto",
display: "flex",
flexDirection: "column",
gap: "10px",
padding: "20px",
border: "1px solid #ccc",
borderRadius: "10px",
},
}