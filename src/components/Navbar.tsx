import Link from "next/link";


const Navbar = () => {
  return (
    <>
    <Link href={"/"}>
        Home
    </Link>
    <Link href={"/new"}>
        New Task
    </Link>
    </>
  );
};

export default Navbar;
