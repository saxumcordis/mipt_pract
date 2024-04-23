import { Button } from '../Button/Button'

export const ListItem = ({ cat, onDelete, index, onLike }) => {

  const { url, like } = cat;

  return <div className="list-item">
    <img src={url} alt="" />
    <span className="list-item__title">
      {'title' + index}
    </span>
    <span className="list-item__likes">
      {'Likes: ' + like}
    </span>
    <Button className='like-button' onClick={() => onLike(url)}>like</Button>
    <Button type="share" onClick={() => console.log(`SHARE ITEM ${url}`)} />

    <Button className='delete-button' onClick={() => onDelete(url)}>delete</Button>
  </div>
}
