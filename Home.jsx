import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import backgroundImage from '../assets/newbg.jpg'; // Adjust the path accordingly

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError('Failed to fetch data. Please try again.');
        setLoading(false);
      });
  }, []);

  return (
    <div
      className='p-4'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div className='flex justify-center items-center gap-x-4 mb-8'>
        <button
          className={`btn ${showType === 'table' ? 'bg-yellow-400' : 'bg-red-200'}`}
          onClick={() => setShowType('table')}
        >
          Table View
        </button>
        <button
          className={`btn ${showType === 'card' ? 'bg-yellow-400' : 'bg-red-200'}`}
          onClick={() => setShowType('card')}
        >
          Card View
        </button>
      </div>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-5xl text-black-500 font-bold'>Inkwell Pages: Your Digital Book Emporium</h1>
        <Link to='/books/create' className='btn btn-primary'>
          <MdOutlineAddBox className='text-3xl text-sky-800' />
          <span className='ml-2 text-lg font-bold'>Add Book</span>
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : error ? (
        <div className='text-red-500'>{error}</div>
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
