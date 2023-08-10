export default function createLayout(props) {
  return (
    <>
      <section className="container mx-auto max-w-3xl flex flex-col justify-center flex-grow p-4">
        <h2>Create</h2>
        {props.children}
      </section>
    </>
  );
}
