import { useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';

type Props = {
  onAdd: (post: Movie) => void;
};

export const NewMovie: React.FC<Props> = ({ onAdd }) => {
  const [count, setCount] = useState(0);
  const [movie, setMovie] = useState<Movie>({
    title: '',
    description: '',
    imgUrl: '',
    imdbUrl: '',
    imdbId: '',
  });

  const isFormValid =
    movie.title.trim() &&
    movie.imgUrl.trim() &&
    movie.imdbUrl.trim() &&
    movie.imdbId.trim();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMovie(prevMovie => ({
      ...prevMovie,
      [name]: value,
    }));
  };
  const reset = () => {
    setMovie({
      title: '',
      description: '',
      imgUrl: '',
      imdbUrl: '',
      imdbId: '',
    });
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isFormValid) {
      onAdd(movie);
      setCount(prevCount => prevCount + 1);
      reset();
    }
  };



  return (
    <form className="NewMovie" key={count} onSubmit={handleSubmit}>
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={movie.title}
        onChange={handleChange}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={movie.description}
        onChange={handleChange}
        required
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={movie.imgUrl}
        onChange={handleChange}
        required
      />

      <TextField
        name="imdbUrl"
        label="IMDB URL"
        value={movie.imdbUrl}
        onChange={handleChange}
        required
      />

      <TextField
        name="imdbId"
        label="IMDB ID"
        value={movie.imdbId}
        onChange={handleChange}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={!isFormValid}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
