const colors = {
  primary: [255, 102, 0],
  "on-primary": [255, 255, 255],
  secondary: [0, 102, 102],
  "on-secondary": [255, 255, 255],
  text: [255, 255, 255],
  background: [0, 0, 0],
};

const computed_hex = (color: number[]) => "#" +
  color.map((c) => c.toString(16).padStart(2, "0")).join("");
const computed_rgb = (color: number[]) => color.join(", ");


const computed_colors: {
  [key: string]: string;
} = Object.fromEntries(
  Object.entries(colors).map(([key, value]) => ["color-" + key, computed_hex(value)]).concat(Object.entries(colors).map(([key, value]) => ["color-" + key + "-rgb", computed_rgb(value)]))
);

export default computed_colors;