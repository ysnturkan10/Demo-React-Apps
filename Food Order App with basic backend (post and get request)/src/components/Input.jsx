export default function Input({ id, label, ...props }) {
  return (
    <>
      <p className="control">
        <label htmlFor={id}>{label} </label>
        <input id={id} {...props} name={id} required />
      </p>
    </>
  );
}
