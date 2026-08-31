import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { GoogleGenAI } from "@google/genai"

dotenv.config()

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
})

app.get("/", (req, res) => {
  res.send("Servidor de IA con Gemini funcionando")
})

app.post("/api/recomendacion", async (req, res) => {
    console.log("✅ PETICIÓN RECIBIDA POR EL SERVIDOR GEMINI")
  try {
    const {
      porcentaje,
      nivel,
      fortalezas,
      reforzar,
      temaPrioritario,
    } = req.body

    const prompt = `
Eres un tutor educativo de Matemática para estudiantes escolares.

Datos del estudiante:
- Resultado del diagnóstico: ${porcentaje}%
- Nivel estimado: ${nivel}
- Fortalezas: ${fortalezas?.join(", ") || "Ninguna identificada"}
- Temas por reforzar: ${reforzar?.join(", ") || "Ninguno"}
- Tema prioritario: ${temaPrioritario || "No identificado"}

Genera una recomendación breve, clara y motivadora en español.

Debe:
1. Reconocer una fortaleza del estudiante.
2. Explicar qué debería reforzar.
3. Indicar por qué conviene empezar por ${temaPrioritario || "el tema prioritario"}.
4. Recomendar un siguiente paso concreto.
5. Tener máximo 120 palabras.

No inventes información que no esté en los datos.
`

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    })

    res.json({
      recomendacion: response.text,
    })
  } catch (error) {
    console.error("ERROR GEMINI:", error)

    res.status(500).json({
      error: "No se pudo generar la recomendación.",
    })
  }
})
app.post("/api/leccion", async (req, res) => {
  try {
    const {
      tema,
      nivel,
      fortalezas,
      reforzar,
    } = req.body

    const prompt = `
Eres un tutor de Matemática para estudiantes escolares.

Crea una lección personalizada y breve.

Datos del estudiante:
- Tema actual: ${tema}
- Nivel estimado: ${nivel}
- Fortalezas: ${fortalezas?.join(", ") || "No identificadas"}
- Temas por reforzar: ${reforzar?.join(", ") || "No identificados"}

La lección debe:
1. Explicar ${tema} con lenguaje sencillo.
2. Incluir un ejemplo resuelto paso a paso.
3. Mencionar un error común que el estudiante debería evitar.
4. Terminar con un consejo breve.
5. Tener máximo 180 palabras.

No hagas preguntas al estudiante.
`

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    })

    res.json({
      leccion: response.text,
    })
  } catch (error) {
    console.error("ERROR LECCIÓN GEMINI:", error)

    res.status(500).json({
      error: "No se pudo generar la lección personalizada.",
    })
  }
  })
app.listen(port, () => {
  console.log(`Servidor IA con Gemini activo en http://localhost:${port}`)
})