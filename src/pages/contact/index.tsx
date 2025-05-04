import { RainbowButton } from "@/components/magicui/rainbow-button";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function ContactPage() {
  const openEmail = () => {
    window.location.href = "mailto:djeblounnazim2@gmail.com";
  };

  return (
    <div className="py-40 min-h-screen bg-gradient-to-b from-background to-background/80  px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto  flex flex-col justify-center items-center">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-zinc-500/80 bg-clip-text text-center text-5xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Get in touch
        </span>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto py-5">
          I&apos;m always open to new opportunities, collaborations, or just a
          friendly chat. Feel free to reach out through the form below or
          connect with me on social media.
        </p>
        <div className="w-64 py-10  flex justify-center">
          <RainbowButton onClick={openEmail}>Contact Me</RainbowButton>
        </div>

        <div className="flex gap-20 flex-wrap w-full justify-center items-center">
          <div className=" border-zinc-300 border dark:border-borderaccent p-5 rounded-2xl w-[350px] h-[200px] bg-gradient-to-br from-background to-background/60">
            <h2 className="text-2xl font-semibold mb-4">Check out my GitHub</h2>
            <p className="text-muted-foreground mb-4">
              Explore my open-source projects and contributions.
            </p>
            <a
              href="https://github.com/nazimdjebloun"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center gap-2 py-2 text-foreground rounded-lg"
            >
              <FaGithub className="w-6 h-6" /> Visit My GitHub
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <div className="border-zinc-300 border dark:border-borderaccent p-5 rounded-2xl w-[350px] h-[200px] bg-gradient-to-br from-background to-background/60">
            <h2 className="text-2xl font-semibold mb-4">Connect on LinkedIn</h2>
            <p className="text-muted-foreground mb-4">
              Let&apos;s network and discuss new opportunities.
            </p>
            <a
              href="https://www.linkedin.com/in/nazim-djebloun/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center gap-2 py-2 text-foreground rounded-lg"
            >
              <CiLinkedin className="w-6 h-6" /> Visit My LinkedIn
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
