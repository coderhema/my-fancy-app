import { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticleEmitter = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="skillParticles"
      init={particlesInit}
      options={{
        fpsLimit: 120,
        particles: {
          color: {
            value: "#ffffff"
          },
          move: {
            enable: true,
            direction: "top",
            random: false,
            straight: false,
            speed: 1,
            outModes: {
              default: "out"
            }
          },
          number: {
            value: 30,
            density: {
              enable: true,
              area: 800
            }
          },
          opacity: {
            value: 0.3
          },
          size: {
            value: { min: 1, max: 3 }
          }
        },
        detectRetina: true
      }}
      className="absolute inset-0"
    />
  );
};

export default ParticleEmitter;