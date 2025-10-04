"use client"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw } from "lucide-react"

export default function FocusPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [time, setTime] = useState(25 * 60) // 25 minutes in seconds

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen pb-20">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="max-w-lg mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-foreground mb-2">🎧 Focus Mode</h1>
          <p className="text-sm text-muted-foreground">Fokus tanpa gangguan dengan ambient sound</p>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6">
        {/* Timer Card */}
        <Card className="p-8 mb-6 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="text-center">
            <div className="text-7xl font-bold text-foreground mb-8 font-mono">{formatTime(time)}</div>

            <div className="flex items-center justify-center gap-4 mb-6">
              <Button size="lg" className="w-16 h-16 rounded-full" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-16 h-16 rounded-full bg-transparent"
                onClick={() => setTime(25 * 60)}
              >
                <RotateCcw className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex gap-2 justify-center">
              <Button variant={time === 25 * 60 ? "default" : "outline"} size="sm" onClick={() => setTime(25 * 60)}>
                25 min
              </Button>
              <Button variant={time === 15 * 60 ? "default" : "outline"} size="sm" onClick={() => setTime(15 * 60)}>
                15 min
              </Button>
              <Button variant={time === 5 * 60 ? "default" : "outline"} size="sm" onClick={() => setTime(5 * 60)}>
                5 min
              </Button>
            </div>
          </div>
        </Card>

        {/* AI Insight */}
        <Card className="p-4 mb-6 bg-secondary/10 border-secondary/20">
          <div className="flex items-start gap-3">
            <span className="text-2xl">✨</span>
            <div>
              <h3 className="font-semibold mb-1">Insight</h3>
              <p className="text-sm text-muted-foreground">Kamu fokus 15 menit lebih lama dari kemarin! Pertahankan!</p>
            </div>
          </div>
        </Card>

        {/* Ambient Sounds */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Ambient Sound</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Lofi Beats", emoji: "🎵" },
              { name: "Rain Sound", emoji: "🌧️" },
              { name: "Ocean Waves", emoji: "🌊" },
              { name: "Forest", emoji: "🌲" },
            ].map((sound) => (
              <Card key={sound.name} className="p-4 hover:bg-muted cursor-pointer transition-colors">
                <div className="text-center">
                  <div className="text-3xl mb-2">{sound.emoji}</div>
                  <p className="text-sm font-medium">{sound.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
