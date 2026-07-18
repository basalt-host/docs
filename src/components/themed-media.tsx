import Image from "next/image"
import { cn } from "@/lib/cn"

const videoExtensions = /\.(mp4|webm|mov)$/i

export interface ThemedMediaProps {
  /** Asset shown in light mode, e.g. "/media/console-light.png" */
  light: string
  /** Asset shown in dark mode, e.g. "/media/console-dark.png" */
  dark: string
  /** Description for screen readers. Required for images/gifs, ignored for videos. */
  alt: string
  /** Intrinsic width in px. Required for images/gifs so Next.js can reserve space. */
  width?: number
  /** Intrinsic height in px. Required for images/gifs so Next.js can reserve space. */
  height?: number
  /** Skip Next.js image optimization. Set for gifs so animation is preserved. */
  unoptimized?: boolean
  className?: string
}

/**
 * Renders the light or dark variant of an asset to match the visitor's theme.
 *
 * Both variants are always in the DOM; CSS decides which one is visible, so
 * switching themes swaps the media instantly with no flash or re-fetch. The
 * media type is inferred from the file extension: .mp4/.webm/.mov render as a
 * looping muted video, everything else (.png/.jpg/.webp/.gif) as an image.
 *
 * Usage:
 *   <ThemedMedia
 *     light="/media/console-light.gif"
 *     dark="/media/console-dark.gif"
 *     alt="Live console streaming server logs"
 *     width={1600} height={900} unoptimized
 *   />
 */
export function ThemedMedia({
  light,
  dark,
  alt,
  width = 1600,
  height = 900,
  unoptimized,
  className,
}: ThemedMediaProps) {
  if (videoExtensions.test(light)) {
    return (
      <>
        <video
          src={light}
          autoPlay
          loop
          muted
          playsInline
          aria-label={alt}
          className={cn("w-full dark:hidden", className)}
        />
        <video
          src={dark}
          autoPlay
          loop
          muted
          playsInline
          aria-label={alt}
          className={cn("hidden w-full dark:block", className)}
        />
      </>
    )
  }

  const isGif = /\.gif$/i.test(light)

  return (
    <>
      <Image
        src={light}
        alt={alt}
        width={width}
        height={height}
        unoptimized={unoptimized ?? isGif}
        className={cn("w-full dark:hidden", className)}
      />
      <Image
        src={dark}
        alt={alt}
        width={width}
        height={height}
        unoptimized={unoptimized ?? isGif}
        className={cn("hidden w-full dark:block", className)}
      />
    </>
  )
}
