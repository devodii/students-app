import { Back } from "../components/back";
import { ShareCourseModal } from "../components/share-course";
import { CreateCourse } from "../components/create-course";
import { Wrapper } from "../components/wrapper";

export default function CreateCoursePage() {
  return (
    <Wrapper>
      <div className="w-full max-w-4xl flex flex-col items-start gap-4">
        <Back />
        <CreateCourse />

        <ShareCourseModal />
      </div>
    </Wrapper>
  );
}
