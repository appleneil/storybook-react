import React from 'react';
import './star-wars.scss'


class StarWars extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            characterName: '',
            films: [],
            isLoading: this.props.isLoading
        }
    }

    componentDidMount() {
        if (this.props.dataUrl && !this.props.isEmpty) {
            this.fetchData();
            this.setState({
                isLoading: false
            })
        }
    }

    fetchData() {
        fetch('https://swapi.co/api/people/1/?format=json')
            .then(response => response.json())
            .then(character => {
                this.setState({
                    characterName: character.name
                });

                let filmUrls = character.films.slice();

                filmUrls.forEach(url => {
                    fetch(url)
                        .then(response => response.json())
                        .then(film => {
                            this.setState({
                                films: [...this.state.films, film]
                            })
                        })
                });
            });
    }

    render() {

        const {characterName, films, isLoading} = this.state;
        const sortedFilms = films.sort(function(a, b){ return parseInt(a.release_date) - parseInt(b.release_date) });

        return (
            <div className={`star-wars ${isLoading ? 'is-loading' : ''}`}>
                {
                    (!isLoading && characterName && films) &&
                    <div>
                        <h1 className="star-wars-character">
                            {characterName}
                        </h1>
                        <ul className="star-wars-films">
                            {
                                sortedFilms.map(film => {
                                    return (
                                        <li className="star-wars-film" key={film.episode_id}>
                                            <span className="year">{new Date(film.release_date).getFullYear()}</span> - {film.title}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                }
                {
                    this.props.isEmpty &&
                        <div className="empty-message">
                            <p>Ce ne sont pas les droïdes que vous recherchez</p>
                            <img src="https://media.giphy.com/media/4560Nv2656Gv0Lvp9F/source.gif" />
                        </div>
                }
                <div className="loader"></div>
            </div>
        )
    }
}

export default StarWars;