export default function StatsSection() {
    return (
        <section id="impact" className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-xl space-y-6">
                    <h2 className="text-4xl font-medium lg:text-5xl">Driving Digital Transformation Across South Africa's Public Sector</h2>
                    <p>
                        We are at the forefront of public sector innovation. <span className="font-medium">We empower government institutions</span> with technology solutions that enhance service delivery and citizen engagement.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div>
                        <p>We work exclusively with government departments, municipalities, and public institutions throughout South Africa, delivering measurable impact through technology.</p>
                        <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">50+</div>
                                <p>Government Partnerships</p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">300+</div>
                                <p>Digital Services Deployed</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <blockquote className="border-l-4 pl-4">
                            <p>unilogic transformed our citizen engagement approach with their IoT-enabled public asset management system. The solution reduced maintenance costs by 40% while improving service delivery to our communities.</p>

                            <div className="mt-6 space-y-3">
                                <cite className="block font-medium">Thandi Nkosi, Director of ICT</cite>
                                <p className="text-sm">City of Johannesburg</p>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}
