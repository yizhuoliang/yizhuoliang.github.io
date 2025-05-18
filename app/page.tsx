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
                      href="mailto:yizhuoli@usc.edu"
                    >
                      yizhuoli@usc.edu
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
                  Hi, I'm an incoming PhD at <StyledLink href="https://nsl.usc.edu/" variant="underline">USC</StyledLink>, advised by Professor <StyledLink href="https://seojinpark.net/" variant="underline">Seo Jin Park</StyledLink>. I have a broad interest of distributed and operating systems.
                </p>
              </div>
            </Card>

            {/* Education Section */}
            <ExpandableSection 
              title="Education" 
              defaultExpanded={false}
              summary={
                <div className="space-y-1">
                  <p className="font-semibold">University of Southern California</p>
                  <p>Ph.D. in Computer Science</p>
                  <p className="text-xs mt-1">September 2025 - Present</p>
                  <p className="font-semibold mt-3">New York University</p>
                  <p>B.A. in Computer Science with honors, Minor in Mathematics</p>
                  <p className="text-xs mt-1">January 2021 - May 2024</p>
                </div>
              }
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold">University of Southern California</p>
                  <p className="font-semibold text-xs">Ph.D. in Computer Science</p>
                  <p className="text-xs mt-1">September 2025 - Present</p>
                </div>

                <div className="space-y-2">
                  <p className="font-semibold">New York University</p>
                  <p className="font-semibold text-xs">B.A. in Computer Science with honors, Minor in Mathematics</p>
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

            {/* Experience */}
            <ExpandableSection 
              title="Experience"
              defaultExpanded={false}
              summary={
                <div className="space-y-1">
                  <p className="font-semibold">USC Networked Systems Lab</p>
                  <p>Full-time Research Intern</p>
                  <p className="text-xs mt-1">July 2024 - May 2025</p>
                  <p className="font-semibold mt-3">NYU Secure Systems Lab</p>
                  <p>Undergraduate Researcher</p>
                  <p className="text-xs mt-1">June 2023 - June 2024</p>
                </div>
              }
            >
              <div className="space-y-8">
                {/* USC Research */}
                <div>
                  <h3 className="text-lg font-semibold">Full-time Research Intern at USC Networked Systems Lab</h3>
                  <p className="text-sm text-zinc-600">
                    July 2024 - May 2025
                  </p>
                  <ul className="mt-3 space-y-3 pl-5 text-sm">
                    <ProjectItem>High-resolution, low-overhead application profiling and resource demand heterogeneity.</ProjectItem>
                    <ProjectItem>Preliminary research on massive-parallel, burst-compatible cloud infrastructure.</ProjectItem>
                  </ul>
                </div>

                {/* NYU SSL Research */}
                <div>
                  <h3 className="text-lg font-semibold">Undergraduate Researcher at NYU Secure Systems Lab</h3>
                  <p className="text-sm text-zinc-600">
                    June 2023 - June 2024
                  </p>
                  <ul className="mt-3 space-y-3 pl-5 text-sm">
                    <ProjectItem>Efficient and secure software fault isolation for the cloud. Contributions made IPC benchmarks 75-200% faster than native Linux.</ProjectItem>
                    <ProjectItem>Adoption of WASM runtimes and porting glibc to WASM.</ProjectItem>
                  </ul>
                </div>
              </div>
            </ExpandableSection>

            {/* Publications Section */}
            <ExpandableSection 
              title="Publications"
              defaultExpanded={false}
              summary={
                <div className="space-y-1">
                  <p>Granular Resource Demand Heterogeneity (HotOS '25)</p>
                  <p className="text-xs mt-1"><strong>Yizhuo Liang</strong>, Ramesh Govindan, Seo Jin Park</p>
                </div>
              }
            >
              <div className="space-y-4">
                <div>
                  <ul className="mt-3 space-y-3 pl-5 text-xs">
                    <ProjectItem>
                      <span className="font-medium">Granular Resource Demand Heterogeneity</span> <br />
                      <strong>Yizhuo Liang</strong>, Ramesh Govindan, Seo Jin Park<br />
                      The 20th Workshop on Hot Topics in Operating Systems (HotOS '25), May 2025
                    </ProjectItem>
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

