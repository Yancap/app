import { IconType } from 'react-icons'
import { SiNextdotjs, SiReact, SiTypescript, 
SiNodedotjs, SiJavascript, SiSass, SiStyledcomponents, 
SiHtml5, SiCss3, SiBootstrap, SiPython, SiGit, 
SiTailwindcss, SiExpress, SiFastify, SiFigma, 
SiCsharp, SiAngular, SiNestjs, SiVitest, SiPrisma, SiZod, SiChakraui, SiAxios, SiReacthookform, SiReactquery, SiFirebase 
} from 'react-icons/si'
import { RiDatabase2Fill } from 'react-icons/ri'
import { FaJava } from 'react-icons/fa6'
import { TbBrandReactNative } from 'react-icons/tb'
import { GrMysql } from 'react-icons/gr'


interface Icons {
    [key: string]: IconType ;
}

export const icons: Icons =  {
    'nextjs': SiNextdotjs,
    'react': SiReact,
    'typescript': SiTypescript,
    'nodejs': SiNodedotjs,
    'javascript': SiJavascript,
    'sass': SiSass,
    'styled-components': SiStyledcomponents,
    'html': SiHtml5,
    'css': SiCss3,
    'bootstrap': SiBootstrap,
    'python': SiPython,
    'git': SiGit,
    'tailwindcss': SiTailwindcss,
    'express': SiExpress,
    'fastify': SiFastify,
    'sql': RiDatabase2Fill,
    'figma': SiFigma,
    'csharp': SiCsharp,
    'java': FaJava,
    'react-native': TbBrandReactNative,
    'angular': SiAngular,
    'nestjs': SiNestjs,
    'vitest': SiVitest,
    'mysql': GrMysql,
    'prismaorm': SiPrisma,
    'zod': SiZod,
    'chakraui': SiChakraui,
    'axios': SiAxios,
    'react-hook-forms': SiReacthookform,
    'react-query': SiReactquery,
    'firebase': SiFirebase
}