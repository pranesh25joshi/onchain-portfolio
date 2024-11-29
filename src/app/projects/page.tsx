import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js and Stripe integration.",
    tech: ["Next.js", "React", "Node.js", "Stripe", "MongoDB"],
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    tech: ["React", "Firebase", "Material-UI"],
    link: "#"
  },
  {
    title: "Weather Forecast Dashboard",
    description: "A responsive weather dashboard that provides real-time forecasts and historical data.",
    tech: ["Vue.js", "Express", "OpenWeatherMap API"],
    link: "#"
  }
]

export default function Projects() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-pink-500">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <Button asChild variant="secondary">
                <Link href={project.link}>View Project</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

