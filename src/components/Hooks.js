import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Moon,
  CloudRain,
  Wind,
  Zap,
  Trees,
  Droplet,
  Heart,
} from "lucide-react";

const colors = [
  { name: "Sunset Orange", value: "#FF4E50", icon: Sun },
  { name: "Midnight Blue", value: "#000C40", icon: Moon },
  { name: "Rainy Gray", value: "#3C3B3F", icon: CloudRain },
  { name: "Breezy Teal", value: "#48B1BF", icon: Wind },
  { name: "Electric Purple", value: "#8E2DE2", icon: Zap },
  { name: "Forest Green", value: "#228B22", icon: Trees },
  { name: "Royal Blue", value: "#4169E1", icon: Droplet },
  { name: "Deep Pink", value: "#FF1493", icon: Heart },
];

const Hooks = () => {
  const [currentColor, setCurrentColor] = useState(colors[3]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", updateWindowSize);

    // Set initial window size
    updateWindowSize();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundColor: currentColor.value,
        transition: "background-color 1s ease",
      }}
    >
      <motion.div
        className="relative bg-white rounded-full shadow-xl overflow-hidden"
        animate={{
          width: isExpanded ? 500 : 250,
          height: isExpanded ? 500 : 250,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-4xl font-bold"
          style={{ color: currentColor.value }}
        >
          {currentColor.name}
        </motion.div>
        {colors.map((color, index) => (
          <ColorButton
            key={color.name}
            color={color}
            index={index}
            totalColors={colors.length}
            isExpanded={isExpanded}
            onClick={() => setCurrentColor(color)}
            mousePosition={mousePosition}
            windowSize={windowSize}
          />
        ))}
      </motion.div>
    </div>
  );
};

const ColorButton = ({
  color,
  index,
  totalColors,
  isExpanded,
  onClick,
  mousePosition,
  windowSize,
}) => {
  const angle = (index / totalColors) * 2 * Math.PI;
  const radius = isExpanded ? 200 : 0;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  const Icon = color.icon;

  return (
    <motion.button
      className="absolute w-12 h-12 rounded-full flex items-center justify-center text-white"
      style={{ backgroundColor: color.value }}
      animate={{
        x: y + 230,
        y: x + 217,
        scale: isExpanded ? 1.2 : 1,
      }}
      whileHover={{ scale: 1.3 }}
      onClick={onClick}
    >
      <motion.div
        animate={{
          x: (mousePosition.x - windowSize.width / 2) / 20,
          y: (mousePosition.y - windowSize.height / 2) / 20,
        }}
      >
        <Icon size={24} />
      </motion.div>
    </motion.button>
  );
};

export default Hooks;
