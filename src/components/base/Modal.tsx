import Image from 'next/image';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  openHandler: (isOpen: boolean) => void;
}

export default function Modal({ children, isOpen, openHandler }: ModalProps) {
  return (
    <>
      {isOpen && (
        <div className='flex flex-row justify-center items-center w-full h-full absolute inset-0'>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black/20 flex justify-center items-center z-0"
            onClick={() => {
              openHandler(false);
            }}
          />
          <div className="w-[320px] max-[480px]:w-[240px] h-[480px] max-[480px]:h-[320px] rounded-lg p-2 z-50 bg-white fixed">
            <div className="flex flex-row-reverse">
              <button
                type="button"
                className="border-none"
                onClick={() => {
                  openHandler(false);
                }}
              >
                <Image
                  src="/closes.png"
                  alt="모달 닫기"
                  width="20"
                  height="20"
                />
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
