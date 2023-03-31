export const Button = ({ classButton, children, value }) => {
  return (
    <button className={classButton} value={value}>
      {children}
    </button>
  );
};
