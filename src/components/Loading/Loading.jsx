import { Rings } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div>
      <Rings
        visible={true}
        height="160"
        width="160"
        color="#87d28d"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass="loader"
      />
    </div>
  );
};
