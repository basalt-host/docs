import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/cn"

/**
 * Placeholder frame for screenshots / gifs / videos that will be added later.
 * Swap the inner content for a <ThemedMedia light="..." dark="..." /> (see
 * components/themed-media.tsx) while keeping the outer frame for consistent
 * presentation. Every asset needs a light and a dark variant so it follows
 * the visitor's theme.
 */
export function MediaPlaceholder({
  label,
  hint,
  className,
}: {
  /** What media belongs here, e.g. "Live console screencast" */
  label: string
  /** Optional extra guidance, e.g. suggested aspect ratio or content */
  hint?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "border-fd-border bg-fd-card text-fd-muted-foreground flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed",
        className
      )}
    >
      <ImageIcon className="size-6" aria-hidden />
      <p className="text-sm font-medium">{label}</p>
      {hint ? <p className="text-xs opacity-80">{hint}</p> : null}
      <p className="text-[11px] tracking-wide uppercase opacity-60">
        light + dark variants
      </p>
    </div>
  )
}

/** Browser-chrome frame used to present product media like a screenshot. */
export function MediaFrame({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "border-fd-border bg-fd-card overflow-hidden rounded-xl border shadow-lg shadow-black/5",
        className
      )}
    >
      <div className="border-fd-border bg-fd-muted/50 flex items-center gap-1.5 border-b px-4 py-2.5">
        <span className="bg-fd-border size-2.5 rounded-full" />
        <span className="bg-fd-border size-2.5 rounded-full" />
        <span className="bg-fd-border size-2.5 rounded-full" />
      </div>
      {children}
    </div>
  )
}
