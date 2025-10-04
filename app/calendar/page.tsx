import { BottomNav } from "@/components/bottom-nav"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CalendarPage() {
  const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"]
  const dates = Array.from({ length: 35 }, (_, i) => i + 1)

  return (
    <div className="min-h-screen pb-20">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="max-w-lg mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-foreground mb-2">📅 Calendar</h1>
          <p className="text-sm text-muted-foreground">Atur jadwal dan lihat tugas mendatang</p>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6">
        {/* Month Selector */}
        <div className="flex items-center justify-between mb-6">
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-semibold">Januari 2025</h2>
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Calendar Grid */}
        <Card className="p-4 mb-6">
          <div className="grid grid-cols-7 gap-2 mb-2">
            {days.map((day) => (
              <div key={day} className="text-center text-xs font-medium text-muted-foreground py-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {dates.map((date) => (
              <button
                key={date}
                className="aspect-square flex flex-col items-center justify-center rounded-lg hover:bg-muted transition-colors relative"
              >
                <span className={date === 15 ? "font-bold text-primary" : ""}>{date}</span>
                {date === 15 && (
                  <div className="flex gap-0.5 mt-1">
                    <div className="w-1 h-1 rounded-full bg-red-500" />
                    <div className="w-1 h-1 rounded-full bg-yellow-500" />
                  </div>
                )}
                {date === 20 && (
                  <div className="flex gap-0.5 mt-1">
                    <div className="w-1 h-1 rounded-full bg-green-500" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </Card>

        {/* Today's Tasks */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Tugas Hari Ini</h3>
          <div className="space-y-3">
            <Card className="p-4 border-l-4 border-l-red-500">
              <h4 className="font-medium mb-1">Selesaikan presentasi klien</h4>
              <p className="text-sm text-muted-foreground">10:00 AM - 11:30 AM</p>
            </Card>
            <Card className="p-4 border-l-4 border-l-yellow-500">
              <h4 className="font-medium mb-1">Review email tim</h4>
              <p className="text-sm text-muted-foreground">02:00 PM - 03:00 PM</p>
            </Card>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
