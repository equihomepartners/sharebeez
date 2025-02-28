import React from 'react'
import { motion } from 'framer-motion'

export default function FlowChart() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-full h-full"
    >
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full"
        style={{ background: '#1a1a1a', borderRadius: '12px' }}
      >
        {/* Nodes */}
        <Node x={400} y={300} text="HIVE" subtext="Group public/private" isMain />
        <Node x={400} y={150} text="SHAREBEEZ" subtext="APP" />
        <Node x={600} y={200} text="Group" subtext="Orders" />
        <Node x={650} y={300} text="Inventory" subtext="Management" />
        <Node x={600} y={400} text="Admin" subtext="Access" />
        <Node x={400} y={450} text="Order" subtext="Fulfillment" />
        <Node x={200} y={350} text="Assign" subtext="Tags" />
        <Node x={150} y={250} text="QR Scanning" subtext="System" />

        {/* Connections */}
        <Connection 
          from={{ x: 400, y: 150 }} 
          to={{ x: 400, y: 300 }} 
          fromSide="bottom" 
          toSide="top" 
        />
        <Connection 
          from={{ x: 400, y: 300 }} 
          to={{ x: 600, y: 200 }} 
          fromSide="right" 
          toSide="left" 
        />
        <Connection 
          from={{ x: 400, y: 300 }} 
          to={{ x: 650, y: 300 }} 
          fromSide="right" 
          toSide="left" 
        />
        <Connection 
          from={{ x: 400, y: 300 }} 
          to={{ x: 600, y: 400 }} 
          fromSide="right" 
          toSide="left" 
        />
        <Connection 
          from={{ x: 400, y: 300 }} 
          to={{ x: 400, y: 450 }} 
          fromSide="bottom" 
          toSide="top" 
        />
        <Connection 
          from={{ x: 400, y: 300 }} 
          to={{ x: 200, y: 350 }} 
          fromSide="left" 
          toSide="right" 
        />
        <Connection 
          from={{ x: 400, y: 300 }} 
          to={{ x: 150, y: 250 }} 
          fromSide="left" 
          toSide="right" 
        />
      </svg>
    </motion.div>
  )
}

function Node({ x, y, text, subtext, isMain = false }: { x: number; y: number; text: string; subtext: string; isMain?: boolean }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <motion.rect
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        x="-90"
        y="-45"
        width="180"
        height="90"
        rx="10"
        fill="none"
        stroke="white"
        strokeWidth={isMain ? "4" : "2"}
      />
      <motion.text
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-sm"
        fill="white"
        textAnchor="middle"
        y="-10"
      >
        {text}
      </motion.text>
      <motion.text
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-sm"
        fill="white"
        textAnchor="middle"
        y="15"
      >
        {subtext}
      </motion.text>
    </g>
  )
}

function Connection({ 
  from, 
  to, 
  fromSide, 
  toSide 
}: { 
  from: { x: number; y: number }; 
  to: { x: number; y: number };
  fromSide: 'top' | 'right' | 'bottom' | 'left';
  toSide: 'top' | 'right' | 'bottom' | 'left';
}) {
  const BOX_WIDTH = 180;
  const BOX_HEIGHT = 90;
  const HALF_WIDTH = BOX_WIDTH / 2;
  const HALF_HEIGHT = BOX_HEIGHT / 2;

  // Calculate the actual connection points at the edges of the boxes
  const getEdgePoint = (point: { x: number; y: number }, side: 'top' | 'right' | 'bottom' | 'left') => {
    switch (side) {
      case 'top':
        return { x: point.x, y: point.y - HALF_HEIGHT };
      case 'right':
        return { x: point.x + HALF_WIDTH, y: point.y };
      case 'bottom':
        return { x: point.x, y: point.y + HALF_HEIGHT };
      case 'left':
        return { x: point.x - HALF_WIDTH, y: point.y };
    }
  };

  const fromPoint = getEdgePoint(from, fromSide);
  const toPoint = getEdgePoint(to, toSide);

  // Calculate control points for smooth curves
  const getControlPoints = () => {
    const dx = toPoint.x - fromPoint.x;
    const dy = toPoint.y - fromPoint.y;
    
    if ((fromSide === 'right' && toSide === 'left') || 
        (fromSide === 'left' && toSide === 'right')) {
      const midX = fromPoint.x + dx * 0.5;
      return `Q ${midX} ${fromPoint.y} ${toPoint.x} ${toPoint.y}`;
    }
    
    if ((fromSide === 'top' && toSide === 'bottom') || 
        (fromSide === 'bottom' && toSide === 'top')) {
      const midY = fromPoint.y + dy * 0.5;
      return `Q ${fromPoint.x} ${midY} ${toPoint.x} ${toPoint.y}`;
    }
    
    const midX = fromPoint.x + dx * 0.5;
    const midY = fromPoint.y + dy * 0.5;
    return `Q ${midX} ${midY} ${toPoint.x} ${toPoint.y}`;
  };

  return (
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      d={`M ${fromPoint.x} ${fromPoint.y} ${getControlPoints()}`}
      fill="none"
      stroke="white"
      strokeWidth="2"
    />
  )
} 