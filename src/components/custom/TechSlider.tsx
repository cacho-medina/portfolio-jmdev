import { Marquee } from "../magicui/marquee";

const skills = [
    {
        name: "Bootstrap",
        color: "#2b6dff",
        nameID: "bootstrap",
        assets: "/icons/bootstrap.svg",
    },
    {
        name: "Css",
        color: "#20c928",
        nameID: "css",
        assets: "/icons/css.svg",
    },
    {
        name: "Express",
        color: "#d41cf1",
        nameID: "express",
        assets: "/icons/express.svg",
    },
    {
        name: "Git",
        color: "#ef2350",
        nameID: "git",
        assets: "/icons/git.svg",
    },
    {
        name: "Html",
        color: "#ff36a2",
        nameID: "html",
        assets: "/icons/html.svg",
    },
    {
        name: "Javascript",
        color: "#5345f7",
        nameID: "js",
        assets: "/icons/js.svg",
    },
    {
        name: "Typescript",
        color: "#007acc",
        nameID: "ts",
        assets: "/icons/ts.svg",
    },
    {
        name: "Mongo DB",
        color: "#ffaa1b",
        nameID: "mongo",
        assets: "/icons/mongo.svg",
    },
    {
        name: "Next Js",
        color: "#8935ff",
        nameID: "next",
        assets: "/icons/next.svg",
    },
    {
        name: "Node Js",
        color: "#ff006e",
        nameID: "node",
        assets: "/icons/node.svg",
    },
    {
        name: "Postgresql",
        color: "#00a1ff",
        nameID: "postgres",
        assets: "/icons/postgres.svg",
    },
    {
        name: "React Js",
        color: "#f97316",
        nameID: "react",
        assets: "/icons/react.svg",
    },
    {
        name: "Sql",
        color: "#6366f1",
        nameID: "sql",
        assets: "/icons/sql.svg",
    },
    {
        name: "Tailwind",
        color: "#21c95f",
        nameID: "tailwind",
        assets: "/icons/tailwind.svg",
    },
    {
        name: "Vite",
        color: "#8D71FE",
        nameID: "vite",
        assets: "/icons/vite.svg",
    },
    {
        name: "Wordpress",
        color: "#0077b6",
        nameID: "wordpress",
        assets: "/icons/wordpress.svg",
    },
    {
        name: "Nest Js",
        color: "#e0234e",
        nameID: "nest",
        assets: "/icons/nest.svg",
    },
    {
        name: "Sequelize",
        color: "#03AFEF",
        nameID: "sequelize",
        assets: "/icons/sequelize.svg",
    },
    {
        name: "Vercel",
        color: "#d41cf1",
        nameID: "vercel",
        assets: "/icons/vercel.svg",
    },
    {
        name: "Prisma",
        color: "#2d3748",
        nameID: "prisma",
        assets: "/icons/prisma.svg",
    },
    {
        name: "Postman",
        color: "#ff6c37",
        nameID: "postman",
        assets: "/icons/postman.svg",
    },
    {
        name: "Swagger",
        color: "#85EA2D",
        nameID: "swagger",
        assets: "/icons/swagger.svg",
    },
    {
        name: "ChatGPT",
        color: "#007acc",
        nameID: "chatgpt",
        assets: "/icons/openAI.svg",
    },
    {
        name: "Gemini",
        color: "#000def",
        nameID: "gemini",
        assets: "/icons/gemini.svg",
    },
    {
        name: "Bolt",
        color: "#ac1919",
        nameID: "bolt",
        assets: "/icons/bolt.svg",
    },
    {
        name: "V0",
        color: "#1c7dff",
        nameID: "v0",
        assets: "/icons/v0.svg",
    },
];

const firstRow = skills.slice(0, skills.length / 4);
const secondRow = skills.slice(skills.length / 4, skills.length / 2);
const thirdRow = skills.slice(skills.length / 2, skills.length * 0.75);
const fourthRow = skills.slice(skills.length * 0.75);

const TechSkill = ({
    name,
    assets,
    color,
}: {
    name: string;
    assets: string;
    color: string;
}) => {
    return (
        <div
            style={{
                backgroundColor: "transparent",
                transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor =
                    color;
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor =
                    "transparent";
            }}
            className={`relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 flex items-center justify-center gap-2`}
        >
            <img
                src={assets}
                alt=""
                width="23"
                height="23"
                className="grayscale w-[23px]"
            />
            <h4>{name}</h4>
        </div>
    );
};

export const TechSlider = () => {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:25s]">
                {firstRow.map((skill) => (
                    <TechSkill key={skill.nameID} {...skill} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:25s]">
                {secondRow.map((skill) => (
                    <TechSkill key={skill.nameID} {...skill} />
                ))}
            </Marquee>
            <Marquee pauseOnHover className="[--duration:25s]">
                {thirdRow.map((skill) => (
                    <TechSkill key={skill.nameID} {...skill} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:25s]">
                {fourthRow.map((skill) => (
                    <TechSkill key={skill.nameID} {...skill} />
                ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0D0E12] filter blur-[80px]"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0D0E12] filter blur-[80px]"></div>
        </div>
    );
};
