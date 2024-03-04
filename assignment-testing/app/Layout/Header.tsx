
const Header = () => {
  return (
    <div className="flex justify-between bg-gray-400 p-3">
        <p>
            <img src="https://picsum.photos/536/354"  className="w-[40px] box-border object-fill"   />
        </p>
        <p className="flex justify-between gap-2 w-[100px] ml-2 mr-2">
            <button className="text-red-700">1</button>
            <button className="text-blue-700">2</button>
            <button className="text-green-700">3</button>
        </p>
    </div>
  )
}

export default Header