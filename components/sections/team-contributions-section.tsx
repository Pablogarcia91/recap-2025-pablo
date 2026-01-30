"use client";

import { useRef } from "react";
import { reviewContent } from "@/lib/content";
import { TeamContribution, Project } from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { motion, useInView, cubicBezier } from "framer-motion";

const smoothEasing = cubicBezier(0.22, 1, 0.36, 1);

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
      <div className={`py-6 border-b border-border last:border-b-0 ${project.demoUrl ? "group rounded-lg -mx-4 px-4 transition-all hover:bg-muted hover:border hover:border-border hover:shadow-sm" : ""}`}>
        <div className="flex items-center gap-3">
          <h4 className="font-serif text-lg font-semibold">{project.title}</h4>
          {project.badge && (
            <Badge className="font-medium uppercase tracking-wider bg-accent/20 text-foreground">
              {project.badge}
            </Badge>
          )}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        {project.demoUrl && (
          <div className="mt-4 flex justify-end">
            <a
              href={project.demoUrl}
              className="inline-flex items-center px-4 py-2 text-xs font-medium tracking-wider bg-foreground text-white! dark:text-black! rounded-md transition-opacity hover:opacity-80 no-underline"
            >
              View demo
            </a>
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
