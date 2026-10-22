// decorative ringed planet used around the profile photo

function Planet({ className }) {
  return (
    <span className={'planet ' + className} aria-hidden="true">
      <span className="pl-r"><i /><b /></span><span className="pl-ball" /><span className="pl-r f"><i /><b /></span>
    </span>
  )
}

export default Planet
