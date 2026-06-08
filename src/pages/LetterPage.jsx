import LetterCard from '../components/LetterCard'

function LetterPage({ friendName }) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <LetterCard friendName={friendName} />
    </div>
  )
}

export default LetterPage
