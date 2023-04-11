import { CulturalPlacePage } from "../library/cultural-places/cultural-place-page";
import { ExchangesPage } from "../library/exchanges/exchanges-page";
import { GamesPage } from "../library/games/games-page";
import { NonVerbalPage } from "../library/non-verbal/non-verbal-page";
import { TechnologyPage } from "../library/technology/technology-page";

export const LibraryCategories = {
    SERVICES: "Services",
    CULTURAL_PLACES: "Lieux culturels",
    EXCHANGES: "Échanges",
    GAMES: "Jeux",
    TECHNOLOGY: "Technologies",
    EDUCATION: "Education",
    WRITINGS: "Écrits",
    PROFESSIONS: "Professions",
    TOOLS: "Outils",
    VERBAL: "Verbale",
    SOCIAL_NETWORKS: "Réseaux sociaux",
    NON_VERBAL: "Non verbale",
    VISUAL_COMMUNICATION: "Communication visuelle",
}

export const libraryBooks = [
    {
        title: LibraryCategories.SERVICES,
        url: "services",
        page: null,
    },
    {
        title: LibraryCategories.CULTURAL_PLACES,
        url: "lieux-culturels",
        page: <CulturalPlacePage/>,
    },
    {
        title: LibraryCategories.EXCHANGES,
        url: "echangfffes",
        page: <ExchangesPage/>,
    },
    {
        title: LibraryCategories.GAMES,
        url: "jeux",
        page: <GamesPage/>,
    },
    {
        title: LibraryCategories.TECHNOLOGY,
        url: "technologies",
        page: <TechnologyPage/>,
    },
    {
        title: LibraryCategories.EDUCATION,
        url: "education",
        page: null,
    },
    {
        title: LibraryCategories.WRITINGS,
        url: "ecrits",
        page: null,
    },
    {
        title: LibraryCategories.PROFESSIONS,
        url: "professions",
        page: null,
    },
    {
        title: LibraryCategories.TOOLS,
        url: "outils",
        page: null,
    },
    {
        title: LibraryCategories.VERBAL,
        url: "verbale",
        page: null,
    },
    {
        title: LibraryCategories.SOCIAL_NETWORKS,
        url: "reseaux-sociaux",
        page: null,
    },
    {
        title: LibraryCategories.NON_VERBAL,
        url: "non-verbale",
        page: <NonVerbalPage/>,
    },
    {
        title: LibraryCategories.VISUAL_COMMUNICATION,
        url: "communication-visuelle",
        page: null,
    }
]