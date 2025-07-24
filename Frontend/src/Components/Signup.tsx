import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  const [currIndex, setCurrIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    board: '',
    city: '',
  });

  const handleNext = () => {
    if (currIndex < 3) setCurrIndex(currIndex + 1);
  };

  const handleBack = () => {
    if (currIndex > 0) setCurrIndex(currIndex - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        ...formData,
         class: parseInt(formData.class), 
        email,
      };

      const res = await axios.post("http://localhost:3000/api/v1/handleInfo", payload);

      console.log("Info saved:", res.data);
      
      navigate("/dashboard"); // Redirect after successful submission
    } catch (error: any) {
      console.error("Error saving info:", error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col gap-20 items-center justify-center min-h-screen bg-yellow-50 px-4">
      <h1 className="text-black text-4xl">Help us to know you more</h1>
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transition-all duration-300">
        {currIndex === 0 && (
          <>
            <h3 className="text-xl font-semibold mb-4">What is your name?</h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </>
        )}

        {currIndex === 1 && (
  <>
    <h3 className="text-xl font-semibold mb-4">Which class are you in?</h3>
    <select
      name="class"
      value={formData.class}
      onChange={handleChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <option value="">Select Class</option>
      {[
  { label: "Nursery", value: -2 },
  { label: "LKG", value: -1 },
  { label: "UKG", value: 0 },
  { label: "1st", value: 1 },
  { label: "2nd", value: 2 },
  { label: "3rd", value: 3 },
  { label: "4th", value: 4 },
  { label: "5th", value: 5 },
  { label: "6th", value: 6 },
  { label: "7th", value: 7 },
  { label: "8th", value: 8 },
  { label: "9th", value: 9 },
].map((cls) => (
  <option key={cls.value} value={cls.value}>
    Class {cls.label}
  </option>
))}

    </select>
  </>
)}


        {currIndex === 2 && (
          <>
            <h3 className="text-xl font-semibold mb-4">Select your board</h3>
            <select
              name="board"
              value={formData.board}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Board</option>
              <option value="CBSE">CBSE</option>
              <option value="ICSE">ICSE</option>
              <option value="State Board">State Board</option>
              <option value="IB">Other</option>
            </select>
          </>
        )}

        {currIndex === 3 && (
          <>
            <h3 className="text-xl font-semibold mb-4">Which city are you from?</h3>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </>
        )}

        <div className="mt-6 flex justify-between">
          {currIndex > 0 && (
            <button
              onClick={handleBack}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              Back
            </button>
          )}
          {currIndex < 3 ? (
            <button
              onClick={handleNext}
              className="ml-auto px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="ml-auto px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
