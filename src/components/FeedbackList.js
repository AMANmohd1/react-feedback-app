import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
function FeedbackList({feedback,handleDelete}) {
  if(!feedback || feedback.length === 0){
      return <p>No Feedbacks</p>
  }

  return (
  <div className='feedback-list'>
    {feedback.map((item)=>{
      return <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
    })}
  </div>
  )
  
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }
  )
}

export default FeedbackList