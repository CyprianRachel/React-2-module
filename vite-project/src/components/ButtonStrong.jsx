export function ButtonStrong({ children, test }) {
  return (
    <button onClick={test}>
      <strong>{children}</strong>
    </button>
  );
}
