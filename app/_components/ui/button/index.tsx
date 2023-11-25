interface ButtonProps {
  name: string;
}

export const Button: React.FC<ButtonProps> = ({ name }) => {
  return <button className=" bg-black text-white font-bold py-2 px-4 rounded">{name}</button>;
};
