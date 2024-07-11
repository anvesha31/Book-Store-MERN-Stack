import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr className='bg-gray-200'>
          <th className='border border-gray-500 rounded-md px-4 py-2 font-bold'>No</th>
          <th className='border border-gray-500 rounded-md px-4 py-2 font-bold'>Title</th>
          <th className='border border-gray-500 rounded-md px-4 py-2 max-md:hidden font-bold'>
            Author
          </th>
          <th className='border border-gray-500 rounded-md px-4 py-2 max-md:hidden font-bold'>
            Publish Year
          </th>
          <th className='border border-gray-500 rounded-md px-4 py-2 font-bold'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='h-8'>
            <td className='border border-gray-500 rounded-md px-4 py-2 text-center font-bold'>{index + 1}</td>
            <td className='border border-gray-500 rounded-md px-4 py-2 font-bold'>{book.title}</td>
            <td className='border border-gray-500 rounded-md px-4 py-2 max-md:hidden font-bold'>{book.author}</td>
            <td className='border border-gray-500 rounded-md px-4 py-2 max-md:hidden font-bold'>{book.publishYear}</td>
            <td className='border border-gray-500 rounded-md px-4 py-2 text-center'>
              <div className='flex justify-center items-center gap-x-4'>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-600 hover:text-green-800' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-blue-600 hover:text-blue-800' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600 hover:text-red-800' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
