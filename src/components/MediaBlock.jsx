// Frame for an image: proportions, border + hard shadow, hover behaviour.
// Knows nothing about projects — Card and the logofolio both build on it.
//
// size:   'big' | 'small' | 'logo'          → proportions (see .media--* in style.css)
// border: 'left' | 'center' | 'right'       → direction of the hard shadow (default 'left' = bottom-left)
// hover:  'none' | 'reveal' | 'colorize'    → what happens on hover
// src:    path relative to public/, no leading slash ('images/x.png'); empty = placeholder
// children: rendered on top of the image (Card puts the hover overlay here)
export default function MediaBlock({
  size = 'small',
  border = 'left',
  hover = 'none',
  src,
  label = '',
  children
}) {
  const className = `media media--${size} media--border-${border} media--hover-${hover}`

  return (
    <div className={className}>
      {src ? (
        <img src={`${import.meta.env.BASE_URL}${src}`} alt={label} className={'project-img'} />
      ) : (
        <span className="mono media__placeholder">[{label}]</span>
      )}
      {children}
    </div>
  )
}