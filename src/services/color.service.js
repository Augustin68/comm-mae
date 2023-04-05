function uuidToColor(uuid) {
  // Remove hyphens from the UUID and take the first 12 characters.
  // Convert the resulting string to an integer value.
  const intValue = parseInt(uuid.replace(/-/g, "").substr(0, 12), 16);

  // Calculate the hue, saturation, and lightness values as fractions.
  const hue = (intValue % 360) / 360;
  const saturation = (30 + (intValue % 30)) / 100;
  const lightness = (60 + (intValue % 20)) / 100;

  // Calculate the chroma and x values based on hue, saturation, and lightness.
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const x = chroma * (1 - Math.abs((hue * 6) % 2 - 1));

  // Initialize variables for red, green, and blue color components.
  let r1, g1, b1;

  // Determine the red, green, and blue color components based on the hue value.
  if (hue * 6 < 1) {
    [r1, g1, b1] = [chroma, x, 0];
  } else if (hue * 6 < 2) {
    [r1, g1, b1] = [x, chroma, 0];
  } else if (hue * 6 < 3) {
    [r1, g1, b1] = [0, chroma, x];
  } else if (hue * 6 < 4) {
    [r1, g1, b1] = [0, x, chroma];
  } else if (hue * 6 < 5) {
    [r1, g1, b1] = [x, 0, chroma];
  } else {
    [r1, g1, b1] = [chroma, 0, x];
  }

  // Calculate the final red, green, and blue color components by adding the m value.
  const m = lightness - chroma / 2;
  const [r, g, b] = [r1 + m, g1 + m, b1 + m].map((val) => Math.round(val * 255));

  // Convert the final red, green, and blue color components to a hexadecimal color code.
  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}



  

const ColorService = {
  uuidToColor,
}

export default ColorService;