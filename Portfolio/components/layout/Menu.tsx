import Link from "next/link"
import { usePathname } from "next/navigation" 
export default function Menu() {
	const pathname = usePathname()

	return (
		<>
			<ul className="navbar-nav me-auto mb-2 mb-lg-0">
				
				<li className="nav-item">
					<Link href="/services" className={pathname === "/services" ? "nav-link active" : "nav-link"}>
						Services
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/work" className={pathname === "/work" ? "nav-link active" : "nav-link"}>
						Portfolio
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/pricing" className={pathname === "/pricing" ? "nav-link active" : "nav-link"}>
						Pricing
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/#contact" className={pathname === "#contact" ? "nav-link active" : "nav-link"}>
						Contact
					</Link>
				</li>
			</ul>
		</>
	)
}
