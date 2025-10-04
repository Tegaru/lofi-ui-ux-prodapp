import { BottomNav } from "@/components/bottom-nav"
import { Card } from "@/components/ui/card"
import { Plus, Search, CheckCircle2, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="max-w-lg mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Hai, User! 👋</h1>
              <p className="text-sm text-muted-foreground">Siap produktif hari ini?</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
              U
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari tugas..."
              className="w-full pl-10 pr-4 py-3 bg-muted/50 border border-border rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-lg mx-auto px-4 py-6">
        {/* AI Insight Card */}
        <Card className="p-4 mb-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <span className="text-xl">🧠</span>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">AI Insight</h3>
              <p className="text-sm text-muted-foreground">
                Waktu paling produktif kamu adalah pagi hari. Selesaikan tugas penting sekarang!
              </p>
            </div>
          </div>
        </Card>

        {/* Task List */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground mb-3">Tugas Hari Ini</h2>

          {/* Urgent Task */}
          <Card className="p-4 border-l-4 border-l-red-500 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <button className="mt-1 w-5 h-5 rounded-full border-2 border-red-500 flex-shrink-0 hover:bg-red-500/10 transition-colors" />
              <div className="flex-1">
                <h3 className="font-medium text-foreground mb-1">Selesaikan presentasi klien</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>10:00 AM</span>
                  <span className="px-2 py-0.5 bg-red-500/10 text-red-600 rounded-full font-medium">Urgent</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Normal Task */}
          <Card className="p-4 border-l-4 border-l-yellow-500 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <button className="mt-1 w-5 h-5 rounded-full border-2 border-yellow-500 flex-shrink-0 hover:bg-yellow-500/10 transition-colors" />
              <div className="flex-1">
                <h3 className="font-medium text-foreground mb-1">Review email tim</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>02:00 PM</span>
                  <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-600 rounded-full font-medium">Normal</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Low Priority Task */}
          <Card className="p-4 border-l-4 border-l-green-500 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <button className="mt-1 w-5 h-5 rounded-full border-2 border-green-500 flex-shrink-0 hover:bg-green-500/10 transition-colors" />
              <div className="flex-1">
                <h3 className="font-medium text-foreground mb-1">Baca artikel produktivitas</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>05:00 PM</span>
                  <span className="px-2 py-0.5 bg-green-500/10 text-green-600 rounded-full font-medium">Low</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Completed Task */}
          <Card className="p-4 border-l-4 border-l-muted opacity-60 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 w-5 h-5 text-primary flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-medium text-foreground line-through mb-1">Meeting dengan tim marketing</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>09:00 AM</span>
                  <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium">Selesai</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>

      {/* Floating Add Button */}
      <button className="fixed bottom-20 right-4 w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-40">
        <Plus className="w-6 h-6 text-white" />
      </button>

      <BottomNav />
    </div>
  )
}
