import Image from 'next/image'
import { Card } from "@/components/ui/card"
import { ExpandableSection } from "@/components/expandable-section"

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-6xl">
        <div className="flex flex-col md:flex-row md:gap-12">
          {/* Left column: Namecard and Photo */}
          <div className="md:w-[30%] md:sticky md:top-8 md:self-start">
            <div className="mb-8 flex flex-col gap-4">
              {/* Namecard */}
              <Card className="flex-grow overflow-hidden bg-gradient-to-r from-zinc-800 to-zinc-900">
                <div className="p-8 text-white">
                  <h1 className="mb-2 text-3xl font-bold">Yizhuo Liang (Coulson)</h1>
                  <p className="text-zinc-300">Computer Science Researcher</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-zinc-400">
                    <a href="mailto:cl_488@usc.edu" className="hover:text-white">cl_488@usc.edu</a>
                    <a href="tel:+16463397401" className="hover:text-white">+1 (646) 339 7401</a>
                    <a href="https://github.com/yizhuoliang" className="hover:text-white">github.com/yizhuoliang</a>
                  </div>
                </div>
              </Card>
              {/* Photo */}
              <Card className="w-full h-48 md:h-auto md:aspect-square overflow-hidden">
                <Image
		  src="/pics/coulson-faker.jpg"
                  alt="Yizhuo Liang"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </Card>
            </div>
          </div>

          {/* Right column: Bio and Expandable sections */}
          <div className="md:w-[70%]">
            {/* Bio Section */}
            <Card className="mb-8 bg-white shadow-sm">
              <div className="p-4">
                <p className="text-sm text-zinc-700 leading-relaxed">
                  Hi, I'm an incoming PhD at University of Southern California, advised by Professor Seo Jin Park. I have a broad interest of distributed and operating systems.
                </p>
              </div>
            </Card>

            {/* Education Section */}
            <ExpandableSection 
              title="Education" 
              defaultExpanded={false}
              summary={
                <div className="space-y-1">
                  <p className="font-semibold">New York University</p>
                  <p>B.A. in Computer Science with honors, Minor in Mathematics</p>
                  <p className="text-xs mt-1">January 2021 - May 2024</p>
                </div>
              }
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold">New York University</p>
                  <p>B.A. in Computer Science with honors, Minor in Mathematics</p>
                  <p className="text-xs mt-1">January 2021 - May 2024</p>
                  <p>GPA: 3.866/4.0</p>
                  <p className="text-sm">
                    <strong>Related CS Courses (A-Grades):</strong> Operating Systems, Database Systems, 
                    Algorithms, Computation Theory, Formal Verification
                  </p>
                  <p className="text-sm">
                    <strong>Math Courses:</strong> Honors series in Vector Calculus, Analysis, and Abstract Algebra
                  </p>
                </div>
              </div>
            </ExpandableSection>

            {/* Research Projects Section */}
            <ExpandableSection 
              title="Research Projects"
              defaultExpanded={true}
              summary={
                <div className="space-y-1">
                  <p>• High-resolution Application Profiling</p>
                  <p>• Efficient Software Fault Isolation for the Cloud</p>
                </div>
              }
            >
              <div className="space-y-8">
                {/* USC Research */}
                <div>
                  <h3 className="text-lg font-semibold">High-resolution Application Profiling</h3>
                  <p className="text-sm text-zinc-600">
                    Full-time Research Intern, Networked Systems Lab, University of Southern California
                    <br />
                    July 2024 - Present
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm">
                    <li>Built a tool for monitoring application performance and profiling resource usage at microsecond scale.</li>
                    <li>Achieved less than 10% runtime overhead while identifying lock contention, interference, and hardware resource bottlenecks.</li>
                    <li>Investigating memory bandwidth contention and resource demand heterogeneity.</li>
                  </ul>
                </div>

                {/* NYU SSL Research */}
                <div>
                  <h3 className="text-lg font-semibold">Efficient Software Fault Isolation for the Cloud</h3>
                  <p className="text-sm text-zinc-600">
                    Research Assistant, Secure Systems Lab, NYU
                    <br />
                    June 2023 - June 2024
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm">
                    <li>Built a Software Fault Isolation system for process-level sandboxing.</li>
                    <li>Implemented a library OS with fast inter-process communications.</li>
                    <li>Made benchmarks 75-200% faster than native Linux.</li>
                    <li>Led transition to WASM runtimes and ported glibc to WASM.</li>
                  </ul>
                </div>
              </div>
            </ExpandableSection>

            {/* Skills Section */}
            <ExpandableSection 
              title="Skills"
              summary={
                <div className="flex flex-wrap gap-2">
                  {["Go", "C", "Rust", "Python", "Java", "Coq"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-zinc-100 px-2 py-1 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              }
            >
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Go", "C", "Rust", "Python", "Java", "Coq"].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Software and Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Docker",
                      "Kubernetes",
                      "Linux",
                      "gRPC",
                      "Hadoop",
                      "React",
                      "iris-coq",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ExpandableSection>
          </div>
        </div>
      </div>
    </main>
  )
}

