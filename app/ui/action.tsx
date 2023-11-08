import Link from "next/link";

interface Props {
  action?: () => void;
  href?: string;
  children: React.ReactNode;
  props?: any;
}

function Action({ action, href, children, ...props }: Props) {
  const style = `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`;

  return href ? (
    <Link href={href} {...props} className={style}>
      {children}
    </Link>
  ) : (
    <button onClick={action} {...props} className={style}>
      {children}
    </button>
  );
}

export default Action;
