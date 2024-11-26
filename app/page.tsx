"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "it", name: "Italian" },
  { code: "pt", name: "Portuguese" },
  { code: "ru", name: "Russian" },
  { code: "zh", name: "Chinese" },
  { code: "ja", name: "Japanese" },
  { code: "ko", name: "Korean" },
]

export default function Translator() {
  const [fromLang, setFromLang] = useState("en")
  const [toLang, setToLang] = useState("es")
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    if (inputText) {
      translateText()
    } else {
      setOutputText("")
    }
  }, [inputText, fromLang, toLang])

  const translateText = () => {
    // Simulating translation by reversing the text
    // In a real app, you would call a translation API here
    try {
      setError("")
      const translated = inputText.split('').reverse().join('')
      setOutputText(translated)
    } catch (err) {
      setError("Translation failed. Please try again.")
      setOutputText("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-purple-600">
            MY TRANSLATOR
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="from" className="text-sm font-medium">
                From
              </Label>
              <Select value={fromLang} onValueChange={setFromLang}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="relative">
              <Input
                id="from"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text to translate"
                className="w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-padding"
                style={{
                  backgroundClip: 'padding-box, border-box',
                  backgroundOrigin: 'border-box',
                }}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="to" className="text-sm font-medium">
                To
              </Label>
              <Select value={toLang} onValueChange={setToLang}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="relative">
              <Input
                id="to"
                value={outputText}
                placeholder="Translation"
                className="w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 border-2 border-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-padding"
                style={{
                  backgroundClip: 'padding-box, border-box',
                  backgroundOrigin: 'border-box',
                }}
                readOnly
              />
            </div>
          </div>
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
  translateText();
}, []);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
try {
  // Your logic
} catch (err) {
  // Handle error
}


