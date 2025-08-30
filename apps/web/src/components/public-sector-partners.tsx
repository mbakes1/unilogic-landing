import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function PublicSectorPartners() {
    return (
        <section id="about" className="bg-background overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Trusted by South Africa's Public Sector</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}>
                            <div className="flex">
                                <div className="mx-auto text-sm font-medium">Department of Health</div>
                            </div>

                            <div className="flex">
                                <div className="mx-auto text-sm font-medium">City of Cape Town</div>
                            </div>
                            <div className="flex">
                                <div className="mx-auto text-sm font-medium">eThekwini Municipality</div>
                            </div>
                            <div className="flex">
                                <div className="mx-auto text-sm font-medium">National Treasury</div>
                            </div>
                            <div className="flex">
                                <div className="mx-auto text-sm font-medium">Department of Education</div>
                            </div>
                            <div className="flex">
                                <div className="mx-auto text-sm font-medium">Transnet</div>
                            </div>
                            <div className="flex">
                                <div className="mx-auto text-sm font-medium">SABC</div>
                            </div>

                            <div className="flex">
                                <div className="mx-auto text-sm font-medium">Department of Social Development</div>
                            </div>
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}