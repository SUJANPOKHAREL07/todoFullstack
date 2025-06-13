import PropTypes from "prop-types";

const Modal = ({ children }) => {
  return (
    <div className="relative z-50">
      <div className="fixed bg-black/40 inset-0">
        <div className="fixed inset-0 flex justify-center items-center p-4">
          <div className="flex items-center justify-center w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.any.isRequired,
    onClose: PropTypes.func,
};

export default Modal;