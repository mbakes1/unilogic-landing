import { Link } from '@tanstack/react-router'

const links = [
    {
        title: 'Solutions',
        to: '#solutions',
    },
    {
        title: 'Impact',
        to: '#impact',
    },
    {
        title: 'About',
        to: '#about',
    },
]

export default function FooterSection() {
    return (
        <footer className="border-b bg-white py-12">
            <div className="mx-auto max-w-5xl px-6">
                <div className="border-t border-gray-200 pt-2 mb-2"></div>
                <div className="flex flex-wrap justify-between gap-6">
                    <span className="text-muted-foreground order-last block text-center text-sm md:order-first">© {new Date().getFullYear()} Unilogic, built with 💙 in 🇿🇦. All rights reserved</span>
                    <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                to={link.to}
                                className="text-muted-foreground hover:text-primary block duration-150">
                                <span>{link.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
