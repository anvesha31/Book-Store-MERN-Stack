import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-yellow-100 rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='w-fit px-4 py-1 bg-blue-400 rounded-lg text-white'>
          {book.publishYear}
        </h2>
        <h4 className='my-2 text-pink-500'>{book._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-green-500 text-3xl' />
          <h2 className='my-1 text-purple-600 font-bold'>{book.title}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-green-500 text-3xl' />
          <h2 className='my-1 text-purple-600 font-bold'>{book.author}</h2>
        </div>
        <p className='mt-4 text-gray-700 font-bold'>START READING!!!</p>
        <h5 className='w-fit px-4 py-1 bg-blue-400 rounded-lg text-white'>
          {book.about}
        </h5>
      </div>
    </div>
  );
};

export default BookModal;
