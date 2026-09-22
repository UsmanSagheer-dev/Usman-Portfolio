import { IMAGES } from "@/assets/images";
import React, { useEffect, useRef, useState } from "react";

const skills = [
  {
    name: "HTML5",
    color: "#e34f26",
    icon: IMAGES.HtmlIcon,
  },
  {
    name: "CSS3",
    color: "#1572b6",
    icon: IMAGES.CssLogo,
  },
  {
    name: "JavaScript",
    color: "#f7df1e",
    icon: IMAGES.JsLogo,
  },
  {
    name: "TypeScript",
    color: "#3178c6",
    icon: IMAGES.TsLogo,
  },
  {
    name: "React.js",
    color: "#61dafb",
    icon: IMAGES.ReactLogo,
  },
  {
    name: "Next.js",
    color: "#aaaaaa",
    icon: IMAGES.NextLogo,
  },
  {
    name: "Tailwind CSS",
    color: "#38bdf8",
    icon: IMAGES.TailwindLogo,
  },
  {
    name: "Node.js",
    color: "#6cc24a",
    icon: IMAGES.NodeLogo,
  },
  {
    name: "PostgreSQL",
    color: "#4169e1",
    icon: IMAGES.PostgreSQLLogo,
  },
  {
    name: "Prisma",
    color: "#5a67d8",
    icon: IMAGES.PrismaLogo,
  },
  {
    name: "Redux",
    color: "#764abc",
    icon: IMAGES.ReduxLogo,
  },
  {
    name: "React Native",
    color: "#61dafb",
    icon: IMAGES.ReactNativeLogo,
  },
  {
    name: "Git",
    color: "#f05032",
    icon: IMAGES.GitLogo,
  },
  {
    name: "GitHub",
    color: "#888888",
    icon: IMAGES.GitHubLogo,
  },
  {
    name: "REST API",
    color: "#00a67e",
    icon: IMAGES.ApiLogo,
  },
  {
    name: "JWT",
    color: "#d63aff",
    icon: IMAGES.JwtLogo,
  },
];

const GLOBE_R = 170;
const ICON_R = 28;

const W = 500;
const H = 500;

const cx = W / 2;
const cy = H / 2;

function rotate(
  px: number,
  py: number,
  pz: number,
  ax: number,
  ay: number
) {
  const y1 =
    py * Math.cos(ax) -
    pz * Math.sin(ax);

  const z1 =
    py * Math.sin(ax) +
    pz * Math.cos(ax);

  const x2 =
    px * Math.cos(ay) +
    z1 * Math.sin(ay);

  const z2 =
    -px * Math.sin(ay) +
    z1 * Math.cos(ay);

  return [x2, y1, z2];
}

const N = skills.length;

const basePts = skills.map((_, i) => {
  const phi =
    Math.acos(
      1 - (2 * (i + 0.5)) / N
    );

  const theta =
    Math.PI *
    (1 + Math.sqrt(5)) *
    i;

  return {
    ox: Math.sin(phi) * Math.cos(theta),
    oy: Math.cos(phi),
    oz: Math.sin(phi) * Math.sin(theta),
  };
});

interface TooltipState {
  visible: boolean;
  name: string;
  x: number;
  y: number;
}

const SkillsGlobe = () => {
  const cvs =
    useRef<HTMLCanvasElement | null>(null);

  const state = useRef({
    angleX: 0.3,
    angleY: 0,
    velX: 0,
    velY: 0.004,
    dragging: false,
    lastMX: 0,
    lastMY: 0,
    hovered: -1,
  });

  const imgCache =
    useRef<Record<number, HTMLImageElement>>({});

  const [tooltip, setTooltip] =
    useState<TooltipState>({
      visible: false,
      name: "",
      x: 0,
      y: 0,
    });

  /*
   * Load skill icons
   */
  useEffect(() => {
    skills.forEach((skill, index) => {
      const img = new Image();

      img.src = skill.icon;

      img.onload = () => {
        imgCache.current[index] = img;
      };
    });
  }, []);

  /*
   * Globe rendering
   */
  useEffect(() => {
    const canvas = cvs.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let raf: number;

    const draw = () => {
      const {
        angleX,
        angleY,
        hovered,
      } = state.current;

      ctx.clearRect(
        0,
        0,
        W,
        H
      );

      /*
       * Globe sphere
       */
      const gradient =
        ctx.createRadialGradient(
          cx - 40,
          cy - 40,
          20,
          cx,
          cy,
          GLOBE_R
        );

      gradient.addColorStop(
        0,
        "rgba(120,140,180,0.13)"
      );

      gradient.addColorStop(
        1,
        "rgba(80,100,140,0.07)"
      );

      ctx.beginPath();

      ctx.arc(
        cx,
        cy,
        GLOBE_R,
        0,
        Math.PI * 2
      );

      ctx.fillStyle = gradient;

      ctx.fill();

      ctx.strokeStyle =
        "rgba(150,170,210,0.18)";

      ctx.lineWidth = 0.8;

      ctx.stroke();

      /*
       * Grid helper
       */
      const drawGrid = (
        points: [number, number, boolean][]
      ) => {
        ctx.strokeStyle =
          "rgba(150,170,210,0.12)";

        ctx.lineWidth = 0.5;

        ctx.beginPath();

        let first = true;

        points.forEach(
          ([sx, sy, visible]) => {
            if (visible) {
              if (first) {
                ctx.moveTo(sx, sy);
              } else {
                ctx.lineTo(sx, sy);
              }

              first = false;
            } else {
              first = true;
            }
          }
        );

        ctx.stroke();
      };

      /*
       * Latitude lines
       */
      for (
        let lat = -60;
        lat <= 60;
        lat += 30
      ) {
        const ry =
          Math.sin(
            (lat * Math.PI) / 180
          );

        const rx =
          Math.cos(
            (lat * Math.PI) / 180
          );

        drawGrid(
          Array.from(
            { length: 73 },
            (_, k) => {
              const lng = k * 5;

              const [
                px,
                py,
                pz,
              ] = rotate(
                rx *
                  Math.cos(
                    (lng * Math.PI) / 180
                  ) *
                  GLOBE_R,

                ry * GLOBE_R,

                rx *
                  Math.sin(
                    (lng * Math.PI) / 180
                  ) *
                  GLOBE_R,

                angleX,
                angleY
              );

              return [
                cx + px,
                cy - py,
                pz > -10,
              ];
            }
          )
        );
      }

      /*
       * Longitude lines
       */
      for (
        let lng = 0;
        lng < 360;
        lng += 45
      ) {
        drawGrid(
          Array.from(
            { length: 37 },
            (_, k) => {
              const lat =
                -90 + k * 5;

              const ry =
                Math.sin(
                  (lat * Math.PI) / 180
                );

              const rx =
                Math.cos(
                  (lat * Math.PI) / 180
                );

              const [
                px,
                py,
                pz,
              ] = rotate(
                rx *
                  Math.cos(
                    (lng * Math.PI) / 180
                  ) *
                  GLOBE_R,

                ry * GLOBE_R,

                rx *
                  Math.sin(
                    (lng * Math.PI) / 180
                  ) *
                  GLOBE_R,

                angleX,
                angleY
              );

              return [
                cx + px,
                cy - py,
                pz > -10,
              ];
            }
          )
        );
      }

      /*
       * Project skill points
       */
      const projected = basePts
        .map((point, index) => {
          const [
            px,
            py,
            pz,
          ] = rotate(
            point.ox * GLOBE_R,
            point.oy * GLOBE_R,
            point.oz * GLOBE_R,
            angleX,
            angleY
          );

          return {
            sx: cx + px,
            sy: cy - py,
            pz,
            i: index,
          };
        })
        .sort(
          (a, b) =>
            a.pz - b.pz
        );

      /*
       * Draw skill nodes
       */
      projected.forEach(
        ({
          sx,
          sy,
          pz,
          i,
        }) => {
          const depth =
            (pz + GLOBE_R) /
            (2 * GLOBE_R);

          const alpha =
            0.25 +
            0.75 * depth;

          const scale =
            0.5 +
            0.6 * depth;

          const radius =
            ICON_R * scale;

          const isHovered =
            i === hovered;

          ctx.save();

          ctx.globalAlpha =
            alpha;

          ctx.translate(
            sx,
            sy
          );

          if (isHovered) {
            ctx.scale(
              1.25,
              1.25
            );
          }

          /*
           * Skill circle
           */
          ctx.beginPath();

          ctx.arc(
            0,
            0,
            radius,
            0,
            Math.PI * 2
          );

          ctx.fillStyle =
            skills[i].color +
            "25";

          ctx.fill();

          ctx.strokeStyle =
            skills[i].color +
            (isHovered
              ? "dd"
              : "77");

          ctx.lineWidth =
            isHovered
              ? 1.5
              : 0.8;

          ctx.stroke();

          /*
           * Skill icon
           */
          const img =
            imgCache.current[i];

          const iconSize =
            radius * 1.1;

          if (img) {
            ctx.drawImage(
              img,
              -iconSize / 2,
              -iconSize / 2,
              iconSize,
              iconSize
            );
          } else {
            ctx.fillStyle =
              skills[i].color;

            ctx.font =
              `500 ${Math.round(
                9 * scale
              )}px sans-serif`;

            ctx.textAlign =
              "center";

            ctx.textBaseline =
              "middle";

            ctx.fillText(
              skills[i].name.substring(
                0,
                3
              ),
              0,
              0
            );
          }

          ctx.restore();
        }
      );
    };

    /*
     * Animation
     */
    const tick = () => {
      const s =
        state.current;

      if (!s.dragging) {
        s.angleY += s.velY;

        s.angleX +=
          s.velX * 0.3;

        s.velX *= 0.97;
      }

      draw();

      raf =
        requestAnimationFrame(
          tick
        );
    };

    tick();

    return () =>
      cancelAnimationFrame(
        raf
      );
  }, []);

  /*
   * Detect hovered skill
   */
  const getHovered = (
    mx: number,
    my: number
  ) => {
    const {
      angleX,
      angleY,
    } = state.current;

    let best = -1;

    let bestDist = 36;

    basePts.forEach(
      (point, index) => {
        const [
          px,
          py,
          pz,
        ] = rotate(
          point.ox * GLOBE_R,
          point.oy * GLOBE_R,
          point.oz * GLOBE_R,
          angleX,
          angleY
        );

        const depth =
          (pz + GLOBE_R) /
          (2 * GLOBE_R);

        const radius =
          ICON_R *
          (0.5 +
            0.6 * depth);

        const distance =
          Math.hypot(
            mx -
              (cx + px),
            my -
              (cy - py)
          );

        if (
          distance < radius &&
          distance < bestDist
        ) {
          best = index;
          bestDist = distance;
        }
      }
    );

    return best;
  };

  /*
   * Mouse movement
   */
  const onMouseMove = (
    e: React.MouseEvent<HTMLCanvasElement>
  ) => {
    const canvas =
      cvs.current;

    if (!canvas) return;

    const rect =
      canvas.getBoundingClientRect();

    const mx =
      e.clientX -
      rect.left;

    const my =
      e.clientY -
      rect.top;

    const s =
      state.current;

    if (s.dragging) {
      const dx =
        e.clientX -
        s.lastMX;

      const dy =
        e.clientY -
        s.lastMY;

      s.angleY +=
        dx * 0.005;

      s.angleX -=
        dy * 0.005;

      s.velY =
        dx * 0.005;

      s.velX =
        -dy * 0.005;

      s.lastMX =
        e.clientX;

      s.lastMY =
        e.clientY;
    }

    s.hovered =
      getHovered(
        mx,
        my
      );

    if (s.hovered >= 0) {
      setTooltip({
        visible: true,
        name:
          skills[
            s.hovered
          ].name,
        x: mx + 14,
        y: my - 10,
      });
    } else {
      setTooltip(
        (previous) => ({
          ...previous,
          visible: false,
        })
      );
    }
  };

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-float" />

        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"
          style={{
            animationDelay: "2s",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">

          <p className="text-primary font-semibold uppercase tracking-wider mb-3">
            My Tech Stack
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-6" />

          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Technologies I use to build modern web applications,
            APIs, mobile apps, and scalable SaaS products.
          </p>
        </div>

        {/* Globe */}
        <div className="flex justify-center relative">

          <canvas
            ref={cvs}
            width={500}
            height={500}
            style={{
              cursor:
                state.current.dragging
                  ? "grabbing"
                  : "grab",
              maxWidth: "100%",
            }}
            onMouseMove={
              onMouseMove
            }
            onMouseDown={(e) => {
              const s =
                state.current;

              s.dragging =
                true;

              s.velY = 0;
              s.velX = 0;

              s.lastMX =
                e.clientX;

              s.lastMY =
                e.clientY;
            }}
            onMouseUp={() => {
              state.current.dragging =
                false;
            }}
            onMouseLeave={() => {
              state.current.hovered =
                -1;

              setTooltip(
                (previous) => ({
                  ...previous,
                  visible: false,
                })
              );

              state.current.dragging =
                false;
            }}
          />

          {/* Tooltip */}
          {tooltip.visible && (
            <div
              className="
                absolute
                pointer-events-none
                bg-card
                border
                border-border
                rounded-lg
                px-3
                py-1.5
                text-sm
                font-medium
                text-foreground
                shadow-lg
                z-10
              "
              style={{
                left: tooltip.x,
                top: tooltip.y,
              }}
            >
              {tooltip.name}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">

          <div
            className="
              relative
              p-8
              rounded-2xl
              backdrop-blur-lg
              bg-card/50
              border
              border-border/50
              max-w-3xl
              mx-auto
            "
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-purple-500/10" />

            <div className="relative z-10">

              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Building & Learning
              </h3>

              <p className="text-foreground/80 leading-relaxed">
                I continuously improve my skills by building
                real-world applications, exploring modern
                technologies, and working with scalable
                software architectures.
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsGlobe;