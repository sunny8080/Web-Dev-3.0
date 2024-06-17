import { useParams } from "react-router-dom"

type Params = {
  courseId: string,
  lectureNo?: string
}

const Course = () => {
  const { courseId, lectureNo = 1 } = useParams<Params>();
  return (
    <div>welcome to Course {courseId} with lecture {lectureNo}</div>
  )
}

export default Course
