import { Button } from '../Button/Button'

export const CatItem = ({ url, breeds, isLiked, onDelete, onLike, /* ...otherProps */ }) => {
  /* const { otherProp1 } = otherProps; */

  return <div className="cat-item">
    <img src={url} alt="" />
    <div className="cat-item__controls"><span className="cat-item__title">
      {breeds[0].name}
    </span>
      {(isLiked) && <span className="cat-item__likes">
        ❤️
      </span>}
    </div>
    <Button className={`like-button ${isLiked ? 'like-button_active' : ''}`} onClick={() => onLike(url)}>{!isLiked ? 'like' : 'liked'}</Button>
    <Button type="share" onClick={() => console.log(`SHARE ITEM ${url}`)} />

    <Button className='delete-button' onClick={() => onDelete(url)}>delete</Button>

  </div>
}
