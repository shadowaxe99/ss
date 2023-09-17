```javascript
import { gql, useMutation } from '@apollo/client';

const FEEDBACK_MUTATION = gql`
  mutation SubmitFeedback($userId: ID!, $rating: Int!, $comment: String) {
    submitFeedback(userId: $userId, rating: $rating, comment: $comment) {
      id
      rating
      comment
    }
  }
`;

const Feedback = () => {
  const [submitFeedback, { data }] = useMutation(FEEDBACK_MUTATION);

  const handleFeedbackSubmit = (userId, rating, comment) => {
    submitFeedback({ variables: { userId, rating, comment } });
  };

  return (
    <div>
      {/* Render feedback form here */}
      {/* On form submit, call handleFeedbackSubmit */}
    </div>
  );
};

export default Feedback;
```