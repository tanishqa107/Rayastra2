import React, { useEffect, useState } from "react";
import axios from "axios";

type PurchasedCourse = {
  course_id: string;
  course_title: string;
};

const PurchasedCourses: React.FC = () => {
  const [courses, setCourses] = useState<PurchasedCourse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPurchasedCourses = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        setError("User ID not found in localStorage");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `https://rayastra2.onrender.com/api/v1/getuserspurchasedcourses/${userId}`
        );
        setCourses(response.data.courses || []);
      } catch (err: any) {
        console.error("Failed to fetch purchased courses:", err);
        setError(err.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPurchasedCourses();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading courses...</p>;
  if (error) return <p className="text-center text-red-600 mt-10">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Purchased Courses</h2>
      {courses.length === 0 ? (
        <p className="text-gray-500 text-center">You have not purchased any courses yet.</p>
      ) : (
        <ul className="space-y-4">
          {courses.map((course) => (
            <li
              key={course.course_id}
              className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white"
            >
              <h3 className="text-xl font-semibold">{course.course_title}</h3>
              <p className="text-sm text-gray-600">Course ID: {course.course_id}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PurchasedCourses;
