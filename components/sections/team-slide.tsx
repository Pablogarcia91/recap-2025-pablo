"use client";

import { TeamContribution } from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { Copy } from "lucide-react";
import { toast } from "sonner";

interface TeamSlideProps {
  team: TeamContribution;
}

export function TeamSlide({ team }: TeamSlideProps) {
  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    toast.success("Password copied to clipboard");
  };

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
          {team.projects.map((project, index) => {
            const hasActions = project.demoUrl || project.liveUrl || (project.demos && project.demos.length > 0);
            return (
              <div
                key={project.id}
                className={`py-4 ${index !== team.projects.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-serif text-base font-semibold">{project.title}</h4>
                  {project.badges && project.badges.map((badge) => (
                    <Badge key={badge} className="font-medium uppercase tracking-wider bg-accent/20 text-foreground">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                {hasActions && (
                  <div className="mt-2 flex items-center justify-between gap-4 flex-wrap">
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
                          className="inline-flex items-center px-3 py-1.5 text-xs font-medium tracking-wider bg-sky-200 text-sky-900! rounded-md transition-opacity hover:opacity-80 no-underline"
                        >
                          Check it live
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1.5 text-xs font-medium tracking-wider bg-foreground text-white! dark:text-black! rounded-md transition-opacity hover:opacity-80 no-underline"
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
                            className={`inline-flex items-center px-3 py-1.5 text-xs font-medium tracking-wider rounded-md transition-opacity hover:opacity-80 no-underline ${
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
