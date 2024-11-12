interface SocialButtonProps {
  name: string;
  link: string;
}

function SocialButton({ name, link }: SocialButtonProps) {
  return (
    <a
      className="button socialButton"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  );
}

export default SocialButton;
