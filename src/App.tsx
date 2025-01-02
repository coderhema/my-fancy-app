import LetterSwapForward from "./fancy/components/text/letter-swap-forward-anim"
import LetterSwapPingPong from "./fancy/components/text/letter-swap-pingpong-anim"

const App = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center text-xl md:text-3xl">
      <div className="p-12 text-[#0015ff] rounded-xl align-text-top gap-y-1 md:gap-y-2 flex flex-col">
        <LetterSwapForward
          label="Hover me chief!"
          reverse={true}
          className="italic"
        />
        <LetterSwapForward
          label="{awesome}"
          reverse={false}
          className="font-bold"
        />
        <LetterSwapForward
          label="Good day!"
          staggerFrom="center"
          className="mono"
        />
        <LetterSwapPingPong
          label="More text?"
          staggerFrom="center"
          reverse={false}
          className="font-overusedGrotesk font-bold"
        />
        <LetterSwapPingPong label="oh, seriously?!" staggerFrom="last" />
      </div>
    </div>
  );
};

export default App;
