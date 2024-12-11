import clsx from "clsx";
import Link from "next/link";

type ButtonProps = {
  href?: string;
  buttonStyle: string;
  title: string;
  icon?: JSX.Element;
};

const Button = ({ href, buttonStyle, title, icon }: ButtonProps) => {
  const buttonContent = (
    <span className="relative inline-flex overflow-hidden">
      <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
        {title}
      </div>
      <div className="absolute translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
        {title}
      </div>
      {icon && <span className="ml-2">{icon}</span>}
    </span>
  );

  const baseStyle = clsx(`${buttonStyle} group relative rounded-sm inline-flex px-6 py-2 items-center font-semibold text-lg cursor-pointer`);

  return href ? (
    <Link
      href={href}
      className={clsx(baseStyle, "inline-flex px-6 py-2 items-center font-semibold text-lg cursor-pointer")}
    >
      {buttonContent}
    </Link>
  ) : (
    <button
      type="submit"
      className={clsx(baseStyle, "inline-flex px-6 py-2 items-center font-semibold text-lg cursor-pointer")}
    >
      {buttonContent}
    </button>
  );
};

export { Button };
