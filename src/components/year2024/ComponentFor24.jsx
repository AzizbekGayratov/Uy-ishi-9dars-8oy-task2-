"use client";
import React, { createContext } from "react";
import { motion } from "framer-motion";
import LineChart from "./LineChart24";

export default function ComponentFor24() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <LineChart />
    </motion.div>
  );
}
