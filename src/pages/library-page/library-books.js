import { CulturalPlacePage } from "../library/cultural-places/cultural-place-page";
import { ExchangesPage } from "../library/exchanges/exchanges-page";
import { GamesPage } from "../library/games/games-page";
import { NonVerbalPage } from "../library/non-verbal/non-verbal-page";
import { TechnologyPage } from "../library/technology/technology-page";

export const libraryBooks = [
    {
        title: "Services",
        url: "services",
        page: null,
    },
    {
        title: "Lieux culturels",
        url: "lieux-culturels",
        page: <CulturalPlacePage/>,
    },
    {
        title: "Échanges",
        url: "echanges",
        page: <ExchangesPage/>,
    },
    {
        title: "Jeux",
        url: "jeux",
        page: <GamesPage/>,
    },
    {
        title: "Technologies",
        url: "technologies",
        page: <TechnologyPage/>,
    },
    {
        title: "Education",
        url: "education",
        page: null,
    },
    {
        title: "Écrits",
        url: "ecrits",
        page: null,
    },
    {
        title: "Professions",
        url: "professions",
        page: null,
    },
    {
        title: "Outils",
        url: "outils",
        page: null,
    },
    {
        title: "Verbale",
        url: "verbale",
        page: null,
    },
    {
        title: "Réseaux sociaux",
        url: "reseaux-sociaux",
        page: null,
    },
    {
        title: "Non verbale",
        url: "non-verbale",
        page: <NonVerbalPage/>,
    },
    {
        title: "Communication visuelle",
        url: "communication-visuelle",
        page: null,
    }
]