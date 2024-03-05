import "./tribute.css";
export default function page() {
  return (
    <>
      <div className="container">
        <div className="content">
          <section className="top_section">
            <div className="image_container">
              <img
                src="https://picsum.photos/seed/picsum/200/300"
                alt="tribute"
              />
            </div>
            <div>
              <h1>Nature Picture</h1>
              <h3>Captured for Wildlife</h3>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
