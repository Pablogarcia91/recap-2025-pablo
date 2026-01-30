"use client";

import { TeamContribution } from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface TeamSlideProps {
  team: TeamContribution;
}

export function TeamSlide({ team }: TeamSlideProps) {
  return (
    <div className="flex h-full w-full items-center justify-center px-6 py-8">
      <div className="mx-auto max-w-3xl w-full">
        {/* Team header */}
        <div className="mb-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {team.label}
          </p>
          <h3 className="mt-1 font-serif text-2xl font-normal italic md:text-3xl">
            {team.teamName}
          </h3>
          {team.subtitle && (
            <p className="mt-1 text-sm text-muted-foreground italic">{team.subtitle}</p>
          )}
        </div>

        {/* Divider */}
        <div className="mb-4 h-px bg-border" />

        {/* Projects - compact view for presentation */}
        <div>
          {team.projects.map((project, index) => (
            <div
              key={project.id}
              className={`py-4 ${index !== team.projects.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="flex items-center gap-3">
                <h4 className="font-serif text-base font-semibold">{project.title}</h4>
                {project.badge && (
                  <Badge variant="outline" className="text-xs font-medium uppercase tracking-wider">
                    {project.badge}
                  </Badge>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    className="ml-auto inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-primary"
                  >
                    Demo
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
