export default function page() {
  return (
    <>
      <div className="w-[50%] mt-10 align-middle m-auto shadow-lg p-5">
        <form className="flex flex-col gap-3">
          <div className="flex gap-3 justify-center mb-3">
            <h1 className="font-bold">Job Application</h1>
            <h4>(Web)</h4>
          </div>
          <div className="flex justify-between">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold "
                htmlFor="name"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="<NAME>"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold "
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="< LAST NAME>"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold "
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="<EMAIL>"
              />
            </div>
            <div className="w-[40%]">
              <label
                className="block text-gray-700 text-sm font-bold "
                htmlFor="jobRole"
              >
                Job Role
              </label>

              <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 ">
                <option value="">select job Role </option>
                <option value="Web Developer">Web Developer</option>
                <option value="Front-End Developer">Front-End Developer</option>
                <option value="Back-End Developer">Back-End Developer</option>
              </select>
            </div>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold"
              htmlFor="address"
            >
              Address
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              name="address"
              rows={4}
              cols={50}
              placeholder="<ADDRESS>"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold "
                htmlFor="city"
              >
                City
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                placeholder="<CITY>"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold "
                htmlFor="pincode"
              >
                Pincode
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pincode"
                type="number"
                placeholder="<PINCODE>"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[40%]">
              <label
                className="block text-gray-700 text-sm font-bold "
                htmlFor="date"
              >
                Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date"
                type="date"
                name="date"
                value={"2024-03-05"}
                placeholder="<NAME>"
              />
            </div>
            <div className="w-[40%]">
              <label
                className="block text-gray-700 text-sm font-bold "
                htmlFor="CV"
              >
                Upload your CV
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="CV"
                type="file"
              />
            </div>
          </div>
          <div className="flex">
            <button
              className="bg-gray-300 text-black p-2 rounded-md  "
              type="submit"
            >
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
