import TvShowCard from './TvShowCard';

function TvShowsSection(props) {

    const displayTvShows = () => {
        return props.tvShows.map(tvShow => {
            return <TvShowCard key={tvShow.id} tvShow={ tvShow} />
        })
    }

    return (
        <section className="tv-shows-container">
            {displayTvShows()}
        </section>

    );
}

export default TvShowsSection;