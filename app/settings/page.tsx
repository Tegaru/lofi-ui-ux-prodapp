import { BottomNav } from "@/components/bottom-nav"
import { Card } from "@/components/ui/card"
import { ChevronRight, User, Bell, Palette, Calendar, Info, LogOut } from "lucide-react"

export default function SettingsPage() {
  const settingsItems = [
    { icon: User, label: "Edit Profil", desc: "Ubah nama dan foto profil" },
    { icon: Bell, label: "Notifikasi", desc: "Atur reminder dan notifikasi" },
    { icon: Palette, label: "Tema", desc: "Light / Dark mode" },
    { icon: Calendar, label: "Sinkronisasi Calendar", desc: "Google Calendar" },
    { icon: Info, label: "Tentang ProdApp", desc: "Versi 1.0.0" },
  ]

  return (
    <div className="min-h-screen pb-20">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="max-w-lg mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-foreground mb-2">⚙️ Settings</h1>
          <p className="text-sm text-muted-foreground">Kelola akun dan preferensi aplikasi</p>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6">
        {/* Profile Card */}
        <Card className="p-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-semibold">
              U
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">User Name</h3>
              <p className="text-sm text-muted-foreground">user@email.com</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium">
                  Level 12
                </span>
                <span className="text-xs text-muted-foreground">1,240 XP</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Settings List */}
        <div className="space-y-2 mb-6">
          {settingsItems.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.label} className="p-4 hover:bg-muted cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{item.label}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </Card>
            )
          })}
        </div>

        {/* Logout Button */}
        <Card className="p-4 hover:bg-destructive/10 cursor-pointer transition-colors border-destructive/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
              <LogOut className="w-5 h-5 text-destructive" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-destructive">Keluar</h4>
              <p className="text-xs text-muted-foreground">Logout dari akun kamu</p>
            </div>
          </div>
        </Card>
      </main>

      <BottomNav />
    </div>
  )
}
