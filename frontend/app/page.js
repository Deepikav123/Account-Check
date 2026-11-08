"use client";
import { useState } from "react";
import homepageIcon from "./icons/homepage-icon.png"
import Image from "next/image";
export default function HomePage() {
  return (
    <main>
      <header className="homepage-header">
        {/* <img className="homepageIcon" src={homepageIcon}/> */}
        <Image
          className="homepageIcon"
          src={homepageIcon}
          alt="Homepage icon"
        />
        <div className="header-info">
          <h1 className="heading">Account Check</h1>
          <p className="header-subline">Enter a mobile number to check account registration status.</p>
        </div>
      </header>
      <section className="homepage-body">
        <input type="tel" placeholder="Enter 10-digit Indian mobile number" className="mobile-number-input" />
        <button className="search-button">Search</button>
      </section>
    </main>
  )
}

