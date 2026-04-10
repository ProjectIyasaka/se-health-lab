type ShareButtonsProps = {
  title: string;
  url: string;
};

const buildShareLinks = ({ title, url }: ShareButtonsProps) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  return {
    x: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    line: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
    hatena: `https://b.hatena.ne.jp/entry/${encodedUrl}`,
  };
};

export default function ShareButtons(props: ShareButtonsProps) {
  const links = buildShareLinks(props);

  return (
    <div className="share-buttons" aria-label="この記事を共有">
      <span className="share-buttons-label">Share</span>
      <div className="share-buttons-list">
        <a href={links.x} target="_blank" rel="noopener noreferrer" className="share-button share-button-x">
          X
        </a>
        <a href={links.line} target="_blank" rel="noopener noreferrer" className="share-button share-button-line">
          LINE
        </a>
        <a href={links.hatena} target="_blank" rel="noopener noreferrer" className="share-button share-button-hatena">
          はてブ
        </a>
      </div>
    </div>
  );
}
