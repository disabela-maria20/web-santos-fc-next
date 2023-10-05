import React from "react"
import { INavProps, TypeLink } from "./type"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Nav = ({ open }: INavProps): JSX.Element => {
	
	const link: TypeLink = [
		{ name: "Objetivo", id: "#objetivo" },
		{ name: "Santos", id: "#santos" },
		{ name: "Pilares", id: "#pilares" },
		{ name: "Metodologia", id: "#metodologia" },
		{ name: "Dúvidas", id: "#duvidas" },
	]

	return (
		<nav className="transition-[all] transform ease-in-out duration-200 left-0 top-79 md:top-0 md:w-auto absolute md:relative w-full">
			<ul className={`nav origin-center ${open ? '-translate-x-full md:-translate-x-0' : '-translate-x-0'}`} >
				{link.map(({name, id}) => (
					<li className="py-22  md:py-0" key={id}>
						<AnchorLink href={id}>
							<span className="text-white font-bold text-15 md:text-18 md:px-26 hover:text-yellow-100 transition-all font-roboto">{name}</span>
						</AnchorLink>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Nav
