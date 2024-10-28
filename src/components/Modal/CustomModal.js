// components/CustomModal.js
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

const CustomModal = ({ open, onOpenChange, title, children }) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 max-w-md p-6 bg-white rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2">
        <Dialog.Title className="text-lg font-bold">{title}</Dialog.Title>
        <Dialog.Close asChild>
          <button className="absolute top-2 right-2">
            <Cross2Icon />
          </button>
        </Dialog.Close>
        <div className="mt-4">{children}</div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CustomModal;
