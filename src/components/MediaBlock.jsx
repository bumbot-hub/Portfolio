import './MediaBlock.css'

// Frame for an image: proportions, border + hard shadow, hover behaviour.
// Knows nothing about projects — used by project subpages and case studies.
//
// size:   'big' | 'small'        → proportions (see .media--* in MediaBlock.css)
// border: 'left' | 'center' | 'right'       → direction of the hard shadow (default 'left' = bottom-left)
// src:    path relative to public/, no leading slash ('images/x.webp'); empty = placeholder
// children: rendered on top of the image
export default function MediaBlock({
  size = 'small',
  border = 'left',
  src,
  label = '',
  children
}) {
  const className = `media media--${size} media--border-${border}`

  return (
    <div className={className}>
      {src ? (
        <img src={`${import.meta.env.BASE_URL}${src}`} alt={label} />
      ) : (
        <span className="mono media__placeholder">[{label}]</span>
      )}
      {children}
    </div>
  )
}
