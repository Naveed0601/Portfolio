import { motion } from 'framer-motion'
import { profile, navLinks } from '../data'

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navrow">
        <a className="brand" href="#top">MN /</a>
        <ul className="navlinks">
          {navLinks.map(([label, href]) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>
        <a className="navcta" href={`mailto:${profile.email}`}>Get in touch</a>
      </div>
    </motion.nav>
  )
}
