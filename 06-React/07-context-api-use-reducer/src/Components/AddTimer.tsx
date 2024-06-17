import { useRef } from "react"
import Form, { FormHandle } from "./UI/Form"
import { Timer, useTimersContext } from "../store/TimersContext";
import Input from "./UI/Input";
import Button from "./UI/Button";

const AddTimer = () => {
  const formRef = useRef<FormHandle>(null);
  const { addTimer } = useTimersContext();

  const handleSaveTimer = (data: unknown) => {
    const extractedData = data as { name: string, duration: string };

    const timer: Timer = { name: extractedData.name, duration: +extractedData.duration };
    if (timer.name && timer.duration && timer.duration > 0) {
      addTimer(timer);
      formRef.current?.clear();
    }
  }

  return (
    <div>
      <Form ref={formRef} onSave={handleSaveTimer} id="add-timer" >
        <Input type="text" label="Name" id="name" name="name" />
        <Input type="number" min={1} label="Duration" id="duration" name="duration" />

        <Button as="button">
          Add Timer
        </Button>
      </Form>
    </div>
  )
}

export default AddTimer
