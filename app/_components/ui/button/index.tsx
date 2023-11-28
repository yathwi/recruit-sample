interface ButtonProps {
  name: string;
}

export const Button: React.FC<ButtonProps> = ({ name }) => {
  return <button className=" bg-black text-white font-cinzel py-2 px-4 rounded">{name}</button>;
};
