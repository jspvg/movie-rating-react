export const PageNotFound = () => {
  return (
    <div className="center-content">
      <h3>Page not found</h3>
      <p>
        The page you are looking for doesn't exist or you don't have permission
        to access it. Make sure to <a href="/auth">login</a> if you haven't
        already!
      </p>
    </div>
  );
};
