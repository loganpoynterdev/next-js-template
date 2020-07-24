import Link from 'next/link';

const Navbar = () => {
	return (
		<div>
			<ul>
				<li>
					<Link href='/'>
						<a>Link 1</a>
					</Link>
				</li>
				<li>
					<Link href='/about'>
						<a>Link 2</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
