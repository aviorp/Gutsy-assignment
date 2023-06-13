import { Error } from "@/components/Error";
import { FC, ReactNode, useEffect, useState } from "react";

type PageProps = {
  children: ReactNode;
  loading?: boolean;
  error?: string;
};
const Page: FC<PageProps> = ({ children, loading, error }) => {
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (error) {
      setIsError(true);
    }
    setTimeout(() => {
      setIsError(false);
    }, 2000);
  }, [error]);
  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <>
      {!loading && isError && <Error error={error as string} />}

      <div className="h-screen dark:bg-default-900">{children}</div>
    </>
  );
};

export default Page;
