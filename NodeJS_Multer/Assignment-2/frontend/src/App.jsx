import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(uploadedImages);

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (selectedFiles.length === 0) {
      alert("Please select at least one image");
      return;
    }

    if (selectedFiles.length > 5) {
      alert("You can upload maximum 5 images");
      return;
    }

    const formData = new FormData();

    selectedFiles.forEach((file) => {
      formData.append("images", file);
    });

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:4000/product/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      setUploadedImages(response.data.response.productImages);
      console.log(response.data.response.productImages);
      alert("Images uploaded successfully");
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Upload Product Images
        </h2>

        <form onSubmit={handleUpload} className="space-y-4">
          <input
            type="file"
            multiple
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
            className="w-full border p-2 rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            {loading ? "Uploading..." : "Upload Images"}
          </button>
        </form>

        {uploadedImages.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Uploaded Images:</h3>
            <div className="grid grid-cols-2 gap-4">
              {uploadedImages.map((img, index) => (
                <img
                  key={index}
                  src={`http://localhost:4000${img.url}`}
                  alt="product"
                  className="rounded-xl shadow"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
