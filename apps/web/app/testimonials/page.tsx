"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowLeft } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Cultural Historian",
    text: "BharatLens transformed how I conduct field research. The AR translations of ancient inscriptions are incredibly accurate, saving me hours of manual deciphering.",
    rating: 5,
    location: "Hampi, Karnataka",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Travel Blogger",
    text: "The AI Trip Planner gave me an itinerary I couldn't have found in any guidebook. I discovered hidden stepwells in Gujarat that were completely off the tourist map!",
    rating: 5,
    location: "Patan, Gujarat",
  },
  {
    id: 3,
    name: "Ravi Kumar",
    role: "Local Guide",
    text: "Using the Voice Translator, I can now seamlessly communicate with tourists from Japan and Germany. It's like having a universal translator in my pocket.",
    rating: 4,
    location: "Varanasi, UP",
  },
  {
    id: 4,
    name: "Priya Desai",
    role: "Architecture Student",
    text: "The 3D Virtual Tours are breathtaking. I was able to study the intricate carvings of the Konark Sun Temple from my dorm room in high definition.",
    rating: 5,
    location: "Mumbai, Maharashtra",
  },
];

export default function Testimonials() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#050505",
      color: "#e0e0e0",
      fontFamily: "'Inter', sans-serif",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background Grid & Orbs */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, width: "100%", height: "100%",
        opacity: 0.1, zIndex: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle at 50% 50%, #c9a84c 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />
      <div style={{
        position: "absolute", top: "-10%", left: "-10%", width: "40vw", height: "40vw",
        background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)",
        filter: "blur(60px)", zIndex: 0
      }} />
      
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "80px 20px" }}>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "60px" }}
        >
          <Link href="/" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            color: "#c9a84c", textDecoration: "none", fontSize: "14px",
            textTransform: "uppercase", letterSpacing: "1px", marginBottom: "30px",
            border: "1px solid rgba(201,168,76,0.3)", padding: "8px 16px", borderRadius: "30px",
            transition: "all 0.3s ease"
          }}>
            <ArrowLeft size={16} /> Back to Home
          </Link>
          
          <h1 style={{
            fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 300,
            letterSpacing: "-1px", margin: "0 0 20px 0", color: "#fff"
          }}>
            Traveler <span style={{ fontFamily: "serif", fontStyle: "italic", color: "#c9a84c" }}>Stories</span>
          </h1>
          <p style={{
            fontSize: "1.2rem", maxWidth: "600px", color: "#a0a0a0", lineHeight: 1.6
          }}>
            See how explorers, historians, and locals are experiencing India's heritage differently with BharatLens.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "30px"
        }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                borderRadius: "24px",
                padding: "40px 30px",
                backdropFilter: "blur(10px)",
                display: "flex",
                flexDirection: "column",
                position: "relative"
              }}
            >
              <Quote size={40} color="rgba(201,168,76,0.2)" style={{ position: "absolute", top: 30, right: 30 }} />
              
              <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} size={16} fill="#c9a84c" color="#c9a84c" />
                ))}
              </div>
              
              <p style={{
                fontSize: "1.1rem", lineHeight: 1.7, color: "#e0e0e0",
                marginBottom: "30px", flex: 1, fontStyle: "italic"
              }}>
                "{t.text}"
              </p>
              
              <div>
                <div style={{ color: "#fff", fontWeight: 500, fontSize: "1.1rem" }}>{t.name}</div>
                <div style={{ color: "#c9a84c", fontSize: "0.9rem", marginTop: "4px" }}>
                  {t.role} &middot; {t.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            marginTop: "100px", textAlign: "center",
            padding: "60px 20px", background: "linear-gradient(to top, rgba(201,168,76,0.1), transparent)",
            borderRadius: "32px", border: "1px solid rgba(201,168,76,0.2)"
          }}
        >
          <h2 style={{ fontSize: "2.5rem", fontWeight: 300, color: "#fff", marginBottom: "20px" }}>
            Ready to start your <span style={{ color: "#c9a84c", fontStyle: "italic" }}>journey?</span>
          </h2>
          <Link href="/dashboard" style={{
            display: "inline-block", backgroundColor: "#c9a84c", color: "#000",
            padding: "16px 32px", borderRadius: "50px", textDecoration: "none",
            fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase",
            transition: "transform 0.2s ease"
          }}>
            Explore BharatLens
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
