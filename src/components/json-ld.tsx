/** Renders a schema.org structured-data block. Data must be a plain serializable object. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify of our own literal objects; nothing user-provided ends up here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
