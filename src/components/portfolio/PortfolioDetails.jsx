import styled from "styled-components"
import { PortfolioContainer } from "./PortfolioContainer"
import fashion from "../../assest/pokemon.jpg"
import mapty from "../../assest/mapty.jpg"
import weather from "../../assest/weather.jpg"
import todo from "../../assest/myportfolio.jpg"
import states from "../../assest/maxwy.jpg"

export const PortfolioDetails = () => {

    const data = [
        {image: fashion, title: "Pokemon", Giturl: "https://github.com/Abdulaziz2004/pokemon", Neturl: "https://pokemon-bio.pages.dev"},
        {image: mapty, title: "Mapty", Giturl: "https://github.com/Abdulaziz2004/mapty-starter", Neturl: "https://maratmapty.netlify.app/"},
        {image: weather, title: "Weather API", Giturl: "https://github.com/Abdulaziz2004/open-weather", Neturl: "https://modest-bhaskara-093d7a.netlify.app/"},
        {image: todo, title: "My First Portfolio", Giturl: "https://github.com/Abdulaziz2004/portfolio", Neturl: "https://abdulazizdev.netlify.app"},
        {image: states, title: "States API",Giturl: "https://github.com/Abdulaziz2004", Neturl: "https://heuristic-hypatia-be2b1a.netlify.app/"},
    ]

    return (
        
        <Container>
            {
                data.map(({image, title, Giturl, Neturl}) => {
                    return (
                        <PortfolioContainer image={image} title={title} Giturl={Giturl} Neturl={Neturl} />
                    )
                })
            }
        </Container>
    )
}

const Container = styled.div`
    padding: 100px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 50px;

    @media (max-width: 767px) {
        padding: 15px;
    }
    
`