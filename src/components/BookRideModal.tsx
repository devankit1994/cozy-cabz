import React, { useState } from "react";

interface BookRideModalProps {
  open: boolean;
  onClose: () => void;
}

const BookRideModal: React.FC<BookRideModalProps> = ({ open, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [travellers, setTravellers] = useState("");
  const [date, setDate] = useState("");
  const [requirements, setRequirements] = useState("");
  const [terms, setTerms] = useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (!terms) {
      setError("You must agree to the terms and conditions.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/book-ride", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          serviceType,
          travellers,
          date,
          requirements,
        }),
      });

      if (res.ok) {
        setSuccess("Your enquiry has been sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setServiceType("");
        setTravellers("");
        setDate("");
        setRequirements("");
        setTerms(false);
      } else {
        const data = await res.json();
        setError(data.error || "Failed to send enquiry. Please try again.");
      }
    } catch (err) {
      setError("Failed to send enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl mx-4 p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-black">
          Book Your <span className="text-yellow-400">Car</span>
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Enter Email Id"
              className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="flex flex-1 min-w-0">
              <input
                type="tel"
                placeholder="Phone No"
                className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              required
            >
              <option value="">Select Service Type</option>
              <option value="Outstation">Outstation</option>
              <option value="Local">Local</option>
              <option value="Airport Transfer">Airport Transfer</option>
            </select>
            <input
              type="number"
              placeholder="No. of Travellers"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={travellers}
              onChange={(e) => setTravellers(e.target.value)}
              min={1}
              required
            />
            <input
              type="text"
              placeholder="dd-mm-yyyy"
              className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              required
            />
          </div>

          <textarea
            placeholder="Any specific requirement / itinerary"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            rows={2}
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
          />
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="terms"
              className="accent-yellow-400 w-5 h-5 mr-2"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
              required
            />
            <label htmlFor="terms" className="text-sm text-black">
              By clicking "Send Enquiry" button, you agree to our{" "}
              <a href="#" className="text-yellow-400 font-semibold underline">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-yellow-400 font-semibold underline">
                Privacy Policy
              </a>
            </label>
          </div>
          {error && (
            <div className="text-red-600 text-sm font-semibold">{error}</div>
          )}
          {success && (
            <div className="text-green-600 text-sm font-semibold">
              {success}
            </div>
          )}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-12 py-3 rounded-lg text-lg transition-all"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Enquiry"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookRideModal;
