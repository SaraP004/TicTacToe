import { useState } from "react";

export function XFollowCard({ username, name, initialState }) {
  const [isFollowing, setIsFollowing] = useState(initialState);
  const img = `https://unavatar.io/twitter/${username}`;
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followcard-button is-following"
    : "tw-followcard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followcard">
      <header className="tw-followcard-header">
        <img className="tw-followcard-avatar" src={img} />
        <div className="tw-followcard-info">
          <strong>{name}</strong>
          <span>{username}</span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick} className={buttonClassName}>
          {text}
        </button>
      </aside>
    </article>
  );
}
