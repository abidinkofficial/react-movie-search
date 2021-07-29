import { DotsHorizontalIcon } from "@heroicons/react/outline";

const LoadMoreCard = ({ page, setPage }) => {

  return (
    <div onClick={() => { setPage((page) => page + 1) }} className="group w-52 h-96 flex flex-col justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-md my-5 mx-2 p-3 transition-colors cursor-pointer shadow-md">
      <h2 className="group-hover:text-gray-900 transition-colors">Load more</h2>
      <DotsHorizontalIcon className="h-5 w-5 m-1" />
    </div>
  )
}

export default LoadMoreCard;