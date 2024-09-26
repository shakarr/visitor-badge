import Counter from "../models/counter.js";

const generateBadgeSvg = (label, message) => {
  const labelWidth = 85; // Ancho fijo para el texto de "Profile views"
  const messageWidth = 40; // Ancho fijo para el número
  const totalWidth = labelWidth + messageWidth;
  const borderRadius = 3; // Radio para los bordes redondeados

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="20">
      <!-- Background for label with rounded left corners -->
      <rect x="0" y="0" width="${labelWidth}" height="20" fill="#4c4c4c" rx="${borderRadius}" ry="${borderRadius}" />
      <!-- Adjust right side of the label to be square by overlaying a square rect -->
      <rect x="${
        labelWidth - borderRadius
      }" y="0" width="${borderRadius}" height="20" fill="#4c4c4c" />
      
      <!-- Background for message with rounded right corners -->
      <rect x="${labelWidth}" width="${messageWidth}" height="20" fill="#007ec6" rx="${borderRadius}" ry="${borderRadius}"/>
      <!-- Adjust left side of the message to be square by overlaying a square rect -->
      <rect x="${labelWidth}" y="0" width="${borderRadius}" height="20" fill="#007ec6" />
      
      <!-- Label text -->
      <text x="${
        labelWidth / 2
      }" y="14" fill="white" font-family="Verdana" font-size="11" text-anchor="middle">${label}</text>
      <!-- Message text -->
      <text x="${
        labelWidth + messageWidth / 2
      }" y="14" fill="white" font-family="Verdana" font-size="11" text-anchor="middle">${message}</text>
    </svg>
  `;
};

// Crear, incrementar y devolver el SVG en una sola función
export const createOrIncrementCounter = async (req, res) => {
  const { namespace, key } = req.params;

  try {
    // Buscar el contador y si no existe, crearlo con valor inicial 0
    const counter = await Counter.findOneAndUpdate(
      { namespace, key },
      { $inc: { value: 1 } }, // Incrementar el valor actual en 1
      { new: true, upsert: true } // Crear si no existe (upsert)
    );

    // Generar el badge SVG con el valor actualizado del contador
    const badgeSvg = generateBadgeSvg(
      `visitors`,
      `${counter.value}`
    );

    // Devolver el badge SVG
    res.setHeader('Cache-Control', 'no-cache,max-age=0,no-store,s-maxage=0');
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(badgeSvg);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Resetear el contador
export const resetCounter = async (req, res) => {
  const { namespace, key } = req.params;
  const { value } = req.body;

  try {
    const counter = await Counter.findOneAndUpdate(
      { namespace, key },
      { value },
      { new: true }
    );
    if (counter) {
      res.json({ namespace, key, value: counter.value });
    } else {
      res.status(404).json({ message: "Counter not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
