import { Button } from '../Button/Button'

export const CatItem = ({ cat, onDelete, onLike }) => {

  const { url, like } = cat;

  return <div className="cat-item">
    <img src={url} alt="" />
    <div className="cat-item__controls"><span className="cat-item__title">
      {cat.breeds[0].name}
    </span>
      <span className="cat-item__likes">
        {'❤️ ' + like}
      </span>
    </div>
    <Button className='like-button' onClick={() => onLike(url)}>like</Button>
    <Button type="share" onClick={() => console.log(`SHARE ITEM ${url}`)} />

    <Button className='delete-button' onClick={() => onDelete(url)}>delete</Button>
  </div>
}
