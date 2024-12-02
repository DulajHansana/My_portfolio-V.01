import Link from "next/link"
import { usePathname } from "next/navigation" 
export default function Menu() {
	const pathname = usePathname()

	return (
		<>
			<ul
					</Link>
				</li>
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
