import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "it", label: "Italiano" },
  { code: "es", label: "Español" },
] as const;

type LanguageCode = (typeof LANGUAGES)[number]["code"];

type Video = {
  id: string;
  title: string;
  image: string;
  href: string;
};

const VIDEOS: Record<LanguageCode, Video[]> = {
  en: [
    {
      id: "autonomy",
      title: "Governing autonomy: if an AI agent causes damage, who is accountable?",
      image: "/img/video-gallery/autonomy-en.jpg",
      href: "https://www.youtube.com/watch?v=3yMNTo1uM28",
    },
    {
      id: "residual-risk",
      title: "Governing what remains: the residual risk of AI agents",
      image: "/img/video-gallery/residual-risk-en.jpg",
      href: "https://www.youtube.com/watch?v=mRXr1-_murk",
    },
    {
      id: "causal-time",
      title:
        "Encoding causal time in the authorization protocol · Same key, different history",
      image: "/img/video-gallery/causal-time-en.jpg",
      href: "https://www.youtube.com/watch?v=liYpy6QaBGo",
    },
    {
      id: "pic-model",
      title: "The PIC Model: Why the Confused Deputy Is Impossible",
      image: "/img/video-gallery/pic-model-en.jpg",
      href: "https://www.youtube.com/watch?v=yjAgwxUmO8E",
    },
  ],
  it: [
    {
      id: "autonomy",
      title:
        "Governare l'autonomia: se un agente IA causa un danno, chi ne risponde?",
      image: "/img/video-gallery/autonomy-it.jpg",
      href: "https://www.youtube.com/watch?v=goDQqaztBC8",
    },
    {
      id: "residual-risk",
      title:
        "Governare ciò che resta: il rischio residuo degli agenti di IA",
      image: "/img/video-gallery/residual-risk-it.jpg",
      href: "https://www.youtube.com/watch?v=OPlosT-VDFk",
    },
    {
      id: "causal-time",
      title:
        "Codificare il tempo causale nel protocollo di autorizzazione · Stessa chiave, storia diversa",
      image: "/img/video-gallery/causal-time-it.jpg",
      href: "https://www.youtube.com/watch?v=4_6iV_-Wpek",
    },
    {
      id: "pic-model",
      title: "Il modello PIC: perché il delegato confuso è impossibile",
      image: "/img/video-gallery/pic-model-it.jpg",
      href: "https://www.youtube.com/watch?v=6XBgUrlil9A",
    },
  ],
  es: [
    {
      id: "autonomy",
      title:
        "Gobernar la autonomía: si un agente de IA causa un daño, ¿quién responde por ello?",
      image: "/img/video-gallery/autonomy-es.jpg",
      href: "https://www.youtube.com/watch?v=X0esuRdhWXc",
    },
    {
      id: "residual-risk",
      title:
        "Gobernar lo que queda: el riesgo residual de los agentes de IA",
      image: "/img/video-gallery/residual-risk-es.jpg",
      href: "https://www.youtube.com/watch?v=WqTDgxyYZuE",
    },
    {
      id: "causal-time",
      title:
        "Codificar el tiempo causal en el protocolo de autorización · La misma llave, otra historia",
      image: "/img/video-gallery/causal-time-es.jpg",
      href: "https://www.youtube.com/watch?v=VhMn4zZ9QY0",
    },
    {
      id: "pic-model",
      title: "El modelo PIC: por qué el delegado confuso es imposible",
      image: "/img/video-gallery/pic-model-es.jpg",
      href: "https://www.youtube.com/watch?v=OsovSXtNWgY",
    },
  ],
};

export const VideoGallerySection = () => {
  const railRef = useRef<HTMLDivElement>(null);
  const [activeLanguage, setActiveLanguage] =
    useState<LanguageCode>("en");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;

    const maxScrollLeft = rail.scrollWidth - rail.clientWidth;
    setCanScrollLeft(rail.scrollLeft > 4);
    setCanScrollRight(rail.scrollLeft < maxScrollLeft - 4);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    updateScrollState();
    rail.addEventListener("scroll", updateScrollState, { passive: true });

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(rail);

    return () => {
      rail.removeEventListener("scroll", updateScrollState);
      resizeObserver.disconnect();
    };
  }, [activeLanguage, updateScrollState]);

  const selectLanguage = (language: LanguageCode) => {
    setActiveLanguage(language);
    railRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  const scrollRail = (direction: "left" | "right") => {
    const rail = railRef.current;
    if (!rail) return;

    rail.scrollBy({
      left:
        direction === "right"
          ? rail.clientWidth * 0.86
          : -rail.clientWidth * 0.86,
      behavior: "smooth",
    });
  };

  const selectAdjacentLanguage = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex =
      (index + direction + LANGUAGES.length) % LANGUAGES.length;
    const nextLanguage = LANGUAGES[nextIndex].code;

    selectLanguage(nextLanguage);
    document.getElementById(`video-gallery-tab-${nextLanguage}`)?.focus();
  };

  return (
    <section
      id="tw-scope"
      className="px-6 pt-16 md:pt-20 xl:px-24 dark:bg-[#1F1F21]"
    >
      <div id="video-gallery" className="mx-auto max-w-300">
        <div className="max-w-190">
          <span className="mono mb-3 block text-[10px] font-semibold uppercase tracking-normal text-[#00543D] dark:text-[#25c2a0]">
            {"// watch_pic"}
          </span>
          <h2 className="font-[Clash_Grotesk]! m-0 text-[32px] font-medium leading-none tracking-normal text-black dark:text-white md:text-[44px]">
            Explore PIC in your language.
          </h2>
          <p className="m-0 mt-4 max-w-180 text-[17px] font-light leading-8 text-black/58 dark:text-white/55">
            Four short talks connect AI-agent governance, residual risk, causal
            time, and the formal PIC Model. This page loads no YouTube content;
            a video opens on YouTube only after you select it.
          </p>
        </div>

        <div
          className="mt-8 inline-flex rounded-2xl border border-black/10 bg-black/4 p-1.5 dark:border-white/10 dark:bg-white/5"
          role="tablist"
          aria-label="Video language"
        >
          {LANGUAGES.map((language, index) => {
            const isActive = language.code === activeLanguage;

            return (
              <button
                key={language.code}
                id={`video-gallery-tab-${language.code}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="video-gallery-panel"
                tabIndex={isActive ? 0 : -1}
                className={`cursor-pointer rounded-xl border-0 px-4 py-2.5 text-sm font-semibold transition md:px-6 ${
                  isActive
                    ? "bg-[#00543D] text-white shadow-sm dark:bg-[#25c2a0] dark:text-[#05231b]"
                    : "bg-transparent text-black/58 hover:text-black dark:text-white/55 dark:hover:text-white"
                }`}
                onClick={() => selectLanguage(language.code)}
                onKeyDown={(event) =>
                  selectAdjacentLanguage(event, index)
                }
              >
                {language.label}
              </button>
            );
          })}
        </div>

        <div
          id="video-gallery-panel"
          role="tabpanel"
          aria-labelledby={`video-gallery-tab-${activeLanguage}`}
          className="picx-article-rail-wrap mt-8"
        >
          <div
            ref={railRef}
            className="picx-article-rail flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 pt-1 md:gap-6"
            aria-label={`${LANGUAGES.find(({ code }) => code === activeLanguage)?.label} PIC videos`}
          >
            {VIDEOS[activeLanguage].map((video, index) => (
              <a
                key={video.id}
                href={video.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-[78vw] max-w-[520px] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-black/10 bg-[#FAFAFA] text-black no-underline transition duration-300 hover:-translate-y-1 hover:border-[#00543D]/35 hover:text-black hover:shadow-[0_18px_50px_rgba(0,84,61,0.12)] dark:border-white/10 dark:bg-[#212123] dark:text-white dark:hover:border-[#25c2a0]/45 dark:hover:text-white sm:w-[500px] xl:w-[520px]"
                aria-label={`${video.title} — watch on YouTube (opens in a new tab)`}
              >
                <div className="relative aspect-video overflow-hidden bg-[#101716]">
                  <img
                    src={video.image}
                    alt=""
                    width="1200"
                    height="675"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/15"
                  >
                    <span className="flex h-15 w-15 items-center justify-center rounded-full border border-white/35 bg-black/65 text-white shadow-xl backdrop-blur-sm transition group-hover:scale-110 group-hover:bg-[#00543D] dark:group-hover:bg-[#25c2a0] dark:group-hover:text-[#05231b]">
                      <svg
                        viewBox="0 0 24 24"
                        className="ml-1 h-6 w-6 fill-current"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <span className="mono text-[10px] font-semibold uppercase tracking-widest text-[#00543D] dark:text-[#25c2a0]">
                    {String(index + 1).padStart(2, "0")} · YouTube
                  </span>
                  <h3 className="font-[Clash_Grotesk]! m-0 mt-3 text-[22px] font-medium leading-tight tracking-normal md:text-[25px]">
                    {video.title}
                  </h3>
                  <span className="mt-auto inline-block pt-5 text-sm font-semibold text-[#00543D] dark:text-[#25c2a0]">
                    Watch video -&gt;
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div
            className="picx-article-rail-overlay"
            aria-hidden={!canScrollLeft && !canScrollRight}
          >
            {canScrollLeft && (
              <button
                type="button"
                className="picx-article-arrow picx-article-arrow--left"
                onClick={() => scrollRail("left")}
                aria-label="Scroll videos left"
              >
                <span aria-hidden="true">&lt;</span>
              </button>
            )}
            {canScrollRight && (
              <button
                type="button"
                className="picx-article-arrow picx-article-arrow--right"
                onClick={() => scrollRail("right")}
                aria-label="Scroll videos right"
              >
                <span aria-hidden="true">&gt;</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
