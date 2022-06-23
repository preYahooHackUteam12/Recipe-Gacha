import React from 'react'
import Link from 'next/link'

type PROPS = {
  buttonText: string
  state: boolean
  href: string
}

const categorybutton: React.FC<PROPS> = (props) => {
  return (
    <div>
      {props.state ? (
        <button className="mx-10 bg-slate-200 border-black">
          <Link href={props.href}>{props.buttonText}</Link>
        </button>
      ) : (
        <button className="mx-10 bg-yellow-200 border-black">
          <Link href={props.href}>{props.buttonText}</Link>
        </button>
      )}
    </div>
  )
}
export default categorybutton
