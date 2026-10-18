import { marquee } from '../data'

export default function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="marq" aria-hidden="true">
      <div className="marqtrack">
        {items.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  )
}
