import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Senior Web Developer",
    company: "Tech Innovators Inc.",
    period: "2020 - Present",
    description: "Led development of multiple high-traffic web applications using React and Node.js."
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2017 - 2020",
    description: "Developed and maintained various web applications using JavaScript, Python, and SQL databases."
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    period: "2015 - 2017",
    description: "Assisted in the development of mobile-responsive websites and e-commerce platforms."
  }
]

export default function Experience() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">My Experience</h1>
      {experiences.map((exp, index) => (
        <Card key={index} className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-pink-500">{exp.title}</CardTitle>
            <CardDescription>{exp.company} | {exp.period}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">{exp.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

