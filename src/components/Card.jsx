import { Link } from 'react-router-dom'
import MediaBlock from './MediaBlock.jsx'

function Tags({ tags, className }) {
  return (
    <div className={className}>
      {tags.map((tag) => (
        <span key={tag} className="tag-hard mono">{tag}</span>
      ))}
    </div>
  )
}


export default function Card({
  slug,
  heading,
  category,
  description,
  tags = [],
  size,
  image,
  imageLabel,
  border,
  hover,
  index,
  reverse = false
}) {
  const to = `/projects/${slug}`
  const resolvedBorder = border ?? (reverse === false ? 'left' : 'right')
  const resolvedHover = hover ?? (size === 'big' ? 'none' : 'reveal')

  if (size === 'small') {
    return (
      <Link to={to} className="card-small">
        <MediaBlock size="small" border={resolvedBorder} hover={resolvedHover} src={image} label={imageLabel}>
          <div className="media__overlay">
            <h3 className="overlay-heading">{heading}</h3>
            <Tags tags={tags} className="overlay-tags" />
          </div>
        </MediaBlock>
      </Link>
    )
  }

  // size === 'big'
  return (
    <article className="feat-row">
      <Link to={to} className={`feat-media-slot${reverse ? ' order-2' : ''}`}>
        <MediaBlock size="big" border={resolvedBorder} hover={resolvedHover} src={image} label={imageLabel} />
      </Link>

      <div className={`feat-copy${reverse ? ' order-1' : ''}`}>
        <h3 className="feat-heading">
          <span className="feat-num">#{String(index).padStart(2, '0')}</span>
          <span className="feat-title">{heading}</span>
        </h3>
        <p className="feat-desc">{description}</p>
        <Tags tags={tags} className="feat-tags" />
        <Link to={to} className="feat-link mono">GET MORE DETAILS →</Link>
      </div>
    </article>
  )
}