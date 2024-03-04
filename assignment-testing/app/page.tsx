
export default function Home() {
  return (
  
    <div className="flex h-screen">
    {/* <!-- Sidebar --> */}
    <div className="bg-gray-800 text-white w-64 py-4 fixed left-0 top-0 bottom-0">
        <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
        <p className="px-4">This is the sidebar content.</p>
    </div>
    
    {/* <!-- Main Content --> */}
    <div className="ml-64 p-8">
        {/* <!-- Header --> */}
        <div className="bg-gray-900 text-white py-4 fixed left-0 right-0 top-0">
            <h1 className="text-lg font-semibold text-center">Header</h1>
        </div>
        
        {/* <!-- Content --> */}
        <div className="mt-16">
            <h2 className="text-lg font-semibold mb-4">Main Content</h2>
            <p className="mb-4">This is the main content area. It will scroll independently of the header, sidebar, and footer.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia doloremque necessitatibus eligendi, officia tempore nulla non amet, consectetur iure debitis, fugiat consequuntur! Corrupti illo necessitatibus ipsum. Voluptatibus, eligendi earum?</p>
        </div>
        
        {/* <!-- Footer --> */}
        <div className="bg-gray-900 text-white py-4 fixed left-0 right-0 bottom-0">
            <h3 className="text-lg font-semibold text-center">Footer</h3>
        </div>
    </div>
</div>
  )
}
