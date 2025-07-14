import React from 'react'

function Button({
  children,
  type="button",
  bgColor= "bg-purple-600",
  textColor ='text-white',
ClassName='',
...props
}) {
  return (
<button className={`px-4 py-2 rouded-lg  ${ClassName}${textColor}${bgColor}`}{...props}>{children}</button>
  )
}

export default Button