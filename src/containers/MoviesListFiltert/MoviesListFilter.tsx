import { Form, Formik } from 'formik';
import Select from 'react-select';

const MoviesListFilter = () => {
  const genreOptions = [
    { value: 'action', label: 'Action' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'animation', label: 'Animation' },
  ];

  const sortOptions = [
    { value: 'titleDes', label: 'TitleDes' },
    { value: 'titleAsc', label: 'TitleAsc' },
    { value: 'voteRatingDes', label: 'VoteRatingDes' },
  ];

  return (
    <Formik
      initialValues={{ title: '', genres: '', sortOptions: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <input name="title" placeholder="Enter movie title" type="text" />
        <Select name="genres" options={genreOptions} />
        <Select name="sortOptions" options={sortOptions} />
        <button type="submit">Submit</button>
        <button>Reset</button>
      </Form>
    </Formik>
  );
};

export default MoviesListFilter;
