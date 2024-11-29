import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Kartik Portfolio</h1>
      <p className="text-xl mb-8 text-center max-w-2xl text-gray-300">
        I'm a passionate developer specializing in web development and creating amazing user experiences.
      </p>
      <div className="flex space-x-4 mb-8">
        <Button asChild>
          <Link href="/experience">View Experience</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/projects">View Projects</Link>
        </Button>
      </div>
      <div className="flex space-x-4">
        <Button variant="outline" size="icon">
          <GithubIcon className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon">
          <LinkedinIcon className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon">
          <MailIcon className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

