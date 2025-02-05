import React from "react";

export default function BookingPage() {
  return (
    <div className="booking-page">
      <h1 className="booking-title">Book a Session</h1>
      <p className="booking-subtitle">
        Choose the package that best suits your needs and reserve your spot
        online!
      </p>

      <div className="booking-packages">
        {/* SILVER */}
        <div className="booking-card silver-package">
          <h2>Silver Package</h2>
          <p>Perfect for new players or casual training.</p>
          <a
            href="https://www.vagaro.com/cl/uftQ7gHMdHuxbk9lr95qOFporscEq8cEf-n4zx-IqFQ="
            target="_blank"
            rel="noopener noreferrer"
            className="booking-btn"
          >
            Book SILVER
          </a>
        </div>

        {/* GOLD */}
        <div className="booking-card gold-package">
          <h2>Gold Package</h2>
          <p>Take it up a notch with advanced drills and more cage time.</p>
          <a
            href="https://www.vagaro.com/cl/DaQegUQ305Bsr6sFBZ4B3jH0uGERbapdqFbSl~Zgo8s="
            target="_blank"
            rel="noopener noreferrer"
            className="booking-btn"
          >
            Book GOLD
          </a>
        </div>

        {/* PLATINUM */}
        <div className="booking-card platinum-package">
          <h2>Platinum Package</h2>
          <p>Top-tier training for serious athletes.</p>
          <a
            href="https://www.vagaro.com/cl/pi5RmUyanXxWwI6tndXL41qAs~2d1bWoU-rE28wHAAQ="
            target="_blank"
            rel="noopener noreferrer"
            className="booking-btn"
          >
            Book PLATINUM
          </a>
        </div>
      </div>
    </div>
  );
}
