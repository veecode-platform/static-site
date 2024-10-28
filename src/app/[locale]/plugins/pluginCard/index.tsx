import { Button, NavigationLink } from "@/components";
import style from "./PluginCard.module.scss";
import { PluginsCardProps } from "./types";

export const PluginCard: React.FC<PluginsCardProps> = ({
  image,
  title,
  path,
  tags,
  desc,
  buttonLabel,
}) => {
  return (
    <div className={style.card}>
      <div className={style.card__content}>
        <header className={style["card__content-header"]}>
          <img src={image} alt="" className={style.icon} />
          <div className={style.titlebar}>
            <h2 className={style.titlebar__title}>{title}</h2>
            <div className={style.titlebar__tags}>
              {tags.map((tag) => (
                <span key={tag} className={style["titlebar__tags-chips"]}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className={style["card__content-text"]}>
          <p className={style.desc}>{desc}</p>
        </div>
      </div>
      <div className={style.card__button}>
        <NavigationLink href={`/plugin/${path}` as any}>
          <Button>{buttonLabel}</Button>
        </NavigationLink>
      </div>
    </div>
  );
};
