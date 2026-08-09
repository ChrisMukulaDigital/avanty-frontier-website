import { useEffect, useRef, useState } from 'react'
import { BatteryFull, Check, ChevronLeft, Signal, Wifi } from 'lucide-react'

const DESIGN_WIDTH = 360

/**
 * Renders children at a fixed design width, then scales the whole thing
 * down (or up) via CSS transform to fit whatever width the parent gives it.
 * Keeps the phone-frame proportions correct at every breakpoint.
 */
function ScaledMockup({ children }: { children: React.ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return

    const recalc = () => {
      const outerWidth = outer.offsetWidth
      const nextScale = outerWidth / DESIGN_WIDTH
      setScale(nextScale)
      setHeight(inner.offsetHeight * nextScale)
    }

    recalc()
    const observer = new ResizeObserver(recalc)
    observer.observe(outer)
    observer.observe(inner)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={outerRef} style={{ height }}>
      <div
        ref={innerRef}
        style={{ width: DESIGN_WIDTH, transform: `scale(${scale})`, transformOrigin: 'top left' }}
      >
        {children}
      </div>
    </div>
  )
}

interface BubbleProps {
  from: 'buyer' | 'avanty'
  children: string
}

function Bubble({ from, children }: BubbleProps) {
  if (from === 'buyer') {
    return (
      <div className="bg-white/10 text-white/90 text-[12px] rounded-2xl rounded-bl-sm px-3 py-2 max-w-[75%]">
        {children}
      </div>
    )
  }
  return (
    <div className="bg-[#e8b923]/90 text-ink text-[12px] rounded-2xl rounded-br-sm px-3 py-2 max-w-[75%] ml-auto">
      {children}
    </div>
  )
}

export default function WhatsAppMockup() {
  return (
    <ScaledMockup>
      <div className="rounded-[2rem] overflow-hidden bg-[#1a1a1c] shadow-[0_-20px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/10 text-left">
        {/* Status bar */}
        <div className="bg-[#1a1a1c] px-4 py-2 flex justify-between items-center text-[10px] text-white/60">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <Signal className="w-3.5 h-3.5 text-white/40" />
            <Wifi className="w-3.5 h-3.5 text-white/40" />
            <BatteryFull className="w-3.5 h-3.5 text-white/40" />
          </div>
        </div>

        {/* Chat header */}
        <div className="bg-[#242427] border-b border-white/5 px-4 py-2.5 flex items-center gap-2">
          <ChevronLeft className="w-4 h-4 text-white/40" />
          <div className="w-7 h-7 rounded-full bg-ink flex items-center justify-center text-gold text-[11px] font-bold shrink-0">
            A
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[12px] text-white font-medium">Avanty Frontier</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#28c840] inline-block" />
          </div>
        </div>

        {/* Chat body */}
        <div className="bg-[#1e1e21] px-3 py-4 space-y-2.5">
          <Bubble from="buyer">
            Hi, do you supply fertilizer for maize? Need about 40 bags before next month.
          </Bubble>
          <Bubble from="avanty">
            Yes, we can source that. Confirming supplier and price — back to you today.
          </Bubble>
          <Bubble from="avanty">
            Quote: 40 bags Compound D, delivery within 5 days. Sending details now.
          </Bubble>
          <Bubble from="buyer">Perfect, let's go ahead.</Bubble>

          <div className="pt-1 flex items-center justify-center gap-1 text-[10px] text-[#28c840]/80">
            <Check className="w-3 h-3" />
            <span>Order confirmed</span>
          </div>
        </div>
      </div>
    </ScaledMockup>
  )
}
