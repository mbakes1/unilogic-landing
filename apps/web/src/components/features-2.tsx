import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Computer, Network, Megaphone } from 'lucide-react'
import { type ReactNode } from 'react';

export default function Features() {
    return (
        <section id="solutions" className="py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Transformative Solutions for South Africa's Public Sector</h2>
                    <p className="mt-4">We design and implement technology solutions exclusively for government departments and public institutions.</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-16 dark:[--color-muted:var(--color-zinc-900)]">
                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Computer
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">IT Infrastructure & Systems</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Secure, scalable infrastructure that modernizes government operations while meeting public sector compliance requirements.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Network
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">IoT & Smart Solutions</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Our IoT solutions bring intelligence to infrastructure — enabling smarter cities, safer communities, and more efficient services.</p>
                        </CardContent>
                    </Card>

                    <Card className="group border-0 shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Megaphone
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Digital Marketing & Citizen Engagement</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Data-driven strategies that improve communication between government and citizens, increasing awareness and engagement.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div
            aria-hidden
            className="bg-radial to-background absolute inset-0 from-transparent to-75%"
        />
        <div className="dark:bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t bg-white">{children}</div>
    </div>
)
