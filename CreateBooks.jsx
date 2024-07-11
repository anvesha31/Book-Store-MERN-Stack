import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [about, setAbout] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
      about,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='bg-pink-100 min-h-screen'>
      <div className='p-4'>
        <BackButton />
        <h1 className='text-3xl my-4 font-bold'>Create Book</h1>
        {loading && <Spinner />}
        <div className='flex flex-col border-2 border-blue-400 rounded-xl w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-4'>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-700'>Title</label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-700'>Author</label>
            <input
              type='text'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-700'>Publish Year</label>
            <input
              type='number'
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-700'>About the book</label>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500'
              rows={4}
            />
          </div>
          <button
            className='p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold'
            onClick={handleSaveBook}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateBooks;
