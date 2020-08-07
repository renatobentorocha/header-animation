type sizeProps = {
  origin_size: number;
  destination_size: number;
  size: number;
};

export const scale = ({ origin_size, destination_size, size }: sizeProps) => {
  return (size / origin_size) * destination_size;
};
