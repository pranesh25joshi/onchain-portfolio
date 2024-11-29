import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b border-gray-800 py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-pink-500">YourName</Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/experience">Experience</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/projects">Projects</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}

