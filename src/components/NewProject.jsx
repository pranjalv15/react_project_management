import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredtitle = title.current.value;
    const entereddescription = description.current.value;
    const enteredduedate = dueDate.current.value;
    if (
      enteredtitle.trim() === "" ||
      entereddescription.trim() === "" ||
      enteredduedate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredtitle,
      description: entereddescription,
      dueDate: enteredduedate,
    });
  }
  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-[40rem] mt-16">
        <div className="flex items-center justify-end gap-4 my-4">
          <button
            className=" text-stone-800 hover:text-stone-950"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className=" px-6 py-2 rounded-md bg-stone-800 text-stone-200 hover:text-stone-100 hover:bg-stone-950"
          >
            Save
          </button>
        </div>
        <div>
          <Input type="text" label="TITLE" ref={title} />
          <Input label="DESCRIPTION" textarea={true} ref={description} />
          <Input type="date" label="DUE DATE" ref={dueDate} />
        </div>
      </div>
    </>
  );
}
export default NewProject;
