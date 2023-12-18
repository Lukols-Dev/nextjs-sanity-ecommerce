"use client";

import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment } from "react";

interface ModalProps {
  isOpen: boolean;
  position?: "left" | "right" | "center";
  header: string | React.ReactNode | null;
  body: string | React.ReactNode | null;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ position, header, body, isOpen, onClose }) => {
  const enterLeavePosiotion: string = !position
    ? "translate-x-full"
    : position === "center"
    ? ""
    : position === "left"
    ? "-translate-x-full"
    : "translate-x-full";

  return (
    <Transition show={isOpen}>
      <Dialog
        onClose={onClose}
        className="relative z-50 flex items-center justify-center"
      >
        <Transition.Child
          as={Fragment}
          enter="transition-all ease-in-out duration-300"
          enterFrom="opacity-0 backdrop-blur-none"
          enterTo="opacity-100 backdrop-blur-[.5px]"
          leave="transition-all ease-in-out duration-300"
          leaveFrom="opacity-100 backdrop-blur-[.5px]"
          leaveTo="opacity-0 backdrop-blur-none"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition-all ease-in-out duration-300"
          enterFrom={enterLeavePosiotion}
          enterTo="translate-x-0"
          leave="transition-all ease-in-out duration-200"
          leaveFrom="translate-x-0"
          leaveTo={enterLeavePosiotion}
        >
          <Dialog.Panel
            className={`mx-auto ${
              position === "center"
                ? "my-auto h-full md:h-fit rounded-md bg-white/100"
                : "my-auto h-full bg-white/80"
            } fixed flex w-full flex-col border-l border-neutral-200 p-6 text-black backdrop-blur-xl md:w-[390px]
            ${!position ? "bottom-0 right-0 top-0" : ""}
            ${position && position === "center" ? "inset-0" : ""}
            ${position && position === "right" ? "bottom-0 right-0 top-0" : ""}
            ${position && position === "left" ? "bottom-0 left-0 top-0" : ""}
             `}
          >
            <div className="flex items-center justify-between">{header}</div>
            {body}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Modal;
