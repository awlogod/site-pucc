import Feed from '@/components/Feed'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex gap-6">
        <div className="flex-1">
          <Feed />
        </div>
        <div className="w-80 hidden lg:block">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

