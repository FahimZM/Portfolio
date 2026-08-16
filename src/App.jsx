import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SpecularButton from "./components/button.jsx";
import DepthCarousel from "./components/img_carousel.jsx";
import LiquidEther from "./components/background.jsx";

function App() {
    const [count, setCount] = useState(0)
    const items = [
    { image: 'https://picsum.photos/seed/a/800/1000', alt: 'One' },
    { image: 'https://picsum.photos/seed/b/800/1000', alt: 'Two' },
    { image: 'https://picsum.photos/seed/c/800/1000', alt: 'Three' },
    { image: 'https://picsum.photos/seed/d/800/1000', alt: 'Four' },
    { image: 'https://picsum.photos/seed/e/800/1000', alt: 'Five' }
  ];

    return (
        <>
            <div className="page">

                {/* LiquidEther Background */}
                <div className="background">
                    <LiquidEther
                        colors={['#5227FF', '#FF9FFC', '#B497CF']}
                        mouseForce={30}
                        cursorSize={30}
                        isViscous={false}
                        viscous={41}
                        iterationsViscous={32}
                        iterationsPoisson={29}
                        resolution={0.3}
                        isBounce={false}
                        autoDemo
                        autoSpeed={0.1}
                        autoIntensity={2.2}
                        takeoverDuration={0.25}
                        autoResumeDelay={3000}
                        autoRampDuration={0.6}
                    />
                </div>

                {/* Content Layer */}
                <main className="content">
                    <section id="center">
                        <div className="hero">
                            <img src={heroImg} className="base" width="170" height="179" alt="" />
                            <img src={reactLogo} className="framework" alt="React logo" />
                            <img src={viteLogo} className="vite" alt="Vite logo" />
                        </div>
                        <div>
                            <h1>Get started</h1>
                            <p>
                                Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
                            </p>
                        </div>
                        <button
                            type="button"
                            className="counter"
                            onClick={() => setCount((count) => count + 1)}
                        >
                            Count is {count}
                        </button>
                        <SpecularButton
                            size="lg"
                            radius={18}
                            tint="#ffffff"
                            tintOpacity={0}
                            blur={0}
                            textColor="#f5f5f5"
                            lineColor="#ffffff"
                            baseColor="#525252"
                            intensity={1}
                            shineSize={10}
                            shineFade={40}
                            thickness={1}
                            speed={0.35}
                            followMouse
                            proximity={250}
                            autoAnimate={false}
                            onClick={() => console.log('clicked')}
                        >
                            Get Started
                        </SpecularButton>

                        <DepthCarousel
                            items={items}
                            depth={220}
                            spread={90}
                            tilt={22}
                            tiltDirection="right"
                            perspective={1400}
                            visibleCards={4}
                            falloff={0.2}
                            blur={6}
                            autoplay={false}
                            loop
                            cardWidth={300}
                            cardHeight={380}
                            radius={18}
                            tint="#05060a"
                            duration={700}
                            ease="power3.out"
                            autoplayDelay={3200}
                            showControls
                            showIndicators
                        />
                    </section>

                    <div className="ticks"></div>

                    <section id="next-steps">
                        <div id="docs">
                            <svg className="icon" role="presentation" aria-hidden="true">
                                <use href="/icons.svg#documentation-icon"></use>
                            </svg>
                            <h2>Documentation</h2>
                            <p>Your questions, answered</p>
                            <ul>
                                <li>
                                    <a href="https://vite.dev/" target="_blank">
                                        <img className="logo" src={viteLogo} alt="" />
                                        Explore Vite
                                    </a>
                                </li>
                                <li>
                                    <a href="https://react.dev/" target="_blank">
                                        <img className="button-icon" src={reactLogo} alt="" />
                                        Learn more
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div id="social">
                            <svg className="icon" role="presentation" aria-hidden="true">
                                <use href="/icons.svg#social-icon"></use>
                            </svg>
                            <h2>Connect with us</h2>
                            <p>Join the Vite community</p>
                            <ul>
                                <li>
                                    <a href="https://github.com/vitejs/vite" target="_blank">
                                        <svg
                                            className="button-icon"
                                            role="presentation"
                                            aria-hidden="true"
                                        >
                                            <use href="/icons.svg#github-icon"></use>
                                        </svg>
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href="https://chat.vite.dev/" target="_blank">
                                        <svg
                                            className="button-icon"
                                            role="presentation"
                                            aria-hidden="true"
                                        >
                                            <use href="/icons.svg#discord-icon"></use>
                                        </svg>
                                        Discord
                                    </a>
                                </li>
                                <li>
                                    <a href="https://x.com/vite_js" target="_blank">
                                        <svg
                                            className="button-icon"
                                            role="presentation"
                                            aria-hidden="true"
                                        >
                                            <use href="/icons.svg#x-icon"></use>
                                        </svg>
                                        X.com
                                    </a>
                                </li>
                                <li>
                                    <a href="https://bsky.app/profile/vite.dev" target="_blank">
                                        <svg
                                            className="button-icon"
                                            role="presentation"
                                            aria-hidden="true"
                                        >
                                            <use href="/icons.svg#bluesky-icon"></use>
                                        </svg>
                                        Bluesky
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <div className="ticks"></div>
                    <section id="spacer"></section>
                </main>

            </div>
        </>
    )
}

export default App