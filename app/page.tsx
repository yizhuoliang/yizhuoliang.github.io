import Image from 'next/image'
import { Card } from "@/components/ui/card"
import { 
  ExpandableSection, 
  StyledLink, 
  ProfilePhoto, 
  ContactItem,
  EmailIcon,
  GithubIcon, 
  Footer,
  SkillTag,
  ProjectItem
} from "@/components/ui/shared-components"

export default function Home() {
  return (
    <main className="min-h-screen p-4 pb-2 md:p-8 md:pb-4 bg-zinc-100 dark:bg-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-6xl">
        <div className="flex flex-col md:flex-row md:gap-16">
          {/* Left column: Namecard and Photo */}
          <div className="md:w-[30%] md:sticky md:top-8 md:self-start flex flex-col justify-between md:min-h-[calc(100vh-6rem)]">
            <div className="flex flex-col gap-8 mb-8">
              {/* Namecard */}
              <Card className="overflow-hidden bg-gradient-to-r from-zinc-800 to-zinc-900 shadow-lg border-none">
                <div className="p-8 text-white">
                  <h1 className="mb-2 text-3xl font-bold">Yizhuo Liang (Coulson)</h1>
                  <p className="text-zinc-300">CS Ph.D. Student @USC</p>
                </div>
              </Card>
              
              {/* Photo */}
              <ProfilePhoto
                src="/pics/coulson-faker.jpg"
                alt="Yizhuo Liang"
                priority
              />
              
              {/* Contact Card */}
              <Card className="bg-white border border-zinc-100 dark:bg-white dark:border-zinc-100">
                <div className="p-5">
                  <div className="space-y-1.5">
                    <ContactItem 
                      icon={<EmailIcon />} 
                      href="mailto:cl_488@usc.edu"
                    >
                      cl_488@usc.edu
                    </ContactItem>
                    
                    <ContactItem 
                      icon={<GithubIcon />} 
                      href="https://github.com/yizhuoliang"
                    >
                      github.com/yizhuoliang
                    </ContactItem>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Footer with copyright - desktop only */}
            <Footer className="hidden md:block mb-2" />
          </div>

          {/* Right column: Bio and Expandable sections */}
          <div className="mt-0 md:mt-0 md:w-[70%]">
            {/* Bio Section */}
            <Card className="mb-8 bg-white border border-zinc-100 dark:bg-white dark:border-zinc-100">
              <div className="p-6">
                <p className="text-sm text-zinc-700 leading-relaxed dark:text-zinc-700">
                  Hi, I'm an incoming PhD at <StyledLink href="https://nsl.usc.edu/" variant="underline">University of Southern California</StyledLink>, advised by Professor <StyledLink href="https://seojinpark.net/" variant="underline">Seo Jin Park</StyledLink>. I have a broad interest of distributed and operating systems.
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
                  <ul className="mt-3 space-y-3 pl-5 text-sm">
                    <ProjectItem>Built a tool for monitoring application performance and profiling resource usage at microsecond scale.</ProjectItem>
                    <ProjectItem>Achieved less than 10% runtime overhead while identifying lock contention, interference, and hardware resource bottlenecks.</ProjectItem>
                    <ProjectItem>Investigating memory bandwidth contention and resource demand heterogeneity.</ProjectItem>
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
                  <ul className="mt-3 space-y-3 pl-5 text-sm">
                    <ProjectItem>Built a Software Fault Isolation system for process-level sandboxing.</ProjectItem>
                    <ProjectItem>Implemented a library OS with fast inter-process communications.</ProjectItem>
                    <ProjectItem>Made benchmarks 75-200% faster than native Linux.</ProjectItem>
                    <ProjectItem>Led transition to WASM runtimes and ported glibc to WASM.</ProjectItem>
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
                    <SkillTag key={skill}>{skill}</SkillTag>
                  ))}
                </div>
              }
            >
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold">Programming Languages</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Go", "C", "Rust", "Python", "Java", "Coq"].map((skill) => (
                      <SkillTag key={skill}>{skill}</SkillTag>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Software and Frameworks</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Docker",
                      "Kubernetes",
                      "Linux",
                      "gRPC",
                      "Hadoop",
                      "React",
                      "iris-coq",
                    ].map((skill) => (
                      <SkillTag key={skill} variant="secondary">{skill}</SkillTag>
                    ))}
                  </div>
                </div>
              </div>
            </ExpandableSection>
          </div>
        </div>
        
        {/* Mobile-only footer */}
        <Footer className="block md:hidden mt-8 mb-2" />
      </div>
    </main>
  )
}

