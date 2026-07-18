"use client"

import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/cn"

const BASE_PRICE = 4.99
const USER_PRICE = 1.49
const USER_CAP = 100
const NODE_PRICE = 9.99
const INSTANCE_PRICE = 2.49
const INSTANCE_CAP = 200

const formatUsd = (value: number) =>
  value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })

interface MeterInput {
  key: "users" | "nodes" | "instances"
  label: string
  unitPrice: number
  cap?: number
  max: number
}

const METERS: MeterInput[] = [
  { key: "users", label: "Active users", unitPrice: USER_PRICE, cap: USER_CAP, max: 100 },
  { key: "nodes", label: "Nodes", unitPrice: NODE_PRICE, max: 25 },
  {
    key: "instances",
    label: "Instances",
    unitPrice: INSTANCE_PRICE,
    cap: INSTANCE_CAP,
    max: 120,
  },
]

export function PaygCalculator({ checkoutHref }: { checkoutHref: string }) {
  const [counts, setCounts] = useState({ users: 10, nodes: 3, instances: 15 })

  const lines = METERS.map((meter) => {
    const count = counts[meter.key]
    const raw = count * meter.unitPrice
    const capped = meter.cap !== undefined && raw > meter.cap
    return { ...meter, count, cost: capped ? meter.cap! : raw, capped }
  })
  const total = BASE_PRICE + lines.reduce((sum, line) => sum + line.cost, 0)

  return (
    <div className="border-fd-border bg-fd-card/50 mt-6 rounded-3xl border p-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="font-semibold">Estimate your Pay as you go bill</h3>
          <p className="text-fd-muted-foreground mt-2 text-sm">
            Pay as you go is billed on usage: {formatUsd(BASE_PRICE)}/month plus
            your <em>peak</em> counts for the month, a quiet install costs
            almost nothing.
          </p>

          <div className="mt-7 flex flex-col gap-6">
            {METERS.map((meter) => (
              <label key={meter.key} className="block">
                <span className="flex items-baseline justify-between text-sm">
                  <span className="font-medium">{meter.label}</span>
                  <span className="text-fd-muted-foreground tabular-nums">
                    {counts[meter.key]}
                  </span>
                </span>
                <input
                  type="range"
                  min={0}
                  max={meter.max}
                  value={counts[meter.key]}
                  onChange={(e) =>
                    setCounts((prev) => ({
                      ...prev,
                      [meter.key]: Number(e.target.value),
                    }))
                  }
                  className="mt-2 w-full accent-lime-500"
                  aria-label={meter.label}
                />
                <span className="text-fd-muted-foreground mt-1 block text-xs">
                  {formatUsd(meter.unitPrice)} each
                  {meter.cap !== undefined
                    ? ` · capped at ${formatUsd(meter.cap)}/mo`
                    : " · no cap"}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="border-fd-border divide-fd-border bg-fd-background flex-1 divide-y rounded-2xl border px-5">
            <div className="text-fd-muted-foreground flex items-center justify-between py-3 text-sm">
              <span>Base subscription</span>
              <span className="tabular-nums">{formatUsd(BASE_PRICE)}</span>
            </div>
            {lines.map((line) => (
              <div
                key={line.key}
                className="text-fd-muted-foreground flex items-center justify-between py-3 text-sm"
              >
                <span>
                  {line.count} {line.label.toLowerCase()}
                  {line.capped ? (
                    <span className="ml-2 rounded-full bg-lime-200/80 px-2 py-0.5 text-xs font-medium text-lime-950 dark:bg-lime-400/15 dark:text-lime-300">
                      cap reached
                    </span>
                  ) : null}
                </span>
                <span className="tabular-nums">{formatUsd(line.cost)}</span>
              </div>
            ))}
            <div className="flex items-center justify-between py-4">
              <span className="font-semibold">Estimated monthly total</span>
              <span className="text-2xl font-bold tracking-tight tabular-nums">
                {formatUsd(total)}
              </span>
            </div>
          </div>

          <Link
            href={checkoutHref}
            className={cn(
              "mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500",
              "border-fd-border bg-fd-background hover:bg-fd-accent border"
            )}
          >
            Get Pay as you go
          </Link>
        </div>
      </div>
    </div>
  )
}
