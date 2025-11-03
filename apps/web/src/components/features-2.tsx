import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Computer, Network, Megaphone } from 'lucide-react'
import { type ReactNode } from 'react';

export default function Features() {
    return (
        <section id="solutions" className="py-12 sm:py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <div className="text-center mb-10 sm:mb-12">
                    <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-semibold lg:text-5xl">Fresh Solutions for South Africa's Public Sector</h2>
                    <p className="mt-4 text-base sm:text-lg">As an emerging company, we design and implement cutting-edge technology solutions exclusively for government departments and public institutions with agility and innovation.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
                    <Card className="group border-0 shadow-none flex flex-col">
                        <CardHeader className="pb-3 flex-shrink-0">
                            <CardDecorator>
                                <Computer
                                    className="size-5 sm:size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-4 sm:mt-6 font-medium">IT Infrastructure & Systems</h3>
                        </CardHeader>

                        <CardContent className="flex-grow">
                            <p className="text-sm">Secure, scalable infrastructure that modernizes government operations while meeting public sector compliance requirements. As a new player, we bring fresh approaches to traditional infrastructure challenges.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none flex flex-col">
                        <CardHeader className="pb-3 flex-shrink-0">
                            <CardDecorator>
                                <Network
                                    className="size-5 sm:size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-4 sm:mt-6 font-medium">IoT & Smart Solutions</h3>
                        </CardHeader>

                        <CardContent className="flex-grow">
                            <p className="text-sm">Our innovative IoT solutions bring intelligence to infrastructure — enabling smarter cities, safer communities, and more efficient services through fresh perspectives and modern approaches.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none flex flex-col">
                        <CardHeader className="pb-3 flex-shrink-0">
                            <CardDecorator>
                                <Megaphone
                                    className="size-5 sm:size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-4 sm:mt-6 font-medium">Digital Marketing</h3>
                        </CardHeader>

                        <CardContent className="flex-grow">
                            <p className="text-sm">Data-driven strategies that improve communication between government and citizens, increasing awareness and engagement. We bring new approaches to public sector communication challenges.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:24px_24px]"
        />
        <div
            aria-hidden
            className="bg-radial to-background absolute inset-0 from-transparent to-75%"
        />
        <div className="absolute inset-0 m-auto flex size-10 sm:size-12 items-center justify-center border-l border-t bg-white">{children}</div>
    </div>
)
