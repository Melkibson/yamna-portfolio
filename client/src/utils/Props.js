
//Image Skills
import js from "../assets/img/section-skills/javascript.png"
import csharp from "../assets/img/section-skills/csharp.png"
import dotnet from "../assets/img/section-skills/dotnet.png"
import react from "../assets/img/section-skills/react.png"
import styledComponents from "../assets/img/section-skills/scomponent.png"
import wordpress from "../assets/img/section-skills/wordpress.png"
import sass from "../assets/img/section-skills/sass.png"
import ai from "../assets/img/section-skills/ai.png"
import ps from "../assets/img/section-skills/ps.png"

//Image Projects
import web1 from '../assets/img/section-works/web1.png'
import web1Tablet from '../assets/img/section-works/web1@tablet.png'
import web1Mobile from '../assets/img/section-works/web1@mobile.png'

import web2 from '../assets/img/section-works/web2.png'
import web2Tablet from '../assets/img/section-works/web2@tablet.png'
import web2Mobile from '../assets/img/section-works/web2@mobile.png'

import logo1 from '../assets/img/section-works/logo1.png'
import logo1Tablet from '../assets/img/section-works/logo1@tablet.png'
import logo1Mobile from '../assets/img/section-works/logo1@mobile.png'

import logo2 from '../assets/img/section-works/logo2.png'
import logo2Tablet from '../assets/img/section-works/logo2@tablet.png'
import logo2Mobile from '../assets/img/section-works/logo2@mobile.png'

import logo3 from '../assets/img/section-works/logo3.png'
import logo3Tablet from '../assets/img/section-works/logo3@tablet.png'
import logo3Mobile from '../assets/img/section-works/logo3@mobile.png'


export const propsSkills = [
    {
        id: 1,
        name: 'javascript',
        src: js
    },
    {
        id: 2,
        name: 'react.js',
        src: react
    },
    {
        id: 3,
        name: 'styled components',
        src: styledComponents
    },
    {
        id: 4,
        name: 'wordpress',
        src: wordpress + "#wordpress"
    },
    {
        id: 5,
        name: 'SASS',
        src: sass + "#sass"
    },
    {
        id: 6,
        name: 'adobe photoshop',
        src: ps
    },
    {
        id: 7,
        name: 'adobe illustrator',
        src: ai
    },
    {
        id: 8,
        name: 'C#',
        src: csharp + '#csharp'
    },
    {
        id: 9,
        name: '.NET',
        src: dotnet + '#dotnet'
    },

]
export const propsProjects = [
    {
        id: 1,
        imgSrc : [{desktop:`${web1}`}, {tablet: `${web1Tablet}`}, {mobile: `${web1Mobile}`}],
        title: 'Start up landing page',
        desc: "Intégration d'une landing page pour une entreprise de type start-up ou agence",
        link: '/startup-template',

    },
    {
        id: 2,
        imgSrc : [{desktop: `${web2}`}, {tablet: `${web2Tablet}`}, {mobile: `${web2Mobile}`}],
        title: 'Insurance landing page',
        desc: "Intégration d'une landing page pour une entreprise de type assurance.",
        link: '/insurance-template',
    },
    {
        id: 3,
        imgSrc : [{desktop: `${logo1}`}, {tablet: `${logo1Tablet}`}, {mobile: `${logo1Mobile}`}],
        title: 'BankeSchon',
        desc: "Concept logo pour une application à destination des banques",
        link: '',
    },
    {
        id: 4,
        imgSrc : [{desktop: `${logo2}`}, {tablet: `${logo2Tablet}`}, {mobile: `${logo2Mobile}`}],
        title:'Y&J Agency',
        desc: "Concept logo pour une agence digitale",
        link: '',
    },
    {
        id: 5,
        imgSrc : [{desktop: `${logo3}`}, {tablet: `${logo3Tablet}`}, {mobile: `${logo3Mobile}`}],
        title:'Farm and Go',
        desc: "Concept logo pour une application qui met en relation consommateurs et produits locaux des agriculteurs",
        link:  '',
    }
]

export const propsNav = [{
    label : [ 
        "réalisations",
        "compétences",
        "expériences",
        "contact"
    ],
    ancre : [
        "projects",
        "skills",
        "xp",
        "contact"

    ]
}]
   
