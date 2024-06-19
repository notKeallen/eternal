import Game from "./Game";

function ListOfGames({ games }) {
    return (
        <div className="flex justify-between mb-20px md:px-[40px]">
            {games.map((game, index) => (
                <div key={index} className="w-[32%] md:w-[12%] z-20">
                    <Game src={game.src} alt={game.alt} />
                </div>
            ))}
        </div>
    );
}

export default ListOfGames;
