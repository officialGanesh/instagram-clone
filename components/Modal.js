import React from "react";
import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom"

function Modal() {
  const [openModal, setOpenModal] = useRecoilState(modalState);

  return(
      <div>
          {
              openModal && (
                  <p>This is modal component</p>
              )
          }
      </div>
  );
}

export default Modal;
