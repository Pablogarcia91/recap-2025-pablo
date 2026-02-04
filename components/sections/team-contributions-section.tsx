"use client";

import { useRef } from "react";
import { reviewContent } from "@/lib/content";
import { TeamContribution, Project } from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { motion, useInView, cubicBezier } from "framer-motion";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const smoothEasing = cubicBezier(0.22, 1, 0.36, 1);

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    toast.success("Password copied to clipboard");
  };

  const hasActions = project.demoUrl || project.liveUrl || (project.demos && project.demos.length > 0);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: smoothEasing,
      }}
    >
      <div className={`py-6 border-b border-border last:border-b-0 min-h-[140px] flex flex-col ${hasActions ? "group rounded-lg -mx-4 px-4 transition-all hover:bg-muted hover:border hover:border-border hover:shadow-sm" : ""}`}>
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="font-serif text-lg font-semibold">{project.title}</h4>
          {project.badges && project.badges.map((badge) => (
            <Badge key={badge} className="font-medium uppercase tracking-wider bg-accent/20 text-foreground">
              {badge}
            </Badge>
          ))}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-grow">
          {project.description}
        </p>
        {hasActions && (
          <div className="mt-4 flex items-center justify-between gap-4 flex-wrap">
            {project.demoPassword && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Password: <code className="bg-muted px-2 py-1 rounded font-mono">{project.demoPassword}</code></span>
                <button
                  onClick={() => copyToClipboard(project.demoPassword!)}
                  className="p-1 rounded hover:bg-muted transition-colors"
                  title="Copy password"
                >
                  <Copy className="h-3.5 w-3.5" />
                </button>
              </div>
            )}
            <div className="flex items-center gap-2 ml-auto flex-wrap">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-xs font-medium tracking-wider bg-sky-200 text-sky-900! rounded-md transition-opacity hover:opacity-80 no-underline"
                >
                  Check it live
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-xs font-medium tracking-wider bg-foreground text-white! dark:text-black! rounded-md transition-opacity hover:opacity-80 no-underline"
                >
                  View demo
                </a>
              )}
              {project.demos && project.demos.map((demo, i) => {
                const isDocumentation = demo.label.toLowerCase().includes('documentation');
                return (
                  <a
                    key={i}
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-4 py-2 text-xs font-medium tracking-wider rounded-md transition-opacity hover:opacity-80 no-underline ${
                      isDocumentation
                        ? 'bg-amber-200 text-amber-900!'
                        : 'bg-foreground text-white! dark:text-black!'
                    }`}
                  >
                    {demo.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

interface TeamBlockProps {
  team: TeamContribution;
  isAlternate: boolean;
}

function TeamBlock({ team, isAlternate }: TeamBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={`px-6 py-12 ${isAlternate ? "bg-muted/30" : "bg-background"}`}>
      <div ref={ref} className="mx-auto max-w-3xl">
        {/* Team header */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: smoothEasing }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {team.label}
          </p>
          <h3 className="mt-1 font-serif text-2xl font-normal italic md:text-3xl">
            {team.teamName}
          </h3>
          {team.subtitle && (
            <p className="mt-1 text-sm text-muted-foreground italic">{team.subtitle}</p>
          )}
        </motion.div>

        {/* Divider line */}
        <motion.div
          className="mb-6 h-px bg-border"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: smoothEasing }}
          style={{ originX: 0 }}
        />

        {/* Projects */}
        <div>
          {team.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeamContributionsSection() {
  const { teamContributions } = reviewContent;

  return (
    <>
      {teamContributions.map((team, index) => (
        <TeamBlock key={team.id} team={team} isAlternate={index % 2 === 1} />
      ))}
    </>
  );
}
