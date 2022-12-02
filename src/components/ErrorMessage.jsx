export const ErrorMessage = ({ error, className }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <h3 className="text-white text-3xl font-bold">Ooops..</h3>
      <p className="text-white text-xl font-medium">
        Ocorreu um erro ao buscar os dados...
      </p>
      <p className="text-white text-base font-normal">{error.message}</p>

      {error.response.data?.eror ? (
        <p>{JSON.stringify(error.response.data.eror)}</p>
      ) : (
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: error.response.data }}
        />
      )}
    </div>
  );
};
