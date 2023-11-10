// GradientText.js
import React from "react";
import { Svg, Text, Defs, LinearGradient, Stop } from "react-native-svg";

const GradientText = ({ children, style }) => {
  // Extract fontSize and lineHeight from the style prop if available
  const fontSize = style?.fontSize || 20;
  const lineHeight = fontSize * 1.4; // You can adjust this multiplier based on your design needs

  return (
    <Svg height={lineHeight + fontSize / 2} width="100%">
      <Defs>
        <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0" stopColor="#BEF3F5" />
          <Stop offset="1" stopColor="#33BBCF" />
        </LinearGradient>
      </Defs>
      <Text
        fill="url(#gradient)"
        fontSize={fontSize} // Applied from style prop
        fontWeight="bold"
        x="50%"
        y={lineHeight} // Adjust based on fontSize for vertical centering
        textAnchor="middle"
        fontFamily={style?.fontFamily || "Poppins-Bold"} // Applied from style prop
      >
        {children}
      </Text>
    </Svg>
  );
};

export default GradientText;
