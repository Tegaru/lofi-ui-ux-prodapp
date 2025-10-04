import { BottomNav } from "@/components/bottom-nav"
import { Card } from "@/components/ui/card"
import { TrendingUp, Target, Clock, Award } from "lucide-react"

export default function StatsPage() {
  return (
    <div className="min-h-screen pb-20">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="max-w-lg mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-foreground mb-2">📊 Productivity Stats</h1>
          <p className="text-sm text-muted-foreground">Lihat progress dan insight produktivitas kamu</p>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6">
        {/* AI Insight */}
        <Card className="p-4 mb-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">AI Insight</h3>
              <p className="text-sm text-muted-foreground">
                Waktu paling produktif kamu adalah pagi hari (08:00 - 11:00). Produktivitas meningkat 23% minggu ini!
              </p>
            </div>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">Tugas Selesai</span>
            </div>
            <p className="text-2xl font-bold text-foreground">24</p>
            <p className="text-xs text-green-600">+12% dari minggu lalu</p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-secondary" />
              <span className="text-xs text-muted-foreground">Fokus Time</span>
            </div>
            <p className="text-2xl font-bold text-foreground">8.5h</p>
            <p className="text-xs text-green-600">+2.3h dari minggu lalu</p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">On-Time Rate</span>
            </div>
            <p className="text-2xl font-bold text-foreground">87%</p>
            <p className="text-xs text-green-600">+5% dari minggu lalu</p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-yellow-500" />
              <span className="text-xs text-muted-foreground">Total XP</span>
            </div>
            <p className="text-2xl font-bold text-foreground">1,240</p>
            <p className="text-xs text-muted-foreground">Level 12</p>
          </Card>
        </div>

        {/* Weekly Chart */}
        <Card className="p-4 mb-6">
          <h3 className="font-semibold mb-4">Tugas Selesai Minggu Ini</h3>
          <div className="flex items-end justify-between gap-2 h-32">
            {[
              { day: "Sen", value: 4 },
              { day: "Sel", value: 6 },
              { day: "Rab", value: 3 },
              { day: "Kam", value: 5 },
              { day: "Jum", value: 4 },
              { day: "Sab", value: 2 },
              { day: "Min", value: 0 },
            ].map((item) => (
              <div key={item.day} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-primary/20 rounded-t-lg relative"
                  style={{ height: `${(item.value / 6) * 100}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary to-secondary rounded-t-lg" />
                </div>
                <span className="text-xs text-muted-foreground">{item.day}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Badges */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Badge Terbaru 🏆</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { name: "Early Bird", emoji: "🌅", desc: "5 hari berturut-turut mulai pagi" },
              { name: "Focus Master", emoji: "🎯", desc: "Total 50 jam fokus" },
              { name: "Streak King", emoji: "🔥", desc: "7 hari streak" },
            ].map((badge) => (
              <Card key={badge.name} className="p-3 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-1">{badge.emoji}</div>
                <p className="text-xs font-medium">{badge.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
