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
        <footer className="border-t bg-white py-8 sm:py-12">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <div className="border-t border-gray-200 pt-4 mb-2"></div>
                <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-6">
                    <span className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">© {new Date().getFullYear()} Unilogic, South Africa's emerging leader in public sector technology, built with 💙 in 🇿🇦. All rights reserved</span>
                    <div className="flex justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
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
