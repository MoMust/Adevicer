"use client";
import React, { useState, useEffect } from "react";

const gadgetData = async () => {
  const resp = await fetch(`/api/gadgets`, { cache: "no-store" });

  if (!resp.ok) {
    throw new Error("Faild to fetch gadgets.");
  }

  return resp.json();
};

const submitReview = async (review) => {
  const resp = await fetch("/api/admin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
  });

  if (!resp.ok) {
    throw new Error("Faild to create review.");
  }

  return resp.json();
};

const Write = () => {
  const [gadgets, setGadgets] = useState([]);
  const [selectedGadget, setSelectedGadget] = useState(null);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewContent, setReviewContent] = useState("");
  const [reviewImage, setReviewImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedGadgets = await gadgetData();
        setGadgets(fetchedGadgets.gadgets || []);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const handleGadgetSelect = (gadgetId) => {

    const gadget = gadgets.find((g) => g.id === gadgetId);
    
    if (gadget) {
      setSelectedGadget(gadget);
      setReviewTitle(gadget.name); // Aut fill title name
      setReviewContent(gadget.description); // Auto fill content
      setReviewImage(gadget.image); // Auto fill image url
    }else{
      setSelectedGadget(null);
      setReviewTitle("");
      setReviewContent("");
      setReviewImage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    if (!selectedGadget || !reviewTitle || !reviewContent) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }
    
    // Send review
    try {
      await submitReview({
        title: reviewTitle,
        content: reviewContent,
        gadgetId: selectedGadget.id,
        slug: reviewTitle,
        searchSlug: reviewTitle,
        rating: 0,
        
      });
      setSuccess(true);
      setReviewTitle("");
      setReviewContent("");
      setSelectedGadget(null);
      setReviewImage("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="font-tomorrow box-border wrapper border w-screen h-screen grid grid-rows-6 justify-center mt-50">
      <div className=" w-screen main-container row-span-5 grid justify-center content-center">
        <form onSubmit={handleSubmit} className="grid gap-10 wrap mt-20">
          <h1 className="lg:text-3xl md:text-xl font-bold text-center">
            Create a new review (Admin)
          </h1>

          {/* Gadget Selection */}
          <div className="grid gap-2">
            <h2 className="lg:text-xl md:text-lg font-semibold text-center">
              Choose a gadget
            </h2>
            <select
              value={selectedGadget?.id || ""}
              onChange={(e) => handleGadgetSelect(e.target.value)}
              className="border p-2 w-full text-center"
              required
            >
              <option value="">Choose a gadget</option>
              {gadgets.map((gadget) => (
                <option key={gadget.id} value={gadget.id}>
                  {gadget.name}
                </option>
              ))}
            </select>
          </div>

          {/* Automatically Filled Fields */}
          {selectedGadget && (
            <div className="flex justify-center  grid gap-2">
              <h2 className="lg:text-xl md:text-lg font-semibold text-center">
                Gadget Bild
              </h2>
              <img
                src={reviewImage || "/icons/no-image-icon.png"}
                alt="Gadget"
                className="w-32 h-32"
              />
            </div>
          )}

          {/* Title Input */}
          <div className="grid gap-2">
            <h2 className="lg:text-xl md:text-lgfont-semibold text-center">
              Titel
            </h2>
            <input
              type="text"
              value={reviewTitle}
              onChange={(e) => setReviewTitle(e.target.value)}
              className="border p-2 w-full text-center"
              required
            />
          </div>

          {/* Content Input */}
          <div className="grid gap-2">
            <h2 className="lg:text-xl md:text-lg font-semibold text-center">
              Innehåll
            </h2>
            <textarea
              style={{ resize: "none" }}
              value={reviewContent}
              onChange={(e) => setReviewContent(e.target.value)}
              className="border p-2 w-full"
              rows={4}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? "Working..." : "Create Review"}
          </button>

          {/* Messages */}
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">Review created!</p>}
        </form>
      </div>
    </div>
  );
};

export default Write;
