import React from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SimpleTextEffect } from '@/components/ui/simple-text-effect'
import { SimpleAnimatedGroup } from '@/components/ui/simple-animated-group'
import { HeroHeader } from '@/components/header'
import { ContactFormModal } from '@/components/contact-form-modal'
import LazyImage from '@/components/ui/lazy-image'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-50 lg:block">
                    <div className="w-64 h-64 -translate-y-32 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)] sm:w-80 sm:h-80 sm:-translate-y-40 md:w-[35rem] md:h-[80rem] md:-translate-y-[22rem]" />
                    <div className="h-64 absolute left-0 top-0 w-40 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%] sm:w-52 sm:h-80 md:w-[15rem] md:h-[80rem]" />
                    <div className="h-64 -translate-y-32 absolute left-0 top-0 w-40 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] sm:w-52 sm:h-80 sm:-translate-y-40 md:w-[15rem] md:h-[80rem] md:-translate-y-[22rem]" />
                </div>
                <section>
                    <div className="relative pt-16 md:pt-24">
                        <SimpleAnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            <LazyImage
                                src="https://images.unsplash.com/photo-1636706519609-988babca3dd5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1200"
                                alt="background"
                                className="absolute inset-x-0 top-40 -z-20 hidden lg:top-24 dark:block w-full max-w-none"
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                            />
                        </SimpleAnimatedGroup>
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                        <div className="mx-auto max-w-5xl px-4 sm:px-6">
                            <div className="text-center">
                                <SimpleAnimatedGroup variants={transitionVariants}>
                                    <Link
                                        to="/"
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-3 sm:gap-4 rounded-full border p-1 pl-3 sm:pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-foreground text-xs sm:text-sm">Transforming South Africa's Public Sector</span>
                                        <span className="dark:border-background block h-3 sm:h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-5 sm:size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-8 sm:w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-5 sm:size-6">
                                                    <ArrowRight className="m-auto size-2 sm:size-3" />
                                                </span>
                                                <span className="flex size-5 sm:size-6">
                                                    <ArrowRight className="m-auto size-2 sm:size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </SimpleAnimatedGroup>

                                <SimpleTextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mt-6 sm:mt-8 text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                    Engineering South Africa's Digital Future
                                </SimpleTextEffect>
                                <SimpleTextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-4 sm:mt-6 max-w-xs sm:max-w-md lg:max-w-2xl text-balance text-base sm:text-lg">
                                    As a dynamic new player in public sector technology, we're bringing fresh perspectives and cutting-edge solutions to government challenges across South Africa.
                                </SimpleTextEffect>

                                <SimpleAnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-8 flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5 w-full sm:w-auto">
                                        <ContactFormModal
                                            trigger={
                                                <Button
                                                    size="lg"
                                                    className="rounded-xl px-5 text-base w-full sm:w-auto">
                                                    <span>Partner With Us</span>
                                                </Button>
                                            }
                                        />
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5 w-full sm:w-auto">
                                        <Link to="/" hash="#solutions">
                                            <span>Explore Solutions</span>
                                        </Link>
                                    </Button>
                                </SimpleAnimatedGroup>
                            </div>
                        </div>

                        <SimpleAnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative mt-6 px-2 sm:mt-8 md:mt-12 lg:mt-16">
                                <div className="bg-background relative mx-auto max-w-[95%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl overflow-hidden rounded-2xl">
                                    <LazyImage
                                        className="z-2 aspect-[4/3] w-full object-cover sm:aspect-video"
                                        src="https://images.unsplash.com/photo-1636706519609-988babca3dd5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1200"
                                        alt="South African public sector digital transformation"
                                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                                    />
                                </div>
                            </div>
                        </SimpleAnimatedGroup>
                    </div>
                </section>
            </main>
        </>
    )
}
