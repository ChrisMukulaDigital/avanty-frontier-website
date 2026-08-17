import { useEffect, useRef, useState } from 'react'
import { BatteryFull, Check, ChevronLeft, Mic, Signal, Wifi } from 'lucide-react'

// iPhone 13 point resolution (390 x 844) — the frame keeps this exact ratio
// at every size instead of being driven by how much chat content there is.
const DESIGN_WIDTH = 390
const DESIGN_HEIGHT = 844

/**
 * Renders children into a fixed 390x844 frame, then scales the whole thing
 * via CSS transform to fit whatever width the parent gives it. Keeps true
 * iPhone proportions at every breakpoint instead of shrinking to fit content.
 */
function ScaledMockup({ children }: { children: React.ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const outer = outerRef.current
    if (!outer) return

    const recalc = () => setScale(outer.offsetWidth / DESIGN_WIDTH)

    recalc()
    const observer = new ResizeObserver(recalc)
    observer.observe(outer)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={outerRef} style={{ height: DESIGN_HEIGHT * scale }}>
      <div
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
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
      <div className="bg-white/10 text-white/90 text-[13px] rounded-2xl rounded-bl-sm px-3.5 py-2.5 max-w-[78%]">
        {children}
      </div>
    )
  }
  return (
    <div className="bg-[#e8b923]/90 text-ink text-[13px] rounded-2xl rounded-br-sm px-3.5 py-2.5 max-w-[78%] ml-auto">
      {children}
    </div>
  )
}

export default function WhatsAppMockup() {
  return (
    <ScaledMockup>
      <div
        aria-hidden="true"
        className="relative h-full flex flex-col rounded-[2.75rem] overflow-hidden bg-[#1a1a1c] shadow-[0_-20px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/10 text-left"
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-28 h-6 bg-black rounded-b-2xl" />

        {/* Status bar */}
        <div className="shrink-0 bg-[#1a1a1c] px-6 pt-3.5 pb-1.5 flex justify-between items-center text-[13px] text-white/60 font-medium">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <Signal className="w-4 h-4 text-white/40" />
            <Wifi className="w-4 h-4 text-white/40" />
            <BatteryFull className="w-4 h-4 text-white/40" />
          </div>
        </div>

        {/* Chat header */}
        <div className="shrink-0 bg-[#242427] border-b border-white/5 px-4 py-3 flex items-center gap-2.5">
          <ChevronLeft className="w-5 h-5 text-white/40" />
          <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center text-gold text-[13px] font-bold shrink-0">
            A
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[14px] text-white font-medium">Avanty Frontier</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#28c840] inline-block" />
          </div>
        </div>

        {/* Chat body — fills remaining height, bubbles anchored to the bottom */}
        <div className="flex-1 min-h-0 bg-[#1e1e21] px-3.5 py-4 flex flex-col justify-end gap-2.5 overflow-hidden">
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

          <div className="pt-1 flex items-center justify-center gap-1 text-[11px] text-[#28c840]/80">
            <Check className="w-3.5 h-3.5" />
            <span>Order confirmed</span>
          </div>
        </div>

        {/* Message input bar */}
        <div className="shrink-0 bg-[#242427] border-t border-white/5 px-3 py-2.5 flex items-center gap-2">
          <div className="flex-1 bg-white/10 rounded-full px-4 py-2.5 text-[13px] text-white/30">
            Message
          </div>
          <div className="w-9 h-9 rounded-full bg-[#e8b923] flex items-center justify-center shrink-0">
            <Mic className="w-4 h-4 text-ink" />
          </div>
        </div>

        {/* Home indicator */}
        <div className="shrink-0 bg-[#242427] pb-2 pt-1 flex justify-center">
          <div className="w-32 h-1 rounded-full bg-white/30" />
        </div>
      </div>
    </ScaledMockup>
  )
}
